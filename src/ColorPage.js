import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

/** ColorPage: renders a page with background of certain color
 *
 *  Props:
 *    - color
 *
 */
function ColorPage({ colors }) {
  const { color } = useParams();

  let colorCode;
  try { 
    colorCode = colors.find(c => c.colorName === color).colorCode;
  } catch {
    return <Redirect to="/colors"/>  
  }

  return (
    <div style={{ backgroundColor: colorCode }}>
      {color}
      <Link to="/colors">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default ColorPage;
