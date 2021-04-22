import React, { FC } from "react";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";

const App: FC = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
