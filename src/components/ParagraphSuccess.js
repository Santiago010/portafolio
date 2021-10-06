import React from "react";

const ParagraphError = ({ success }) => {
  return (
    <p className="lock__success animate__animated animate__pulse">{success}</p>
  );
};

export default ParagraphError;
