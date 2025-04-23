export async function fetchProfiles() {
  const BASE = process.env.REACT_APP_API_BASE_URL;
  try {
    const response = await fetch(`${BASE}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}