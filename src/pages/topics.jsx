import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGroguApi from '../hooks/useGroguApi';
import { useProductsContext } from '../context/ProductsContext';
import { Heading, Text } from '../components/Typography';
import Card from '../components/Card';
import { TopicsButton } from '../components/TopicsButton';
import { Button } from '../components/Button';

const categoryMap = {
  Insurance: 'Insurance',
  Pensions: 'Pensions',
  Investments: 'Investments',
  'Bank Accounts': 'BankAccounts',
  'Credit Cards': 'CreditCards',
  ISAs: 'ISAs',
};

export const Topics = () => {
  const { setSelectedProducts, setApiData } = useProductsContext();
  const [checkedStates, setCheckedStates] = useState({
    Insurance: false,
    Pensions: false,
    Investments: false,
    'Bank Accounts': false,
    'Credit Cards': false,
    ISAs: false,
  });

  const [shouldFetch, setShouldFetch] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const navigate = useNavigate();
  const { data, loading } = useGroguApi(apiEndpoint);

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

    const endpoint = `/products?category=${selected.join(',')}`;
    setApiEndpoint(endpoint);
    setSelectedProducts(selected);
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch && !loading && data) {
      setApiData(data);
      navigate('/swipe', {
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
    <div>
      <Heading>Preferences</Heading>
      <div style={{ textAlign: 'center' }}>
        <Text>Select the categories for the products you're interested in:</Text>
      </div>
      <Card>
        <TopicsButton
          topics={Object.keys(checkedStates)}
          checkedStates={checkedStates}
          handleToggle={handleToggle}
        />
      </Card>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button onClick={handleSubmit}>Let's swipe!</Button>
      </div>
    </div>
  );
};
