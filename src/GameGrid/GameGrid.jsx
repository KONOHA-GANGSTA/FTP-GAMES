import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";
import { GameCard } from "../GameCard/GameCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

export function GameGrid() {
  const [games, setGames] = useState([]);

  const getArr = (num) => {
    let result = [];
    for (let i = 0; i < num; ++i) result.push(0);
    return result;
  };

  useEffect(() => {
    fetchData(games, setGames);
  }, []);

  return (
    <Grid container spacing={2}>
      {games[0]
        ? games.map((game, index) => (
            <Grid lg={3} xs={12} sm={4} item key={index}>
              <GameCard game={game} />
            </Grid>
          ))
        : getArr(20).map((el, ind) => (
            <Grid lg={3} xs={12} sm={4} item key={ind}>
              <CardSkeleton />
            </Grid>
          ))}
    </Grid>
  );
}
