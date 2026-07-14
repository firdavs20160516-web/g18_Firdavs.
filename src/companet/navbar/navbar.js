import React from 'react';
import {Stack} from "@mui/material";
import {bgColor, logo} from "../constants/constants";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/search-bar";
import {Link} from "react-router-dom";



const Navbar = () => {

 

    return (
        <Stack direction='row'
               alignContent='center'
               alignItems="center"
               justifyContent='space-between'
               p={2}
               sx={bgColor}>

            <Link to={'/'}>
            <img src={logo} alt="" height={50}
                 style={{
                     mixBlendMode: 'multiply',
                     filter: 'contrast(150%)'
                 }}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;
