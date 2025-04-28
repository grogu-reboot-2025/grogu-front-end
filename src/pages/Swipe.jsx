import React from "react";
import { SwipeableCardStack } from "../components/SwipeableCardStack";
import { Text } from "../components/Typography";
import { useProductsContext } from "../context/ProductsContext";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
};

export const Swipe = () => {
  const { apiData } = useProductsContext();

  if (!apiData) {
    return <Text>Loading...</Text>;
  }

  const cardData = [];

  Object.keys(apiData).forEach((topic) => {
    if (apiData[topic]) {
      apiData[topic].forEach((item) => {
        cardData.push({
          title: item.Title,
          description: item.Description,
          url: item.URL,
          ImagePath: item.ImagePath
        });
      });
    }
  });

  shuffleArray(cardData);


  return (
    <>
      <SwipeableCardStack data={cardData} />
    </>
  );
};
