import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import ApiTest from './components/ApiTest';
import { Heading, Text } from './components/Typography';

const App = () => {
  return (
    <Container>
      <Heading>Welcome to the App</Heading>
      <Text>This is a reusable component demo.</Text>
      <Card>
        <Text>Card Content</Text>
        <Input placeholder="Enter text here" />
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </Card>
      <ApiTest></ApiTest>
    </Container>

  );
};

export default App;
