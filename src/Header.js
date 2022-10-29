import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComponent from "./Drawer";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const PAGES = ["Products", "Services", "About Us", "Contact Us"];

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {matches ? (
            <>
              <ShoppingCartCheckoutIcon />
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                Text Here
              </Typography>
              <DrawerComponent pages={PAGES} />
            </>
          ) : (
            <>
              <ShoppingCartCheckoutIcon />
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
                indicatorColor="secondary"
                sx={{ marginLeft: "auto" }}
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
