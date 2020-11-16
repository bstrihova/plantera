import React from 'react'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOn';
import GoogleLocation from "../common/GoogleLocation/GoogleLocation"

function Search() {
    return (
        <Box display="flex" bgcolor="white" borderRadius={15} alignItems="center" p={0.3} pr={2}>
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
            <LocationIcon color="primary"/>
            </Grid> 
            <Grid item>
            <GoogleLocation/>  
            </Grid>

            <Grid item>
            <SearchIcon color="primary"/>
            </Grid> 
            <Grid item className="nav__searchInput">
            <Input placeholder="Search plants by name..." inputProps={{ 'aria-label': 'search'}} color="secondary" fullWidth/>
            </Grid>
            </Grid>
        </Box>
    )
}

export default Search
