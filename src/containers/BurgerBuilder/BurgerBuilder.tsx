import _ from "lodash";
import React, { FC, useState } from "react";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import { Ingredient, IngredientChoice } from "../definitions";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 1,
  meat: 3,
};

const BurgerBuilder: FC = () => {
  const [ingredients, setIngredients] = useState<IngredientChoice>({
    bacon: 0,
    salad: 0,
    meat: 0,
    cheese: 0,
  });
  const [totalPrice, setTotalPrice] = useState<number>(4);
  const [purchasable, setPurchasable] = useState<boolean>(false);
  const [purchaseMode, setPurchaseMode] = useState<boolean>(false);

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
    alert("continue");
  };

  return (
    <>
      <Modal show={purchaseMode} modalClosed={() => setPurchaseMode(false)}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={totalPrice}
        />
      </Modal>
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
};

export default BurgerBuilder;
