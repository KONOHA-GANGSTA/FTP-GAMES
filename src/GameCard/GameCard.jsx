/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./GameCard.module.css";
import cn from "classnames";

export const GameCard = ({ game }) => {
  const [hovered, setHover] = useState(false);
  const hoverOn = () => setHover(true);
  const hoverOff = () => setHover(false);

  const cardStyles = css`
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0px 5px 10px rgb(255, 204, 0), 0 2px 8px rgb(255, 162, 0);
    }
  `;

  return (
    <Card
      variant="outlined"
      onMouseOver={hoverOn}
      onMouseOut={hoverOff}
      className={styles.image}
      css={cardStyles}
    >
      <CardActionArea>
        <div className={styles.layout}>
          <div className={styles.picture}>
            <CardMedia
              component="img"
              image={game.thumbnail}
              alt={game.title}
            />
            <div
              className={cn(styles.shortDescription, {
                [styles.hover]: hovered,
              })}
            >
              <div className={styles.typo}>{game.short_description}</div>
            </div>
          </div>
          <div>
            <CardContent>
              <div className={styles.title}>{game.title}</div>
              <div className={styles.infoFields}>
                <div className={styles.field}>
                  <div className={styles.writtings}>Жанр</div>
                  <div>{game.genre}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.writtings}>Издатель</div>
                  <div>{game.publisher}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.writtings}>Разработчик</div>
                  <div>{game.developer}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.writtings}>Релиз</div>
                  <div>{game.release_date}</div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};
