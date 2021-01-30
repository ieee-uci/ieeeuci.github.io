import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import mainImage from '../images/hex_home.png';
import kellyWeb from '../images/ws_kelly.png';
import jackWeb from '../images/ws_jack.png';
import salWeb from '../images/ws_salvador.png';
import strava from '../images/events/strava.png';
import eventsNG from '../images/events_ng.jpg'
import eventStudy from '../images/events/studyhours_f20.png';
import eventOPS from '../images/events/ops_fall_20.jpg';
import announce1 from '../images/events/announce_membership_f20.png';

import discordIcon from '../images/discordicon.png';
import hexButton from '../images/ieee_diamond.svg';

import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import Footer from '../Components/Footer';
import {SubscribeBox} from '../Components/Footer';
import '../Styles/index.css';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { withStyles } from '@material-ui/core/styles';


const introText = `IEEE at UC Irvine is a student organization
dedicated to providing students opportunities to gain hands-on
experience with projects in preparation for the real-world.
Through our organization, students will be able to explore the
field of engineering and hone new skills that are fundamental to
developing state-of-the-art technology.  We are
dedicated to helping students become the succesful engineers they envision
themselves to be so that they can advance technology for humanity in
their own passion.`;


const images = [
  {
    url: kellyWeb,
    title: 'Kelly Lue',
    width: '55%',
    place: "1st",
    webURL: "https://kellylue.github.io/",
    index: 0,
    color: "#ffe057",
  },
  {
    url: jackWeb,
    title: 'Jack Whittaker',
    width: '55%',
    place: "2nd",
    webURL: "https://jackw01.github.io/",
    index: 1,
    color: "#1CB5E0",

  },
  {
    url: salWeb,
    title: 'Salvador Villalon',
    width: '55%',
    place: "3rd",
    webURL: "https://salvillalon45.github.io/",
    index: 2,
    color: "#ccd8e3",
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  activePlace:{
    color: "white",
    borderLeft:"16px solid #1CB5E0",
  },
  inactivePlace:{
    color: "grey"
  },
  cardRibbon: {
    position: 'absolute',
    background: 'linear-gradient(to top, #00c6fb, #005bea)',
    width: "15%",
    height: "100%",
    left: 0,
  },
  image: {
    position: 'relative',
    width: "100%",
    height: "45vh",
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  cardTextControl: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 200,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Accordion = withStyles({
    root: {
        backgroundColor: '#2A6AC6'
    }
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        color: 'white'

    }
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
    root: {
        backgroundColor: 'rgba(33, 32, 40, .5)', 
        color: 'white' 
    }
})(MuiAccordionDetails);

export function Hexagon() {
  return(
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className = "scrollDot"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
    fill="currentColor"
  />
</svg>)
  }


function EventsButton(){
  let history = useHistory();
  const handleClick = (url: string) => {
    history.push('/events');
  };
  return (
    <Button style={{letterSpacing:"2px"}} onClick={() => handleClick('events')}>MORE EVENTS</Button>
  )
}



export default function Home() {
  const classes = useStyles();

  const [websiteActive, setWebsiteActive] = React.useState([true, false, false]);
  const [activeWeb, setActiveWeb] = React.useState(images[0]);
  const setPlace = (index: number) => {
    let temp = [false, false, false];
    temp[index] = true;
    setWebsiteActive(temp);
    setActiveWeb(images[index]);
    };

 

  return(
    <div id="section01" >
      <Header />
      <Box className="bkgdGrad" />
      <Grid container className="scrollButtons"
        direction="column"
        justify="space-evenly"
        spacing = {2}>

        <Grid container item>
          <a href="#section01"><Hexagon/></a>
        </Grid>
        <Grid container item>
          <a href="#section02"><Hexagon/></a>
        </Grid>
        <Grid container item>
          <a href="#section03"><Hexagon/></a>
        </Grid>
        <Grid container item>
          <a href="#section04"><Hexagon/></a>
        </Grid>
      </Grid>
      <Box style={{position: 'relative', textAlign: 'center', paddingBottom: '15vw'}}>
        <img src={mainImage}  className="mainBodyImage" alt="logo" style={{position: 'relative', opacity: "100%", width: '80%', top: '7vw', left: '-1%'}}/>
        <Typography variant="h4" className="advanceText" style={{position: 'absolute', fontSize: '2.1vw', letterSpacing: '6px', top: '46%', left:'50%', transform: 'translate(-50%, 0%)'
}}>ADVANCING TECHNOLOGY<br/>FOR HUMANITY</Typography>
      </Box>
      <Box id="section02" className="introBox">
        <Box style={{position:'absolute', width: '48%', top: '0%', left: '5%'}}>
          <Typography className='mainAboutText' style={{textAlign: "left", position: 'absolute', fontSize: "1.4vw", marginTop: '8%', marginBottom:'10%', marginLeft: '5%'}}>{introText}</Typography>
        </Box>
        <Box className = "subscribeBox">
          <Grid
            container
            direction="column"
            justify = "space-evenly"
            alignItems = "center"
          >
            <Grid item style={{width:"100%", letterSpacing:"3px", paddingTop:"5%", paddingBottom:"5%"}}>
              <h3 style={{textAlign:"center", borderLeft:"8px solid white"}}><b>JOIN OUR COMMUNITY</b></h3>
            </Grid>
            <Grid item>
              <IconButton style={{width:"16vh"}} href="https://bit.ly/IEEE-UCI_Discord" target="_blank">
                <img style={{width:"100%", filter:"drop-shadow(4px 4px 2px rgba(33,32,40,.3))"}} src={discordIcon} alt="socialmediaicon"/>
              </IconButton>
            </Grid>
            <Grid item>
              <SubscribeBox/>
            </Grid>
          </Grid>
        </Box>

      </Box>

      <Box style={{marginTop: "10%", paddingLeft: "5%"}}>
        <Box id="section03" style={{paddingLeft:"10%", paddingBottom:"0%"}}>
          <Typography variant="h5" style={{ letterSpacing:"1px"}}>FALL 2020</Typography>
          <Box paddingTop="2%" paddingBottom="-2%">
            <Typography variant="h4" style={{paddingLeft:"5%", borderLeft: "8px solid white", letterSpacing:"2px"}}>Upcoming Events</Typography>
        </Box>
        </Box>
              <Grid container direction="row" justify="space-between" alignItems="center"
                  style={{ width: "90%", textAlign: "center", paddingLeft: "10%", paddingRight: "auto" }}>
                  <Grid container item sm={7} justify = "space-between" >
                      <Grid item md={10}>
                           <Carousel pause={"hover"} style={{ marginBottom: "5%", width: "90%", height: "auto" }}>
                              <Carousel.Item >
                                <img className="d-block w-100" src={eventsNG} alt="1st slide" />
                                  <Carousel.Caption >
                                      <p style={{ fontSize: "14px" }}>Check out our upcoming events with global defense tehnology company Northrop Grumman!</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item style={{ width: "90%", textAlign: "center", paddingLeft: "10%", paddingRight: "auto" }}> <img className="d-block w-100" src={strava} alt="strava"/>
                                <Carousel.Caption style={{backgroundColor:"rgba(33,32,40,.5)"}}>
                                  <p>Do you enjoy running, biking, or just staying fit? Connect with us on Strava!</p>
                                  <p><a href="https://www.strava.com/clubs/uciieee"> Join Here! </a></p>
                                </Carousel.Caption>
                              </Carousel.Item>
                          </Carousel>
                      </Grid>
                      <Grid item style={{width: 'auto', height: "auto" }}>
                          <Accordion >
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                  <Typography variant="h5" >Week 5 Biweekly General Meeting</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                  <ul> <li> Date: February 2, 2021 </li>
                                      <li> Time: 6:20-7:00PM </li>
                                      <li > <a href="https://www.facebook.com/events/756390375256686"> More Info </a> </li>

                                  </ul>

                              </AccordionDetails>
                          </Accordion>
                          <Accordion>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                  <Typography variant="h5">Northrop Grumman Electronics and Payloads Panel</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                  <li > Date: February 11, 2021 </li>
                                  <li > <a href="https://www.strava.com/clubs/uciieee"> Sign Up </a> </li>

                              </AccordionDetails>
                          </Accordion>
                          <Accordion>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                  <Typography variant="h5" >Northrop Grumman Resume Session</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography variant="h6" >
                                    Date: February 25, 2021 
                                </Typography>
                              </AccordionDetails>
                          </Accordion>
                      </Grid>  

              
            </Grid>
        <Grid
          container item
          sm = {4}
          justify="flex-end"
          style={{marginLeft:"7%"}}
        >
          <Box paddingTop="0%" paddingRight="10%">
            <iframe title="calendar" className="calendar" src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=aWVlZS51Y2lydmluZUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cmo3OTk4aWZwZjNvMDAyMnR1N2dlZzVsaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dWNpY2x1YmFmZmlsaWF0ZXNAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bmV1aHR2NjVqNDNhOWZiZXVkbTE2MTFvbWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aDFuMW83czllODExMnNzODBiZWFiaG5nOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%237986CB&amp;color=%230B8043&amp;color=%23E4C441&amp;color=%23009688&amp;color=%23D50000&amp;color=%23E67C73&amp;mode=AGENDA" width="500" height="550" scrolling="no"></iframe>
            <Box style={{marginTop: "5%", textAlign: "right", marginRight: "15%"}}>
              <EventsButton/>
            </Box>
          </Box>
        </Grid>
      </Grid>

      </Box>


      <Box id="section04" style={{position:"relative", marginTop: "10%", paddingLeft:"15%", paddingBottom:"10%"}}>
        <Typography variant="h5" style={{letterSpacing:"1px"}}>SPRING 2020</Typography>
        <Box paddingTop="2%" paddingBottom="-2%">
          <Typography variant="h4" style={{paddingLeft:"5%", borderLeft: "8px solid white", letterSpacing:"2px"}}>Website Design Competition Winners</Typography>
        </Box>
      </Box>



      <Box style={{position:"relative", marginTop: "25vw"}}>
        <Box className="webBanner" marginBottom="10vw" marginTop="-30vw">
        <ButtonBase
          focusRipple
          key={activeWeb.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "40%",
            position: "sticky",
            marginTop: "4vh",
            left: "12%",
            top: "20%",
            boxShadow: "0px 5px  20px black"
          }}
          href={activeWeb.webURL}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${activeWeb.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {activeWeb.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>

        </ButtonBase>

        </Box>
      </Box>

      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
      <div className={classes.root} style={{marginTop:"-50%", paddingLeft:"18%", paddingTop:"5%"}}>
        {images.map((image) => (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Box >
              <Button
                style={{paddingLeft:"20px", paddingRight:"20px"}}
                onClick={() => {setPlace(image.index)}}
                className={(websiteActive[image.index]) ?
                  classes.activePlace : classes.inactivePlace
                }
              >
                {image.place}<Box style={{paddingRight:"50px"}}/>{image.title}
              </Button>
            </Box>
          </Grid>
        ))}
      </div>
      </Grid>
      <Footer/>
    </div>
  );
}
