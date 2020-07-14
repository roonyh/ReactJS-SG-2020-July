import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { Typography, Link } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: inline-flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  .MuiDivider-root {
    margin: 0px 4px;
  }
`;

const LanguagePicker = ({ languages, selectedLanguage, onSelectLanguage }) => {
  return (
    <Wrapper>
      {languages.map((language, index, { length }) => (
        <>
          <Typography>
            {language === selectedLanguage ? (
              language
            ) : (
              <Link onClick={() => {console.log("SS"); onSelectLanguage(language)}}>{language}</Link>
            )}
          </Typography>
          {index < length - 1 && <Divider orientation="vertical" flexItem/>}
        </>
      ))}
    </Wrapper>
  );
};

export default LanguagePicker;
