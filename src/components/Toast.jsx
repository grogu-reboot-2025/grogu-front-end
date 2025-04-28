import React, { useEffect } from "react";
import styled from "styled-components";

export const Toast = ({ message, isVisible, matchCount }) => {
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
      <NotificationCircle>{matchCount}</NotificationCircle>
      {message}
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  font-size: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  max-width: 90%;
  outline: none;
  border: 2px solid #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 15px 30px;
  }
`;

const NotificationCircle = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `;