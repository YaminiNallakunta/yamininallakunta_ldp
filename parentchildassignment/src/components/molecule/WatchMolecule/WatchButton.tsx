import React from "react";
import styled from "styled-components";
import { ICONS, TEXT } from "../../../utils/constants/constants";

export const StyButton = styled.button`
  margin-top: 330px;
  margin-left: 4px;
  border-radius: 5px;
  width: 290px;
  height: 50px;
  border: 0;
`;
const WatchButton: React.FC = () => {
  return (
    <StyButton>
      <img src={ICONS.FLASH} alt="flash" />
      {TEXT.WATCH}
    </StyButton>
  );
};

export default WatchButton;
