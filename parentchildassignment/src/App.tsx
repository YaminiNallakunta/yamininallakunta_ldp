import React from "react";
import styled from "styled-components";
import Sidebar from "./components/organisms/Sidebar/Sidebar";

export const Box = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 560px;
  margin-left: 20px;
  margin-top: 5px;
  background-color: black;
`;
const App: React.FC = () => {
  return (
    <Box>
      <Sidebar />
    </Box>
  );
};

export default App;
