import _ from "lodash";
import React, { FC, useEffect, useState } from "react";
import { WaveLoading } from "styled-spinkit";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import axios from "../../network";
import { Ingredient, IngredientChoice } from "../definitions";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 1,
  meat: 3,
};

const BurgerBuilder: FC = () => {
  const [ingredients, setIngredients] = useState<IngredientChoice>();
  const [totalPrice, setTotalPrice] = useState<number>(4);
  const [purchasable, setPurchasable] = useState<boolean>(false);
  const [purchaseMode, setPurchaseMode] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<IngredientChoice>(
        "https://burger-builder-sara-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      )
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setPurchaseMode(false);
      });
  }, []);

  const checkPurchasable = (ingredients: IngredientChoice) => {
    const sum = _.keys(ingredients)
      .map((key) => {
        if (
          key == "meat" ||
          key == "cheese" ||
          key == "salad" ||
          key == "bacon"
        )
          return ingredients[key];
      })
      .reduce((sum, el) => {
        if (sum !== undefined && el !== undefined) return sum + el;
      }, 0);
    setPurchasable(sum ? sum > 0 : false);
  };

  const addIngredientHandler = (type: Ingredient) => {
    if (!ingredients) return;
    const oldCount = ingredients[type];
    if (oldCount == undefined) return;
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
      [type]: newCount,
    };
    setIngredients(updatedIngredients);
    const newPrice = totalPrice + INGREDIENT_PRICES[type];
    setTotalPrice(newPrice);
    checkPurchasable(updatedIngredients);
  };

  const removeIngredientHandler = (type: Ingredient) => {
    if (!ingredients) return;
    const oldCount = ingredients[type];
    if (oldCount == 0 || oldCount === undefined) return;
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
      [type]: newCount,
    };
    setIngredients(updatedIngredients);
    const newPrice = totalPrice - INGREDIENT_PRICES[type];
    setTotalPrice(newPrice);
    checkPurchasable(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchaseMode(true);
  };

  const purchaseCancelHandler = () => {
    setPurchaseMode(false);
  };

  const purchaseContinueHandler = () => {
    setLoading(true);
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: "Sara Locatelli",
        address: {
          street: "rainbow",
          country: "Italy",
        },
        email: "test@gmail.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        setLoading(false);
        setPurchaseMode(false);
      })
      .catch((error) => {
        setLoading(false);
        setPurchaseMode(false);
      });
  };

  let burger = <WaveLoading />;
  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          ingredients={ingredients}
          price={totalPrice}
          purchasable={purchasable}
          onPurchase={purchaseHandler}
        />
      </>
    );
  }
  return (
    <>
      <Modal show={purchaseMode} modalClosed={() => setPurchaseMode(false)}>
        {!isLoading && ingredients && (
          <OrderSummary
            ingredients={ingredients}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            price={totalPrice}
          />
        )}
        {isLoading && <WaveLoading />}
      </Modal>
      {burger}
    </>
  );
};

export default BurgerBuilder;
