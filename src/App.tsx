import React from "react";
import { Provider } from "react-redux";
import RepositoryList from "./components/RepositoryList";

import "./global.css";

import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  );
};

export default App;
