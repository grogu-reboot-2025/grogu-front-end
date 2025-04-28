import React, { useState } from "react";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import { Heading, Text } from "../components/Typography";
import Card from "../components/Card";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const fadeIn = useFadeInOnLoad();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/topics");
  };

  const [age, setAge] = useState("18");
  const [isKids, setIsKids] = useState(false);
  const [isMarried, setIsMarried] = useState(false);

  const ageOptions = Array.from({ length: 83 }, (_, index) => index + 18);
  return (
    <animated.div style={fadeIn}>
      <Heading>Get to know you</Heading>
      <div style={{ textAlign: "center" }}>
        <Text>Please tell us a bit about you:</Text>
      </div>

      <Card>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            maxWidth: "600px",
            margin: "1rem auto",
          }}
        >

          <div style={{ flex: "1 1 100%", maxWidth: "300px" }}>
            <label>
              <h4 style={{ padding: "0.3rem" }}>Name</h4>
              <Input
                type="text"
                name="name"
                label="Name"
                style={{ height: "50%" }}
              />
            </label>
          </div>


          <div style={{ flex: "1 1 100%", maxWidth: "300px" }}>
            <h4>Select Your Age</h4>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "100%",
                marginTop: "8px",
              }}
            >
              <option value="" disabled>
                Select Age
              </option>
              {ageOptions.map((ageValue) => (
                <option key={ageValue} value={ageValue}>
                  {ageValue}
                </option>
              ))}
            </select>
          </div>

     
          <div style={{ flex: "1 1 100%", maxWidth: "300px" }}>
            <h4 style={{ padding: "0.3rem" }}>Are you married?</h4>
            <button
              onClick={() => setIsMarried(!isMarried)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: isMarried ? "#11b67a" : "#808080",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {isMarried ? "Yes" : "No"}
            </button>
          </div>


          <div style={{ flex: "1 1 100%", maxWidth: "300px" }}>
            <h4 style={{ padding: "0.3rem" }}>Do you have children?</h4>
            <button
              onClick={() => setIsKids(!isKids)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: isKids ? "#11b67a" : "#808080",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {isKids ? "Yes" : "No"}
            </button>
          </div>
        </div>
      </Card>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </animated.div>
  );
};
