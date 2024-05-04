import React from "react";
import isEqual from "react-fast-compare";

function MyBanks() {
  return <section className="container">aa</section>;
}

export default React.memo(MyBanks, isEqual);
