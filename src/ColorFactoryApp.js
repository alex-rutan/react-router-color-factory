import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ColorPage from "./ColorPage";
import ColorFactoryHome from "./ColorFactoryHome";
import ColorForm from "./ColorForm";

/**
 *
 */

function ColorFactoryApp() {
  const [colors, setColors] = useState([]);

  function addColor(color) {
    setColors(colors => [color, ...colors]);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <ColorPage colors={colors}/>
        </Route>
        <Route exact path="/colors">
          <ColorFactoryHome colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default ColorFactoryApp;
