import React from 'react';

const Seeder: React.FC=()=>{
    return (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/seeder.svg`}
          alt="Example" style={{marginTop: 15,marginLeft:20}}
        />
    )
}

export default Seeder;