import React from "react";
import { Box } from "@mui/material";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptoData, searchTerm }) => {
  const filteredData = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm)
  );

  return (
    <Box
      sx={{
        width: "100%",         
        maxWidth: "none",       
        marginTop: "20px",      
      }}
    >
      {filteredData.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </Box>
  );
};

export default CryptoList;
