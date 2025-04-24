import Card from "../components/Card";
import React from "react";
import { Heading } from "../components/Typography";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const fadeIn = useFadeInOnLoad();
  return (
    <animated.div style={fadeIn}>
      <Card>
        <Heading>Welcome! </Heading>
      </Card>
    </animated.div>
  );
};
