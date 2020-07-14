import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 24px;
  .MuiTextField-root {
    margin: 16px 0px;
  }
`;

const ItemDetails = ({
  languages,
  currency,
  item,
  onNameChange,
  onPriceChange,
}) => {
  return (
    <form>
      <Wrapper>
        <Typography variant="h4" gutterBottom>
          Menu Item Details
        </Typography>

        {languages.map((language) => (
          <TextField
            id={`outlined-${language}`}
            label={`Name (${language})`}
            variant="outlined"
            value={item[`name${language}`]}
            onChange={(e) => onNameChange(e, languages)}
          />
        ))}

        <TextField
          label="Price"
          id="price-field"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">{currency}</InputAdornment>
            ),
          }}
          value={item.price}
          onChange={(e) => onPriceChange(e)}
        />
      </Wrapper>
    </form>
  );
};

export default ItemDetails;
