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

      </Box>      <Footer/>
    </div>
  );
}
