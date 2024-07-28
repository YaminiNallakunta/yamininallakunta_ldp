import React from 'react';
import styled from 'styled-components';

export const Image = styled.img `
width:400px;
height:50px;
`;
interface ImageProps {
    src:string;
    alt: string;
}

const image: React.FC<ImageProps> =({src,alt}) =>(
    <Image src={src} alt={alt} />
)

export default image;