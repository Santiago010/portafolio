import React from "react";

const ParagraphError = ({ msgError }) => {
  return (
    <p className="lock__error animate__animated animate__pulse">{msgError}</p>
  );
};

export default ParagraphError;
