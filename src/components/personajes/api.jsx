export const fetchPersonajes = async () => {
  const base_URL = "https://hp-api.onrender.com/api/characters";
  try {
    const response = await fetch(base_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetch");
    throw error;
  }
};

export const fetchPersonajesById = async (id) => {
  try {
    const response = await fetch(
      `https://hp-api.onrender.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetch");
    throw error;
  }
};
