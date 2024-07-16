import React from "react";
import CustomButton from "../components/atoms/Button/Button";
import Seeder from "../components/atoms/Images/ImgSeeder";
import Acceleration from "../components/molecule/Acceleration";

const SeederPage: React.FC = () => {
  return (
    <div>
      <Seeder />
      <Acceleration />
      <CustomButton />
    </div>
  );
};

export default SeederPage;
