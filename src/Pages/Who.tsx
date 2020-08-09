import React from 'react';
import Header from '../Components/Header';
import {Typography, Box} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'

const introText = `IEEE at UCI is one of UCI's premier Electrical 
Engineering clubs. We strive to support the hard working engineering 
and computer science community by providing students many ways to 
network, gain insight on the industry, receive guidance on schoolwork, 
and enjoy student life as an engineer. The opportunities IEEE provides 
are endless and in order to take full advantage of one of the largest 
professional organizations in the world, please join us at our meetings 
and events! The Institute of Electrical and Electronics Engineers at the 
University of California, Irvine (UCI) is a professional student 
organization aiming to promote the advancement of technology. Our goal is 
to provide the students at UCI the resources to become successful in the 
technology industry as well as provide a means of networking inside and 
outside of the university.`

export default function Who() {

  return(
    <div>
      <Header/>
      <Box paddingTop="10%" paddingLeft="10%">
        <Typography variant="h4">WHO ARE WE?</Typography>
      </Box>
      <Box paddingTop="2%" paddingLeft="10%" paddingRight="10%">
        <Typography>{introText}</Typography>
      </Box>
      
      <Footer/>
    </div>
  );
}