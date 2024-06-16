import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Container, Box, Typography } from "@mui/material";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const postYlt = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/adjust", {
  //         method: "POST",
  //         body: JSON.stringify({ key: "value" }),
  //       });

  //       const yltAdjusted = await response.json();
  //       console.log("yltAdjusted: ", yltAdjusted);
  //     } catch (err) {
  //       console.error("Post YLT Error: ", err);
  //     }
  //   };

  //   postYlt();
  // }, []);

  console.log(data);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h4" align="center">
            Climate Resilient Property Dashboard
          </Typography>
          <Results />
        </Box>
      </Container>
    </>
  );
}

export default App;
