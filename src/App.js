import Dashboard from './components/Dashboard';
import React, { useState } from "react";
import Header from "./components/Header";
import { Container, Box, Button, CircularProgress } from "@mui/material";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  const fetchData = async () => {
    setFetchingData(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/adjust", {
        method: "POST",
        body: JSON.stringify({ key: "value" }),
      });

      console.log("response: ", response);
      const yltAdjusted = await response.json();
      setData(yltAdjusted);
      console.log("yltAdjusted: ", yltAdjusted);
    } catch (err) {
      console.error("Post YLT Error: ", err);
    } finally {
      setFetchingData(false);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ mt: 15, textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={fetchData}
            disabled={fetchingData}
          >
            {fetchingData ? "Fetching..." : "Fetch Data"}
          </Button>
        </Box>
        {fetchingData && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        <Box>{data.length > 0 && <Results data={data} />}</Box>
      </Container>
    </>
  );
}

export default App;
