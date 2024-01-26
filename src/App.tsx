import React, { useState } from "react";
import Button from "./components/Button/Button";
import "./assets/css/reset.css"
import "./assets/css/app.css"
import "./assets/css/form.css"
import Form from "./components/Form/Form";

function App() {

  return (
    <div className="body">
      <div className="body__form">
        <div className="body__img"></div>
        <Form/>
      </div>
    </div>
  );
}

export default App;
