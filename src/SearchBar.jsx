import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <TextField
      variant="outlined"
      label="Search"
      onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      sx={{
        marginTop: "20px",   
        width: "250px",        
        display: "block",      
        input: { color: "#000" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { 
            borderColor: "rgba(0, 0, 0, 0.4)", 
          },
          "&:hover fieldset": { 
            borderColor: "rgba(33, 150, 243, 0.7)", 
          },
          "&.Mui-focused fieldset": { 
            borderColor: "rgba(33, 150, 243, 1)",   
          },
        },
      }}
    />
  );
};

export default SearchBar;
