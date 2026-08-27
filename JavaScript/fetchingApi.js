async function fetchUserData(userId) {
  const url = `https://typicode.com{userId}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return null;
  }
}

// Usage:
fetchUserData(1).then(user => console.log(user));