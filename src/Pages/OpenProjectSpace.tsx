import React from 'react';
import Header from '../Components/Header';
import {IconButton, Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'


export default function Ops() {

  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />
      <Box className = "headerBox">
        <Typography variant="h6"className="title"> PROJECTS</Typography>
        <Typography variant="h6" className="pageTitle"> OPEN PROJECT SPACE</Typography>
        <br/>
        <svg className="divider"/>
        <Box style = {{marginLeft:"15%", marginRight:"15%", paddingBottom:"15%"}}>
          <h1 style ={{letterSpacing:"3px"}}> Beginner Friendly</h1>
          <br/>
          <Typography> This program is specifically targeted towards students who have little to no experience with electrical engineering and aims to teach students the fundamentals of working with electronics.</Typography>
          <br/><br/><br/><br/><br/>

          <h1 style ={{letterSpacing:"3px"}}> Gain Hands On Experience </h1>
          <br/>
          <Typography> There are 4 total projects throughout the quarter that you will be working on which include working with MCUs(Arduino Nano) and other electronic components! Each project is supplemented by a mini lecture to explain the underlying fundamental concepts.</Typography>
          <br/><br/><br/><br/><br/>

          <h1 style ={{letterSpacing:"3px"}}>Remote? No Problem </h1>
          <br/>
          <Typography>Although the school year may be remote, this doesn't stop us from providing an immersive educational environment. <br/> If accepted into the OPS program, a kit including all the necessary project materials will be shipped to you. You will also be able to interact with other students remotely and build a community of rising engineers!</Typography>
          <Box style = {{color:"black", backgroundImage: "linear-gradient(to bottom, white, #c8d6eb)", padding:"2%", marginTop:"10%", marginLeft:"10%", marginRight:"10%", textAlign:"center"}}>
            <h4>OPS will resume in Fall 2021. <br/> Thank you to everyone who's been a part of it so far!</h4>
          </Box>
          <Box style = {{backgroundColor:"rgb(33,32,40)", padding:"2% 12%", marginTop:"10%", marginLeft:"10%", marginRight:"10%", textAlign:"center"}}>
            <h3 style={{letterSpacing:"2px", paddingBottom:"5%"}}> Resources </h3>
            <ul>
              <li><a href="https://docs.google.com/document/d/1cyhVOQ6tiuRMyO9QPTjx2AubAnnlftkv25pmTLLh9Qg/edit?usp=sharing" target="_blank" style={{fontSize:"130%"}}>Syllabus</a></li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </div>
  );
}
