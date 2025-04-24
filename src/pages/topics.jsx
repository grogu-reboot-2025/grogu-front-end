import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "react-spring";
import useFadeInOnLoad from "../hooks/useFadeInOnLoad";
import useGroguApi from "../hooks/useGroguApi";
import { useProductsContext } from "../context/ProductsContext";
import { Heading, Text } from "../components/Typography";
import Card from "../components/Card";
import Button from "../components/Button";
import { Check, Plus } from "lucide-react"; // Icon library

const categoryMap = {
  Insurance: "Insurance",
  Pensions: "Pensions",
  Investments: "Investments",
  "Bank Accounts": "BankAccounts",
  "Credit Cards": "CreditCards",
  ISAs: "ISAs",
};

export const Topics = () => {
  const { selectedProducts, setSelectedProducts, setApiData } =
    useProductsContext();
  const [checkedStates, setCheckedStates] = useState({
    Insurance: false,
    Pensions: false,
    Investments: false,
    "Bank Accounts": false,
    "Credit Cards": false,
    ISAs: false,
  });

  const [shouldFetch, setShouldFetch] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const navigate = useNavigate();
  const { data, error, loading } = useGroguApi(apiEndpoint);
  const fadeIn = useFadeInOnLoad();

  const handleToggle = (topic) => {
    setCheckedStates((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const handleSubmit = () => {
    const selected = Object.entries(checkedStates)
      .filter(([_, checked]) => checked)
      .map(([label]) => categoryMap[label]);

    const endpoint = `/products?category=${selected.join(",")}`;
    setApiEndpoint(endpoint);
    setSelectedProducts(selected);
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch && !loading && data) {
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
  }, [shouldFetch, loading, data]);

  return (
    <animated.div style={fadeIn}>
      <Heading>Preferences</Heading>
      <div style={{ textAlign: "center" }}>
        <Text>
          Select the categories for the products you're interested in:
        </Text>
      </div>
      <Card>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            maxWidth: "600px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(checkedStates).map((topic) => (
            <button
              key={topic}
              onClick={() => handleToggle(topic)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                backgroundColor: checkedStates[topic] ? "#11b67a" : "#808080",
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              {topic}
              <span
                style={{
                  display: "inline-block",
                  width: "1em",
                  textAlign: "center",
                }}
              >
                {checkedStates[topic] ? "✓" : "+"}
              </span>
            </button>
          ))}
        </div>
      </Card>
      <div className="mt-6">
        <Button onClick={handleSubmit}>Let's swipe!</Button>
      </div>
    </animated.div>
  );
};
