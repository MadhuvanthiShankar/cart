import React from "react";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

const CardComp = () => {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="watermelon"
          height="140"
          image="/src/assets/watermelon.png"
        />
      </Card>
    </React.Fragment>
  );
};

export default CardComp;
