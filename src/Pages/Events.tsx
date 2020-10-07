import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Box, Grid, Typography } from '@material-ui/core';
// import Carousel from 'react-bootstrap/Carousel';
import xtreme1 from '../images/events/IEEEXtreme12.0-1.jpg';
import xtreme2 from '../images/events/IEEEXtreme12.0-2.jpg';
import xtreme3 from '../images/events/IEEEXtreme12.0-3.jpg';
import xtreme4 from '../images/events/IEEEXtreme12.0-4.jpg';
import latex from '../images/events/LaTeX_Workshop.png';
import pcb1 from '../images/events/pcb-design-1.jpg';
import pcb2 from '../images/events/pcb-design-2.jpg';
import hacknight from '../images/events/hack_night.jpg';
import soldering1 from '../images/events/soldering1.jpg';
import soldering2 from '../images/events/soldering2.jpg';
import soldering3 from '../images/events/soldering3.jpg';

import boba1 from '../images/events/boba_night1.jpg';
import boba2 from '../images/events/boba_night2.jpg';
import boba3 from '../images/events/boba_night3.jpg';
import eit from '../images/events/eit-workshop1.jpg';
import meeting1 from '../images/events/meeting1.png';
import meeting2 from '../images/events/meeting2.jpg';
import meeting3 from '../images/events/meeting3.jpg';
import bbq from '../images/events/ieee_oc_bbq.jpg';

import ti1 from '../images/events/ti_workshop1.jpg';
import ti2 from '../images/events/ti_workshop2.jpg';
import ti3 from '../images/events/ti_workshop3.jpg';
import ti4 from '../images/events/ti_workshop4.jpg';




