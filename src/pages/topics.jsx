import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";

export const Topics = () => {
  const [checkedStates, setCheckedStates] = useState({
    Insurance: false,
    Pensions: false,
    Investments: false,
    Banking: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    let statesToSubmit = [];
    for (const topic in checkedStates) {
      if (checkedStates[topic] == true) {
        statesToSubmit.push(topic);
      }
    }
    // send statesToSubmit to API
    console.log(statesToSubmit);
  };

  const fadeIn = useFadeInOnLoad();

  return (
    <animated.div style={fadeIn}>
      <Card>
        <FormGroup>
          {Object.keys(checkedStates).map((topic) => (
            <FormControlLabel
              key={topic}
              control={
                <Checkbox
                  name={topic}
                  checked={checkedStates[topic]}
                  onChange={handleCheckboxChange}
                />
              }
              label={topic}
            />
          ))}
        </FormGroup>
        {/* <pre>{JSON.stringify(checkedStates, null, 2)}</pre> */}
        <Button onClick={handleSubmit}>Let's swipe!</Button>
      </Card>
    </animated.div>
  );
};
