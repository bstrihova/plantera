import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOn';
import GoogleLocation from "../GoogleLocation/GoogleLocation"

function Search({searchValue, setSearchValue}) {
    return (
        <Box display="flex" bgcolor="white" borderRadius={15} alignItems="center" p={0.3} pr={2}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <GoogleLocation/>  
                </Grid>
                <Grid item>
                <TextField
                label="Search"
                color="primary"
                variant="outlined"
                value={searchValue}
                onChange={(e)=>(setSearchValue(e.target.value))}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon color="primary"/>
                    </InputAdornment>
                ),
                }}
                />
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Search
