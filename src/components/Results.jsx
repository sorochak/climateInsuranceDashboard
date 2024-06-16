import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

function Results() {
  const [imageUrls, setImageUrls] = useState({});
  const fetchedRef = useRef(false); // Ref to track if data has been fetched

  useEffect(() => {
    if (!fetchedRef.current) {
      const imageNames = ["ep.png", "freq_ratios.png", "summary_stats.png"];
      const urls = {};
      imageNames.forEach((imageName, index) => {
        fetch(`http://127.0.0.1:5000/get-image/${imageName}`)
          .then((response) => response.blob())
          .then((blob) => {
            urls[imageName.split(".")[0]] = URL.createObjectURL(blob); // Use the file name as the key
            if (index === imageNames.length - 1) {
              // Check if last image
              setImageUrls(urls);
            }
          })
          .catch((error) => {
            console.error(`Failed to fetch image ${imageName}:`, error);
          });
      });
      fetchedRef.current = true;
    }
  }, []);

  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={2} justifyContent="center">
        {Object.keys(imageUrls).length > 0 && (
          <>
            <Grid item xs={12} md={6}>
              <img
                src={imageUrls.freq_ratios}
                alt="Frequency Ratios"
                height="1000"
                style={{
                  maxWidth: "100%",
                  marginTop: "-6rem",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  src={imageUrls.summary_stats}
                  alt="Average Annual Loss"
                  height="400"
                  style={{
                    marginLeft: "-12rem",
                  }}
                />
                <img
                  src={imageUrls.ep}
                  alt="Loss Exceedance Probability"
                  height="400"
                  style={{
                    marginLeft: "-12rem",
                  }}
                />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Results;
