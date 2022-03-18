import React from "react";
import "../../App.css";
import ValuesDisplay from "../ValuesDisplay/ValuesDisplay";
import ButtonClear from "../Button/ButtonClear";
import useCalculator from "../../hooks/useCalculator";
import Row from "../RowButtons/Row";
import Modal from "../Modal/Modal";

const row1 = ["1", "2", "3", "+"];
const row2 = ["4", "5", "6", "-"];
const row3 = ["7", "8", "9", "*"];
const row4 = ["=", "0", ".", "/"];

const Calculator = () => {
  const {
    input,
    setInput,
    handleInput,
    result,
    showModal,
    handleClose,
    error,
  } = useCalculator();

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container-calculator">
        <div className="row">
          <ValuesDisplay input={input} />
        </div>
        <Row data={row1} handleInput={handleInput} />
        <Row data={row2} handleInput={handleInput} />
        <Row data={row3} handleInput={handleInput} />
        <Row data={row4} handleInput={handleInput} result={result} />
        <div className="row">
          <ButtonClear reset={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
      {showModal && <Modal onClose={handleClose}>{error}</Modal>}
    </div>
  );
};

export default Calculator;
