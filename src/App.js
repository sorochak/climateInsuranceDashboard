import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/adjust", {
        // include any required POST data here
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  console.log(data);

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h4" align="center">
          Welcome to the Climate Insurance Dashboard
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
