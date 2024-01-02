import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ffffff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "#1565c0", fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            FOOD MART
          </Typography>

          <ShoppingCartIcon
            height="60"
            width="60"
            sx={{ color: "#1565c0", marginLeft: "auto", marginRight: "2%" }}
          />

          <Button variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
