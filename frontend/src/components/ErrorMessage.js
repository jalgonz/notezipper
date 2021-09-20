import React from "react";
import { Alert } from "react-bootstrap";

//takes in a variant, which by default is info (blue color)
const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;
