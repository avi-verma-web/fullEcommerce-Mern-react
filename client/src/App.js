import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./GlobalState";

//Components
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <MainPages></MainPages>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