export default function Arcade() {
  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />

      <Box className = "headerBox">
        <Typography variant="h6"className="title">EVENTS</Typography>
        <Typography variant="h6" className="pageTitle"></Typography>
        <br/>
        <svg className="divider"/>
      </Box>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
        style={{marginTop:"-5%"}}

      >
        <Grid
          item
          sm={7}
          alignItems="center"
          style={{backgroundColor:"rgb(33,32,40)"}}
        >
          <Box style={{backgroundColor:"rgb(33,32,40)", marginTop:"5%", marginLeft:"5%", padding: "4%"}}>
            <h4 >Table of Contents</h4>
            <ul>
              <li><a href="#fall19" className="table-of-contents">Fall 2019</a></li>
              <li><a href="#winter19" className="table-of-contents">Winter 2019</a></li>
              <li><a href="#fall18" className="table-of-contents">Fall 2018</a></li>
            </ul>
          </Box>

          <div id="fall19" className="container" style={{marginTop: "15%", padding:"4%"}}>
          	<h2          style={{borderBottom:"1px solid white"}}>Fall 2019</h2>
            <br/>
          	<h2>IEEE Representative Presentation</h2>
          	<h4>October 25, 2019</h4>
            <br/>
          	<p>IEEE representative Craig Griffith met with IEEE@UCI members to talk about the opportunities that the IEEE global organization has for students ranging from career opportunities to searching for academic articles.</p>
          	<p>A copy of the slides can be viewed <a href="https://drive.google.com/open?id=0B67xHj5XKhIuT09tYUIzRFZkLWtEQnlWcVozUHFhNnplZjJj" target="blank">here</a> or below if you would like to learn more.</p>
          	<div className="resp">
          		<iframe className="resp-iframe" src="https://drive.google.com/file/d/0B67xHj5XKhIuT09tYUIzRFZkLWtEQnlWcVozUHFhNnplZjJj/preview" width="90%" height="480"></iframe>
          	</div>
            <br/><br/>
          	<h2>TI-RSLK Build Workshop</h2>
          	<h4>October 28, 2019</h4>
            <br/>
          	<p>A workshop sponsored hosted by Texas Instruments and IEEE@UCI where participants solder and assemble a TI robot kit.</p>
          	<div className="slider">
          		<ul className="slides">
          			<li>
          				<img src={ti1}/>
          			</li>
          			<li>
          				<img src={ti2}/>
          			</li>
          			<li>
          				<img src={ti3}/>
          			</li>
          			<li>
          				<img src={ti4}/>
          			</li>
          		</ul>
          	</div>
          </div>

          <div id="winter19" style={{marginTop:"5%"}} className="container">
            <br/>
          	<h2 style={{borderBottom:"1px solid white"}}>Winter 2019</h2>
          	<br/>
          	<h2>EIT Workshop</h2>
          	<h4>February 15, 2019</h4>
          	<br/>
          	<div className="slider">
          		<ul className="slides transparent">
          			<li>
          				<img src={eit}/>
          			</li>
          		</ul>
          	</div>
          	<h2>Winter General Meeting</h2>
          	<h4>February 8, 2019</h4>
          	<br/>
          	<div className="slider">
          		<ul className="slides transparent">
          			<li>
          				<img src={meeting1}/>
          			</li>
          			<li>
          				<img src={meeting2}/>
          			</li>
          			<li>
          				<img src={meeting3}/>
          			</li>
          		</ul>
          	</div>
            <h2>OC IEEE February BBQ</h2>
            <h4>February 26th, 2019</h4>
            <br/>
            <div className="slider">
              <ul className="slides transparent">
                <li>
                  <img src={bbq}/>
                </li>
              </ul>
            </div>
            <br/>
          	<h2>OC IEEE Boba Nights</h2>
            <h4>Tuesday Once a Month</h4>
            <br/>
            <p> Join OC IEEE Young Professionals free boba for IEEE members, free appetizers for all and board games at Cha for Tea!</p>
          	<br/>
          	<div className="slider">
          		<ul className="slides transparent">
          			<li>
          				<img src={boba1}/>
          			</li>
          			<li>
          				<img src={boba2}/>
          			</li>
          			<li>
          				<img src={boba3}/>
          			</li>
          		</ul>
          	</div>
          </div>


          <div id="fall18" style={{marginTop:"5%"}} className="container">
            <br/>
          	<h2 style={{borderBottom:"1px solid white"}}>Fall 2018</h2>
          	<br/>
            <h2>IEEE Hack/Build Night</h2>
            <h4>December 14th, 2018</h4>
            <br/>
            <div className="slider">
              <div className="slides">
                <img src={hacknight}/>
              </div>
            </div>
            <br/>
            <h2>PCB Design Workshop</h2>
            <h4>November 29th, 2018</h4>
            <br/>
            <div className="slider">
              <ul className="slides transparent">
                <li>
                  <img src={pcb1}/>
                </li>
                <li>
                  <img src={pcb2}/>
                </li>
              </ul>
            </div>
            <br/>
          	<h2>Soldering Workshop</h2>
            <h4>October 25, 2018</h4>
          	<br/>
          	<div className="slider">
          		<ul className="slides transparent">
          			<li>
          				<img src={soldering1}/>
          			</li>
          			<li>
          				<img src={soldering2}/>
          			</li>
          			<li>
          				<img src={soldering3}/>
          			</li>
          		</ul>
          	</div>
          	<br/>
            <h2>LaTex Workshop</h2>
            <h4>October 16, 2018</h4>
            <br/>
          	<div className="slider">
          		<ul className="slides transparent">
          			<li>
          				<img src={latex}/>
          			</li>
          		</ul>
          	</div>
            <h2>IEEEXtreme 12.0</h2>
            <h4>October 19 - October 20, 2018</h4>
            <br/>
          	<div className="slider">
              <ul className="slides transparent">
                <li>
          				<img src={xtreme1}/>
                </li>
                <li>
          				<img src={xtreme2}/>
          			</li>
          			<li>
          				<img src={xtreme3}/>
          			</li>
          			<li>
          				<img src={xtreme4}/>
          			</li>
              </ul>
            </div>
          	<br/>
          </div>

        </Grid>
        <Grid
          item
          justify="flex-end"
        >
          <Box paddingTop="0%" paddingRight="5%">
            <iframe title="calendar" className="calendar" src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=aWVlZS51Y2lydmluZUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cmo3OTk4aWZwZjNvMDAyMnR1N2dlZzVsaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dWNpY2x1YmFmZmlsaWF0ZXNAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bmV1aHR2NjVqNDNhOWZiZXVkbTE2MTFvbWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aDFuMW83czllODExMnNzODBiZWFiaG5nOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%237986CB&amp;color=%230B8043&amp;color=%23E4C441&amp;color=%23009688&amp;color=%23D50000&amp;color=%23E67C73&amp;mode=AGENDA" width="450" height="600" scrolling="no"></iframe>
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}
