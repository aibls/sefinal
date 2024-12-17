import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Button, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import CryptoList from "./CryptoList";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCryptoData = async () => {
    const response = await axios.get("https://api.coinlore.net/api/tickers/");
    setCryptoData(response.data.data);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", 
        padding: "20px",          
      }}
    >

      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#000" }}>
        Cryptocurrency Prices
      </Typography>


      <Button
        onClick={fetchCryptoData}
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: "#2196F3",
          fontWeight: "bold",
          textTransform: "none",
          border: "1px solid #2196F3",
          marginTop: "10px", 
          "&:hover": {
            backgroundColor: "#f0f0f0",
            color: "#1976D2",
          },
        }}
      >
        Update
      </Button>


      <SearchBar setSearchTerm={setSearchTerm} />


      <CryptoList cryptoData={cryptoData} searchTerm={searchTerm} />
    </Box>
  );
}

export default App;
