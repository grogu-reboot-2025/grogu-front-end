import { useState, useEffect } from 'react';

const useGroguApi = (endpoint = '') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://grogu-api.whitesand-3a16fc7e.uksouth.azurecontainerapps.io';

  useEffect(() => {
    const fetchData = async () => {
      if (!endpoint) {
        console.log('[Grogu API] No endpoint provided, skipping fetch.');
        setLoading(false);
        return;
      }

      const fullUrl = `${API_URL}${endpoint}`;
      console.log(`[Grogu API] Fetching from: ${fullUrl}`);

      setLoading(true);
      try {
        const response = await fetch(fullUrl);
        console.log('[Grogu API] Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('[Grogu API] Fetched data:', result);
        setData(result);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error('[Grogu API] Fetch error:', err.message);
        setError(err.message);
        setData(null); // Clear any previous data
      } finally {
        setLoading(false);
        console.log('[Grogu API] Loading complete.');
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useGroguApi;
