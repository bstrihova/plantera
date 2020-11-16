import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Messages() {
  const classes = useStyles();
// /*  */
  return (
  //   <div>
  //   <Container maxWidth="sm">
  //   <Grid container spacing={3}>
  //       <Grid item xs={12}>
  //         <Paper className={classes.paper}>xs=12</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.paper}>XXX</Paper>
  //       </Grid>
  //       <Grid item xs={6}>
  //         <Paper className={classes.paper}>xs=6</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=3</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=3</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=3</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=3</Paper>
  //       </Grid>
  //     </Grid>
  //  </Container>
  //    </div> 
      <div className="main__container"> 

      <section className="section_heading">
        <Box component="div" whiteSpace="normal" className="section__headings">
            <Typography variant="h3" color="primary" gutterBottom>
                Messages
            </Typography>
          </Box> 
      </section>

      <Box className="main__container__shadow main__container__shadow--messages">

       <List className={classes.root}>

       <ListItem alignItems="flex-start">          
         <ListItemAvatar>
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         </ListItemAvatar>
         <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />

          <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
               Time and date
            </Typography>}
          
          />

          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>

            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />

            <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
               Time and date
            </Typography>}
          
          />

          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>

            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
                />

            <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
               Time and date
            </Typography>}
          
          />


          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>

            </ListItem>
            </List>     
         
          </Box>
                 
       
    </div>
  );
}



// /* import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import Box from "@material-ui/core/Box";
// import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// export default function AlignItemsList() {
//   const classes = useStyles();

//   return (

//     <div>
//             <main>

//      {/* // <ExampleComponent/> */}
     
      

//     <section className="section_heading">
//     <Box component="div" whiteSpace="normal" className="section__headings">
//       <Typography variant="h3" color="primary" gutterBottom>
//           Messages
//       </Typography>
//      </Box> 
//    </section>

//    <section className="mmessages_list"></section>

//    <Card className={classes.root} variant="outlined">

//     <List className={classes.root}>

//       <ListItem alignItems="flex-start">          
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />

//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />

//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>    
   
//     </Card>
  
//     </main>
    
//     </div>
//   );
// } */