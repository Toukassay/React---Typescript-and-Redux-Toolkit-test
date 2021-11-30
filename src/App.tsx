import React from "react";
import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
// import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      {/* <TestComponent nice person={{ name: "Nicolas", lastName: "Troger" }} /> */}
      <TodoComponent />
    </div>
  );
}

export default App;
