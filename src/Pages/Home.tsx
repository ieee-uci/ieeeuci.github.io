import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import mainImage from '../images/hex_home.png';
import kellyWeb from '../images/ws_kelly.png';
import jackWeb from '../images/ws_jack.png';
import salWeb from '../images/ws_salvador.png';
import eventECP from '../images/events/ecp_fall_20.jpg';
import eventECF from '../images/events/ecf_fall_20.png';
import eventOPS from '../images/events/ops_fall_20.jpg';
import meeting1 from '../images/events/week1_fall20.png';
import discordIcon from '../images/discordicon.png';

import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import Footer from '../Components/Footer';
import {SubscribeBox} from '../Components/Footer';
import '../Styles/index.css';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';


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
    <div>
      <Header/>
      <Box className="bkgdGrad" />
      <Box style={{position: 'relative', textAlign: 'center', paddingBottom: '15vw'}}>
        <img src={mainImage} className="mainBodyImage" alt="logo" style={{position: 'relative', opacity: "100%", width: '80%', top: '7vw', left: '-1%'}}/>
        <Typography variant="h4" className="advanceText" style={{position: 'absolute', fontSize: '2.1vw', letterSpacing: '6px', top: '46%', left:'50%', transform: 'translate(-50%, 0%)'
}}>ADVANCING TECHNOLOGY<br/>FOR HUMANITY</Typography>
      </Box>
      <Box className="introBox">
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

      <Box style={{marginTop: "20%"}}>
        <Box style={{paddingLeft:"15%", paddingBottom:"5%"}}>
          <Typography variant="h5" style={{ letterSpacing:"1px"}}>FALL 2020</Typography>
          <Box paddingTop="2%" paddingBottom="-2%">
            <Typography variant="h4" style={{paddingLeft:"5%", borderLeft: "8px solid white", letterSpacing:"2px"}}>Upcoming Events</Typography>
          </Box>
        </Box>
        <Carousel style={{marginLeft:"15%", width: "70%", height: "auto"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meeting1}
              alt="1st slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventECP}
              alt="2nd slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventECF}
              alt="3rd slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eventOPS}
              alt="4th slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
        <Box style={{marginTop: "5%", textAlign: "right", marginRight: "15%"}}>
          <EventsButton/>
        </Box>
      </Box>


      <Box style={{position:"relative", marginTop: "25%", paddingLeft:"15%", paddingBottom:"10%"}}>
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
