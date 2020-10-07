import React from 'react';
import Header from '../Components/Header';
import MMImage from '../images/micromouse_maze.svg';
import MMWhat from '../images/mm1.png';
import MMWho from '../images/mm2.jpg';
import MMJoin from '../images/mm3.png';
import {IconButton, Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'
import githubIcon from '../images/githubicon.png';
import fbIcon from '../images/facebookicon.png';


const introText = "Micromouse is a robotics competition hosted by IEEE in which students design, develop, and program a robotic mouse to autonomously navigate a maze. While it sounds like an easy task, it will require your minds to perform at an extraordinary level as you start to apply the knowledge you acquire from coursework to the real test!";
const whoText = "We are a club that is geared towards promoting IEEE's Micromouse Competition and helping it grow at UCI. We will be having weekly meetings and build sessions to help students in groups of 1-5, build a micromouse. Our goal is to reach out to engineering and computer science students to teach them about the competition and design process, with the eventual hope of building the foundation for a successful Micromouse program here at UCI.";
const joinText = "Micromouse is a project that gives engineers and computer scientists the hands-on experience they truly need! This project will teach you a great deal about electronics, circuit design, PCB design, and Arduino programming, which can set you apart from others professionally."

export default function Micromouse() {

  return(
    <div style={{overflow:"hidden"}}>
      <Header/>
      <Box className = "bkgdGrad"/>
      <Box className = "headerBox">
        <Typography variant="h6"className="title"> PROJECTS</Typography>
        <Typography variant="h6" className="pageTitle"> MICROMOUSE</Typography>
        <br/>
        <svg className="divider"/>
      </Box>
      <img src={MMImage} width="100%" alt="logo" style={{opacity:"60%", marginTop:"-12%"}}/>
      <Grid container direction="column" alignItems="center" spacing={8}>
        <Grid container item direction="row" justify="space-evenly" alignItems="center" >
          <Grid item xs={3}>
            <img className="mmImg1" src={MMWhat} alt="Micromouse"/>
          </Grid>
          <Grid item sm={7}>
            <Typography variant="h3" style={{marginBottom: "5%", letterSpacing:"4px"}}>what is micromouse?</Typography>
            <Typography style={{textAlign: "left"}}>{introText}</Typography>
          </Grid>
        </Grid>
        <Grid container item  direction="row" justify="space-evenly" alignItems="center">
          <Grid item sm={7}>
            <Typography variant="h3" style={{marginBottom: "5%", letterSpacing:"4px"}}>who are we?</Typography>
            <Typography style={{textAlign: "left"}}>{whoText}</Typography>
          </Grid>
          <Grid item xs={3}>
            <img className="mmImg2" src={MMWho} alt="Micromouse PCB"/>
          </Grid>
        </Grid>
        <Grid container item direction="row" justify="space-evenly" alignItems="center" >
          <Grid item xs={3}>
            <img className="mmImg3" src={MMJoin} alt="Micromouse Maze"/>
          </Grid>
          <Grid item sm={7}>
            <Typography variant="h3" style={{marginBottom: "5%", letterSpacing:"4px"}}>why should you join?</Typography>
            <Typography style={{textAlign: "left"}}>{joinText}</Typography>
          </Grid>

        </Grid>
        <Grid container item sm={12} direction="column" alignItems="center" style={{marginTop:"5%", marginBottom:"10%"}}>
          <Typography variant="h3" style={{marginBottom:"2%", letterSpacing:"4px",  textAlign:"center"}}>get involved</Typography>
          <br/>
          <Grid container item justify="space-evenly" style={{width:"40%", padding:"2%", borderRadius:"%"}}>
            <IconButton href="https://www.facebook.com/groups/153805515376853" target="_blank"><img style={{width:"8vw", backgroundImage:"linear-gradient(to right, #1CB5E0, #2A6AC6)", padding:"15%", borderRadius:"30%"}} src={fbIcon}/></IconButton>
            <IconButton href="https://github.com/micromouseuci/UCI-Micromouse" target="_blank"><img style={{width:"8vw", backgroundImage:"linear-gradient(to right, #1CB5E0, #2A6AC6)", padding:"15%", borderRadius:"30%"}} src={githubIcon}/></IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}
