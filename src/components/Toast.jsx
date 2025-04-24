import React, { useEffect } from "react";
import styled from "styled-components";

export const Toast = ({ message, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const toastElement = document.getElementById("toast");
      if (toastElement) {
        toastElement.focus();
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <ToastWrapper
      id="toast"
      role="alert"
      aria-live="assertive"
      tabIndex={-1} 
    >
      {message}
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  font-size: 1.5rem; /* Larger font size for better visibility */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  max-width: 90%;
  outline: none; /* Remove default focus outline */
  border: 2px solid #fff; /* Add a visible border for focus indication */
`;