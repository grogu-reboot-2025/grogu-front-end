import React from "react";
import { Heading, Text } from "../components/Typography";
import { SwipeableCardStack } from "../components/SwipeableCardStack";
import { useProductsContext } from "../context/ProductsContext";

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
};

export const Swipe = () => {
  const { apiData } = useProductsContext();

  if (!apiData) {
    console.log("API Data is loading...");
    return <Text>Loading...</Text>;
  }

  const cardData = [];

  // Iterating over the keys of the apiData object
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

  // Shuffle the card data array to randomize the order
  shuffleArray(cardData);

  console.log("Card Data (Shuffled): ", cardData);

  return (
    <>
      <Heading>Swipe</Heading>
      <Text>Swipe through your options here.</Text>
      <SwipeableCardStack data={cardData} />
    </>
  );
};
