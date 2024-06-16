import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  Container,
} from "@mui/material";
import reaskLogo from "../static/reaskLogo.webp";

function Header() {
  const theme = useTheme(); // Use this for accessing theme specifics if needed

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        position="absolute"
        color="default"
        sx={{ backgroundColor: theme.palette.grey[300] }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                mt: "4px",
              }}
            >
              <img
                src={reaskLogo} // Use the imported variable here
                alt="Reask Logo"
                style={{ height: "3rem", width: "auto" }}
              />
            </Box>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Climate Resilient Property Dashboard
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
