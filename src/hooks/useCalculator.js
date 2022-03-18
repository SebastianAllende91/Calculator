import { evaluate } from "mathjs";
import { useState } from "react";

const useCalculator = () => {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (val) => {
    setInput(input + val);
  };

  const result = () => {
    if (!input.trim()) {
      setShowModal(true);
      setError("Por favor ingrese valores para realizar los cálculos.");
      return;
    }

    if (input.includes("/")) {
      let position = input.length;

      if (Number(input.charAt(position - 1)) === 0) {
        setError("No puede dividir por 0");
        setShowModal(true);
        setInput("");
        return;
      }
    }

    setInput(evaluate(input));
    setTimeout(() => {
      setInput("");
    }, 3000);
  };

  const handleClose = () => setShowModal(false);

  return {
    input,
    result,
    handleInput,
    setInput,
    handleClose,
    showModal,
    error,
  };
};

export default useCalculator;
