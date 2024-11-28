import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Success from "./components/Success";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
