import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CryptoItem = ({ crypto }) => {
  const percentChange = parseFloat(crypto.percent_change_24h);

  return (
    <Accordion disableGutters sx={{ boxShadow: "none", border: "none" }}>
      <AccordionSummary expandIcon={<AddIcon sx={{ color: "#000000" }} />}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {crypto.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong>Symbol:</strong> {crypto.symbol}
        </Typography>
        <Typography>
          <strong>Price USD:</strong> ${crypto.price_usd}
        </Typography>
        <Typography>
          <strong>Price BTC:</strong> {crypto.price_btc}
        </Typography>
        <Tooltip
          title={
            <Box
              sx={{
                backgroundColor: "#007bff", 
                color: "#fff",              
                padding: "10px",           
                borderRadius: "8px",    
                fontSize: "0.875rem",
                maxWidth: "130px",  
                textAlign: "center",
              }}
            >
              The market capitalization of a cryptocurrency is calculated by multiplying
              the number of coins in circulation by the current price.
            </Box>
          }
          placement="top-start" 
          PopperProps={{
            modifiers: [
              {
                name: "offset", 
                options: {
                  offset: [-10, -10], 
                },
              },
            ],
          }}
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "#007bff", 
                color: "#fff",             
                boxShadow: "none",         
                borderRadius: "8px",      
              },
            },
          }}
        >
          <Typography>
            <strong>Market Cap:</strong> ${crypto.market_cap_usd}
          </Typography>
        </Tooltip>

        <Typography
          sx={{
            color: percentChange < 0 ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          <strong>Percent Change 24H:</strong> {percentChange}%
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CryptoItem;
