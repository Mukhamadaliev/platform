import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr"; 
import { HeaderAction, HeaderContner, TexnologiesMenu, Left, Right, TexnologuesBoxs, TexnologuesBox, BoxLeft, BoxRight, BoxEnd, BoxStart } from './Texnologiya.style.js';
import html from "./assets/Html.img.png"
import css from "./assets/css.img.png"
import jsScript from "./assets/jsscripts.png"
import react from "./assets/React.img.png"
import tupeScript from "./assets/typeScript.img.png"
// import noteJs from "./assets/notejs.img.png"
import boostrap from "./assets/boostrap.img.png"
import sas from "./assets/sas.img.png"
import pyhon from "./assets/pyhon.img.png"
import c from "./assets/c ++.img.png"

import { CiMenuKebab } from "react-icons/ci";

const technologu = [
  { name: "HTML", size: "2 MB", img: html },
  { name: "CSS", size: "1.5 MB", img: css },
  { name: "JavaScript", size: "3 MB", img: jsScript },
  { name: "Bootstrap", size: "1 GB", img: boostrap },
  { name: "SASS", size: "0.8 GB", img: sas },
  { name: "React", size: "1 GB", img: react },
  { name: "TypeScript", size: "2 GB", img: tupeScript },
  // { name: "NodeJS", size: "1.8 GB", img: noteJs },
  { name: "Python", size: "2.2 GB", img: pyhon },
  { name: "C++", size: "2 GB", img: c },
]
const Texnologiya = () => {
  return (
    <HeaderContner>
      <HeaderAction>
        <h1>Documnet</h1>
        <TexnologiesMenu>
          <Left>
            <p><b style={{ color: "grey", fontWeight: "400" }}>Total</b>: 12 GB</p>
          </Left>
          <Right>
            <p >Name</p>
            <IoIosMenu className='tech_menu' />
            <GrAppsRounded className='tech_app' />
          </Right>
        </TexnologiesMenu>
        <TexnologuesBoxs>
          {technologu.map((tech, index) => (
            <TexnologuesBox>
              <BoxStart>
                <BoxLeft>
                  <img src={tech.img} alt="" style={{ width: "70px", height: "70px", objectFit: "cover" }} />
                </BoxLeft>
                <BoxRight>
                  <CiMenuKebab style={{ fontSize: "25px", color: "grey" }} />
                  <p style={{ fontSize: "15px", color: "grey" }}>{tech.size}</p>
                </BoxRight>
              </BoxStart>
              <BoxEnd>
                <p style={{ fontWeight: "600" }}>{tech.name}</p>
              </BoxEnd>
            </TexnologuesBox>
          ))}
        </TexnologuesBoxs>
      </HeaderAction>
    </HeaderContner>
  )
}

export default Texnologiya