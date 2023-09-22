import React from "react";

const App = (props) => {
  console.log("appel de app");
  return (
    <section className="body-page">
      {props.children}
    </section>
  );
};

export default App;