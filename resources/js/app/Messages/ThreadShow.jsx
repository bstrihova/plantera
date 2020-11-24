import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import MessageContent from './MessageContent';
import { useParams } from "react-router-dom";
import List from '@material-ui/core/List';
import InputError from "../common/InputError/InputError";


function ThreadShow() {
    let { id } = useParams();
    const [thread, setThread] = useState("");
    const [loading, setLoading] = React.useState(true);

    const [values, setValues] = useState({
        body: '',
    });


    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`/api/threads/${id}`, {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
            }
            
        })
        
        const response_data = await response.json();
      
        if (response.status === 200) {
            window.location.reload();
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    const handleChange = (event) => {
        const allowed_names = ['body'],
            name  = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
    }


    const loadThread = async () => {
        setLoading(true);
        const response = await fetch(`/api/threads/${id}`);
        const data = await response.json();
        data && setThread(data.thread);
        setLoading(false);
    };

    useEffect(() => {
        loadThread();
    
    }, []);

 
    let threadContent = "";
    let messageContent = "";
    let username = "";
    

    if (loading) {
        threadContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else {
        if (thread) {
        username  = ( 
            <>
            
            <Box p={4}>                                
                <Typography variant="h3" 
                            color="primary"
                            align='center'
                            >                      
                    {thread.buyer.name}
                </Typography>               
            </Box>
            
            </>
        );      

            threadContent = (
                <> 
                <Box className="boxshadow">   

                <Grid  container 
                    direction="row"
                    justify='center'
                    alignItems='center'
    >                     
                
                <Grid item xs={12} lg={5}>    
                {/* conditional rendering on image class for desktop */}

                    <img className="imageMessage" src={thread.post.photo} alt={thread.post.name}/>

                </Grid>   
                   <Grid item xs={12} lg={7}>  
                   <Grid container 
                         direction="column"
                         alignItems="center">

                        <Typography variant="h6"  align="center">
                                {/* Snake plant little baby */}
                                {thread.post.name}
                        </Typography>
                        
                        
                        <Typography variant="h6"  color="primary" align='center'>
                                
                                  
                                {thread.post.price} {thread.post.currency}
                        </Typography>
                        <FormControl style={{width:"70%"}}> 
                        <InputLabel id="status">Status</InputLabel>
                            <MuiSelect labelId="status">
                            <MuiMenuItem /* value={`Available`} */>Available</MuiMenuItem>
                            <MuiMenuItem /* value={'Sold'} */>Sold</MuiMenuItem>
                        </MuiSelect>
                        </FormControl> 
                       
                    </Grid> 
                </Grid>
                </Grid>
                </Box>
               
                </>

            );

            messageContent = (
                <>
                {thread.messages.map((message, index) => (
                  <div key={index}>
                    <MessageContent message={message} seller={thread.seller_id} />
                  </div>
                ))}
                </>
          );
        }
    }
    return (
    <div>
        
            <Grid  container 
                   direction="column"
                   justify="center"
                   alignItems="center"
                    > 

               <Grid item xs={10} lg={6}>               
                        {username}
                    </Grid>

                    <Grid item xs={10} lg={6}>    
                    
                    {/* <Box className="boxshadow">    */}
                      {threadContent}
                    {/* </Box> */}
                   
                    </Grid>   


                    <Grid container
                      justify="center">
                <Grid item xs={10} lg={6}> 
                        <List>
                            {messageContent}
                        </List> 
                    </Grid> 
                    </Grid>
                
                       
                <Grid container
                      justify="center"
                      p={5}>
                <Grid item xs={10} lg={6}>
                    
                <form onSubmit={ handleSubmit }>    
                <FormControl fullWidth 
                margin="dense" 
                hiddenLabel 
                variant="filled"
                >

                <FilledInput fullWidth
                            name="body"
                            type= "text"
                            placeholder="Write a message"
                            // autoComplete="message"
                            value={ values.body } 
                            onChange={ handleChange }
                            error={errors.body ? true : false}
                            helpertext={<InputError errors={errors.body}/>}
                
                // sending icon 
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="action send message"
                        edge="end"
                        color="primary"
                        type="submit"
                        >
                        <SendIcon />
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                </form>
             </Grid>
                
             </Grid>   
             
             </Grid> 
            
    </div>    
    );
}

export default ThreadShow;
