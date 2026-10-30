import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <div className="parent p-6 gap-5">
        <Card user='Habib' />
        <Card user='Salaman' />
      </div>
    </>
  );
};

export default App;