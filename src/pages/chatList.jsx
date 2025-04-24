import React from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, List, ListItemAvatar, ListItemText, ListItem, Typography, Divider, IconButton } from "@mui/material";
import Comment from "@mui/icons-material/Comment";
export const ChatList = () => {
    const navigate = useNavigate();
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start"
            secondaryAction={<IconButton aria-label="comment" onClick={() => {navigate('/chat')}}>
                <Comment />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="Lexington Motor" src="src/assets/horse.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Fancy a drive this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Lex Motorface
                  </Typography>
                  {" — I've got this new car and I want to take it for a spin. Do you want to join me?"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start" secondaryAction={<IconButton aria-label="comment" onClick={() => {navigate('/chat')}}>
                <Comment />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="src/assets/horse.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer Savings Woo"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Isabelle Isa
                  </Typography>
                  {" — Got this great thing going on this summer…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start" secondaryAction={<IconButton aria-label="comment" onClick={() => {navigate('/chat')}}>
                <Comment />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="src/assets/horse.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Got something new"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Sandra Savings
                  </Typography>
                  {' — Do you want recommendations for a new account? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
    }