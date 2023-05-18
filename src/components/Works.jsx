import React, { useState } from 'react'
import styled from "styled-components"
import SecureUs from './SecureUs';
import Applesite from './Applesite';
import KITPLACE from './KITPLACE';
import Work4 from './Work4';
import Cube2 from './Cube2';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const data = [
  "1)Secure Us",
  "2)KITPLACE",
  "3)Tedx",
  "4)M City",
]


const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display: flex;
justify-content: cenetr;
position : relative ;
color: black ;
font-size: 14px;
font-weight: 300px;
`
const Container = styled.div`
width : 1200px;
display : flex;

@media only screen and (max-width: 768px){
  width : 100%;
  flex-direction : column;
}

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 768px){
  padding : 20px;
  justify-content : center;
}
`
const Right = styled.div`
flex: 1;
position : relative;

`

const List = styled.ul`
list-style: none;
display: flex;
flex-direction : column;
gap : 20px; 
`
const ListItem = styled.li`
font-size: 87px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke : 1px white;
position : relative;

@media only screen and (max-width: 768px){
  font-size: 24px;
  color: white;
  -webkit-text-stroke : 0px;
}

::after{
  content: "${(props) => props.text}"; 
  position : absolute;
    top : 0;
    left: 0;
    color : pink;
    width : 0px;
    overflow: hidden;
    white-space : nowrap;
}

&:hover{
  ::after{
    animation: moveText 0.35s linear both;

    @keyframes moveText{
       to{
         width : 100%;
       }
    }
  }
}
`



const Works = () => {
  const [work, setWork] = useState("WebDesign")
  return (
    <Section>
      <Container>
      
        <Left>
          <List>
            {data.map(item => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "1)Secure Us" ? (<SecureUs />) : work === "2)KITPLACE" ? (<KITPLACE />) : work === "3)3D Apple site" ? (<Applesite />) : (<Work4 />)}
          <Canvas camera={{ pov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default Works
