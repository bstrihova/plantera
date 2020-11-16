import React from 'react'

function MessageContent() {
    return (
        <ListItem className="message--remote" alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>

            <ListItemText className="message__text" >                
                <Typography
                        component="span"
                        variant="body2"
                        
                    >
                    {"I am a sender / I want your plant"} 
                </Typography>
            </ListItemText>
                                  
                
        </ListItem>

    )

}

export default MessageContent
