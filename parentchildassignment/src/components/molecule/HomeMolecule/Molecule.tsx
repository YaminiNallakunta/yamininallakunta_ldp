import React from "react";
import styled from "styled-components";
import { ICONS, TEXT } from "../../../utils/constants/constants";

export const StyledStack = styled.button`
  direction: flex;
  flex-direction: column;
  width: 290px;
  height: 50px;
  border-radius: 5px;
  margin-top: 5px;
  align-text: start;
`;
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 4px;
`;

const Molecule: React.FC = () => {
  return (
    <Stack>
      <img src={ICONS.IMAGE_SEEDER} alt="seeder" />
      <StyledStack>
        <img src={ICONS.HOME} alt="home" />
        {TEXT.HOME_TEXT}
      </StyledStack>
      <StyledStack>
        <img src={ICONS.COIN} alt="home" />
        {TEXT.CASH_KICK}
      </StyledStack>
    </Stack>
  );
};

export default Molecule;
