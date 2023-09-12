export const fetchData = async (games, setGames) => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "8f1cabd229msha0a5dc8a32ad8f7p11fbddjsnc56344589ac6",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(options.url, options);
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const gameData = new TextDecoder("utf-8").decode(value);
      setGames([...games, ...JSON.parse(gameData)]);
      console.log(gameData);
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};
