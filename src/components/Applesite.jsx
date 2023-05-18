import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import "../../public/img/style.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Desc = styled.div`
width : 400px;
height: 180px;
padding : 20px;
background-color: white;
border-radius: 10px;
position : absolute;
top : 19px;
right : 10px;

@media only screen and (max-width: 768px){
  width: 312px;
  height : 240px;
  left : 0;
  right: 0; 
  margin : auto;
}
`


const Applesite = () => {

  const [text] = useTypewriter({
    words: ['The Tedx Website is a platform dedicated to simplifying the event registration process while providing comprehensive event information and highlights. This website serves as a one-stop destination for users to register for upcoming events and explore in-depth details about each event, creating an engaging and informative experience for event attendees'],
    typeSpeed: 20
  })


  return (
    <>
      <Desc>
        <b style={{ fontSize: "17px", alignItems: "center" }}>

          &#x2022;{text} </b>
      </Desc>
      <div>
        <Canvas camera={{ pov: 25, position: [5, 5, 5] }} style={{ position: "absolute", top: "119px", left: "29px" }} className="box">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.92}>
            <MeshDistortMaterial
              color="#695E93"
              attach="material"
              distort={0.66}
              speed={1}
            />
          </Sphere>
        </Canvas>
        <img src="/img/apple1.png" alt="" height="248px" style={{
          position: "absolute", bottom: "120px", left: "256px", animation: "animate 1s infinite ease alternate"
        }} className="cartoon" />
      </div>
    </>

  )
}

export default Applesite