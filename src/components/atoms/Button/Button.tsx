import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import theme from "../../../theme";
// import HomeIcon from "@mui/icons-material/Home";
// import home-2 from '../../../public/images/home-2.svg';

const CustomButton: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="outlined"
          color="success"
          style={{
            width: 210,
            height: 49,
            borderRadius: 12,
            marginTop: 340,
            textTransform: "none",
            marginLeft: 20,
            gap: 10,
            border: 0,
            justifyContent: "start",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/flash.svg`}
            alt="Example"
            style={{ alignItems: "start" }}
          />
          Watch how to
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default CustomButton;
