export const fetchGiantBomb = async () => {
  try {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=5caa696b41ac3fc2a8a789a382f4337109e98366&format=json',
    );

    if (response.ok) {
      const { results } = await response.json();
      console.log(results);
      return results;
    }
    throw new Error(response.statusText);
  } catch (error) {
    throw new Error(error);
  }
};