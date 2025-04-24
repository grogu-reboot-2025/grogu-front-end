import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import useGroguApi from "../hooks/useGroguApi";
import { useProductsContext } from "../context/ProductsContext"; 

const categoryMap = {
  Insurance: "Insurance",
  Pensions: "Pensions",
  Investments: "Investments",
  "Bank Accounts": "BankAccounts",
  "Credit Cards": "CreditCards",
  Isas: "ISAs",
};

export const Topics = () => {
  const { selectedProducts, setSelectedProducts, setApiData } = useProductsContext(); // Get values from context
  const [checkedStates, setCheckedStates] = useState({
    Insurance: false,
    Pensions: false,
    Investments: false,
    "Bank Accounts": false,
    "Credit Cards": false,
    Isas: false,
  });

  const [shouldFetch, setShouldFetch] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const navigate = useNavigate();

  const { data, error, loading } = useGroguApi(apiEndpoint);

  const fadeIn = useFadeInOnLoad();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedStates((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    const selected = Object.entries(checkedStates)
      .filter(([_, checked]) => checked)
      .map(([label]) => categoryMap[label]);

    const queryString = selected.join(",");
    const endpoint = `/products?category=${queryString}`;

    console.log("[handleSubmit] Selected labels:", selected);
    console.log("[handleSubmit] API Endpoint:", endpoint);

    setApiEndpoint(endpoint);
    setSelectedProducts(selected); 
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch && !loading && data) {
      console.log("[API Response]", data);
      setApiData(data);

      navigate("/swipe", {
        state: {
          selectedTopics: Object.entries(checkedStates)
            .filter(([_, checked]) => checked)
            .map(([label]) => label),
          apiData: data,
        },
      });
    }
  }, [shouldFetch, loading, data, navigate, checkedStates, setApiData]);

  useEffect(() => {
    console.log("[Context Values] selectedProducts:", selectedProducts);
    console.log("[Context Values] API Data:", data);
  }, [selectedProducts, data]);

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
        <Button onClick={handleSubmit}>Let's swipe!</Button>
      </Card>
    </animated.div>
  );
};
