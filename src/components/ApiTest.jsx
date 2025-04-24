import React from 'react';
import useGroguApi from '../hooks/useGroguApi';

const ApiTest = () => {
  const { data, error, loading } = useGroguApi();  

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-2">API Response:</h2>
      <pre className="bg-white p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiTest;
