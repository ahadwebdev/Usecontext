import React, { useContext } from "react";
import { UserContext } from "./Component1";

const Component3 = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <ul>
        <li>{data}</li>
      </ul>
    </div>
  );
};

export default Component3;
