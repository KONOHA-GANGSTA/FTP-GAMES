import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";
import { GameCard } from "../GameCard/GameCard";

export function GameGrid() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData(games, setGames);
  }, []);

  return (
    <Grid container spacing={2}>
      {games.map((game, index) => (
        <Grid lg={3} xs={12} sm={4} item key={index}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
}
