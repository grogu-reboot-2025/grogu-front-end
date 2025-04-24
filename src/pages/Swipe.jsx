import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { Heading, Text } from "../components/Typography";
import { SwipeableCardStack } from "../components/SwipeableCardStack";

export const Swipe = () => {
  const location = useLocation(); // Access the passed state
  const { selectedTopics } = location.state || { selectedTopics: [] };

  // Example: Filter card data based on selected topics
  const cardData = selectedTopics.map((topic) => ({
    title: topic,
    description: `Description for ${topic}`,
  }));

  return (
    <>
      <Heading>Swipe</Heading>
      <Text>Swipe through your options here.</Text>
      <SwipeableCardStack data={cardData} />
    </>
  );
};