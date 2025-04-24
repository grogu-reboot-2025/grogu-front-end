import { useState } from 'react';

const useOpenAIChat = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '48Od9V2r2XKO0HSROGYWOu4Y4WJjaminE8MQs6ko2Tq2RPWHJ0OXJQQJ99BDACYeBjFXJ3w3AAABACOGH4xW';
  const deploymentName = 'gpt-4';

  const sendMessage = async (messages) => {
    setLoading(true);
    setError(null);

    console.log("Sending request to OpenAI with messages:", messages);

    const url = `https://grogu-openai-chat.openai.azure.com/openai/deployments/${deploymentName}/chat/completions?api-version=2025-01-01-preview`;

    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    };

    const body = JSON.stringify({
      messages,
      temperature: 0.7,
      max_tokens: 100,
    });

    try {
      console.log("Making request to OpenAI API...");
      const res = await fetch(url, { method: 'POST', headers, body });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`HTTP error! Status: ${res.status} - ${errorText}`);
        throw new Error(`HTTP error! Status: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log("Received response from OpenAI:", data);

      setResponse(data);
    } catch (err) {
      console.error("Error during OpenAI request:", err);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log("OpenAI request finished.");
    }
  };

  return { sendMessage, response, loading, error };
};

export default useOpenAIChat;
