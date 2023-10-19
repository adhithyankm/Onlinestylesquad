

import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
import glass from '../components/img/glass.jpg'
import shoes from '../components/img/shoes.jpg'
import watch from '../components/img/watch.jpg'


  
  const Rightbar = () => {
    return (
      <Box>
        <Typography align="center" bgcolor={"black"} color="white" mt={14}> 
          Most Popular
        </Typography>
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={shoes}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={"Exclusive collection"}
            />
          </ListItem>
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={watch}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={" Exclusive collection"}
            />
          </ListItem>
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={glass}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={" Exclusive collection"}
            />
          </ListItem>
          <Divider variant="inset" component={"li"} />
        </List>
        {/* <Typography align="center" bgcolor={"black"} color="white">
          About Us
        </Typography> */}
      </Box>
    );
  };
  
  export default Rightbar;