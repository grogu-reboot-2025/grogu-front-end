import React from "react";
import { Heading, Text } from "../components/Typography";
import { SwipeableCardStack } from "../components/SwipeableCardStack";
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
    console.log("API Data is loading...");
    return <Text>Loading...</Text>;
  }

  const cardData = [];

  Object.keys(apiData).forEach((topic) => {
    console.log(`Processing topic: ${topic}`);
    if (apiData[topic]) {
      apiData[topic].forEach((item) => {
        console.log(`Adding card for item: ${item.Title}`);
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

  console.log("Card Data (Shuffled): ", cardData);

  return (
    <>
      <SwipeableCardStack data={cardData} />
    </>
  );
};
