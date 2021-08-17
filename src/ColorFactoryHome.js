import React, { useState } from "react";
import { Link } from "react-router-dom";

function ColorFactoryHome({ colors }) {
  // const [colors, setColors] = useState();

  return (
    <div>
      <div className="addColor">
        <h3>Welcome to the color factory.</h3>
        <Link to="/colors/new">Add a color</Link>
      </div>
      <div className="colorList">
        <ul>
          {colors.map(c => (
          <li>
            <Link to={`/colors/${c.colorName}`}>
            {c.colorName}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorFactoryHome;
