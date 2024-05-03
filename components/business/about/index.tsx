import React from "react";
import isEqual from "react-fast-compare";

function About() {
  return <section>123</section>;
}

export default React.memo(About, isEqual);
