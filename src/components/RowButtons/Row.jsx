import React from "react";
import Button from "../Button/Button";

const Row = ({ data, handleInput, result }) => {
  return (
    <div className="row">
      {data.map((n, i) =>
        n !== "=" ? (
          <Button key={i} handleInput={handleInput}>
            {n}
          </Button>
        ) : (
          <Button key={i} handleInput={result}>
            {n}
          </Button>
        )
      )}
    </div>
  );
};

export default Row;
