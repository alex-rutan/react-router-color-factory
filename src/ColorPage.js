import React from "react";
import { Link, useParams } from "react-router-dom";

/** ColorPage: renders a page with background of certain color
 *
 *  Props:
 *    - color
 *
 */
function ColorPage() {
  const { color } = useParams();

  return (
    <div style={{ backgroundColor: color }}>
      {color}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default ColorPage;
