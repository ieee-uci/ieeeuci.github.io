import React from 'react';
import Header from '../Components/Header';
import {Typography, Box} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'
import WhoTitle from '../images/about_ieee.svg'
import discordIcon from '../images/discordicon.png';
// import emailIcon from '../images/emailicon.png';
import fbIcon from '../images/facebookicon.png';
import igIcon from '../images/instagramicon.png';
import IconButton from '@material-ui/core/IconButton';
import {Grid} from '@material-ui/core';
import {SocialIcon} from '../Components/Footer';
import {SubscribeBox} from '../Components/Footer';
import Popover from 'react-bootstrap/Popover';
// import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { TextField } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import image_zoom from '../images/who/zoom_board.png';
import image_soldier from '../images/who/ieee_soldier.jpg'
import image1 from '../images/who/2018_group.jpg'
import image2 from '../images/who/beach_logo.jpg';
import image3 from '../images/who/old_gaming.jpg';
import image4 from '../images/who/old_group.jpg';
import image5 from '../images/who/alan_and_friends.jpg';




const introText = `IEEE at UCI is one of UCI's premier Electrical
Engineering clubs. We strive to support the hard working engineering
and computer science community by providing students many ways to
network, gain insight on the industry, receive guidance on schoolwork,
and enjoy student life as an engineer.  The Institute of Electrical and Electronics Engineers at the
University of California, Irvine (UCI) is a professional student
organization aiming to promote the advancement of technology. Our goal is
to provide the students at UCI the resources to become successful in the
technology industry as well as provide a means of networking inside and
outside of the university.`

const getInvolvedText = "Under normal circumstances, our lab room at ICS 225 would be open on weekdays (and sometimes weekends) as a place to study, hang out or destress. However, seeing as it is currently closed, we invite you to join our Discord Server instead! The IEEE UCI Discord serves as the hub of all of our activities, including study help, career advice, workshops, socials, memes, and more. Join us on Discord and subscribe to our newsletter to stay up to date with our club and join in on the activities."

const membershipText = "If you wish to support our club as well as gain greater access to our equipment and resources, you can become an official IEEE UCI member for only $25 a year! This allows us to host more workshops and events, attend conferences such as SPAC and RLDC, and sponsor more projects. Full membership benefits include:"

export default function Who() {

  return(
    <div>
      <Header/>
      <Box className = "bkgdGrad"/>
      <Box className = "headerBox">
        <Typography variant="h6" className="title"> ABOUT</Typography>
        <Typography variant="h6" className="pageTitle"> GET INVOLVED</Typography>
        <br/>
        <svg className="divider"/>
      </Box>
      <div/>
      <Carousel style={{width: '48vw', marginTop:"0%", top: "10%", left: "5%", position:'sticky', boxShadow: "0 0 25px black"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image_soldier}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image_zoom}
            alt="Second slide"
            style={{marginTop: '-20%', marginBottom:"-5%", width: '90%', clipPath: 'inset(32% 0% 32% 0%)'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image5}
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>

      <Box paddingTop="4%" paddingBottom="25vw" style={{marginLeft: "59%"}}>
        <Typography style={{top:"25vw", position: "absolute", marginRight: "5%", letterSpacing:"5px"}} variant="h3">WHO ARE WE?</Typography>
        <Typography style={{top:"30vw", paddingTop:"5%", position: "absolute", marginRight: "5%"}}>{introText}</Typography>
      </Box>


      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h3" style={{letterSpacing: "5px"}}>GET INVOLVED</Typography>
        <Typography style={{paddingTop:"10vh", paddingBottom:"10%"}}>{getInvolvedText}</Typography>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          style={{marginRight:"5%", backgroundColor:"rgb(33,32,40)", borderLeft: "2px solid #1CB5E0"}}>
          <Box>
            <SubscribeBox/>
          </Box>
            <Grid container direction = "row" justify="space-evenly" alignItems="center">
              <SocialIcon link="https://bit.ly/IEEE-UCI_Discord" src={discordIcon}/>
              <SocialIcon link="https://www.facebook.com/IEEE.UCI/" src={fbIcon}/>
              <SocialIcon link="https://www.instagram.com/ieee_uci/" src={igIcon}/>
            </Grid>
            <br/>
        </Grid>
      </Box>

      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h3" style={{letterSpacing: "5px"}}>MEMBERSHIP</Typography>
        <Typography style={{paddingTop:"10vh", paddingBottom: "5%"}}>{membershipText}</Typography>
        <ul>
          <li>Access to our Electrical Lab</li>
            <ul>
              <li>Soldering Stations</li>
              <li>Oscilloscopers</li>
              <li>Function Generators</li>
              <li>Power Supplies - Common Components and Tools</li>
            </ul>
          <li>Lab Computers and Printers</li>
            <ul>
              <li>Common engineering and CS software is installed. Lab managers can add new software on request.</li>
            </ul>
          <li>Project Lab Space & Storage</li>
            <ul>
              <li>Microwaves, Fridges, Freezer</li>
            </ul>
          <li>Students may request an IEEE project box to store hardware for class or personal projects.</li>
          <li>Access to members-only events like our IEEE United state-wide virtual career fair</li>
        </ul>
        <Typography>NOTE: Not being a paid member does NOT exclude you from programs such as OPS.</Typography>
        <Box style={{borderLeft: "24px solid #0082c8", backgroundImage: "linear-gradient(to bottom, white, #c8d6eb", marginTop: "10%", padding:"5%"}}>
            <Typography variant="h4" style={{marginTop:"5%", paddingBottom: "5%", textAlign: "center", color: "black"}}><b>Become a Member: </b></Typography>
            <ol style={{fontSize:"120%", color: "black"}}>
              <li>Fill out our membership application here: <a href="http://bit.ly/IEEE-UCI_SignUp2020" target="_blank">http://bit.ly/IEEE-UCI_SignUp2020</a></li>
              <li>Send a payment of $25 to our venmo: ieee_uci with a comment including your name, uci email and Discord tag.</li>
              <li>Join our Discord community if you haven't already, and await a membership tag to be added to your name in our server.</li>
              <li>Your name will be checked on our roster when attending members-only events and accessing lab equipment. Welcome aboard!</li>
            </ol>
        </Box>
      </Box>

      <Footer/>
    </div>
  );
}
