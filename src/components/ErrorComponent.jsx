import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      justifyContent={"center"}
      // left={"50%"}
      // transform={"transalteX(-50%)"}
      w={"100%"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
