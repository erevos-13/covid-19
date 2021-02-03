import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { Button,ListItemSecondaryAction  } from "@material-ui/core";
import Flag from 'react-world-flags'


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxHeight: 330,
    overflowY: "scroll",
    border: '1px solid gray',
    backgroundColor: theme.palette.background.paper,
  },
  avatarNone: {
    backgroundColor: 'transparent'
  }
}));

export default function ListOfCountries(props) {
  const classes = useStyles();
  const summary_ = useSelector((state) => state.summary);



  const list_ = (items) => {
    return items.map((item) => {
      return (
        <ListItem key={item.ID}>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.avatarNone}>
              <Flag code={item.CountryCode}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.Country}
            secondary={`TotalConfirmed ${item.TotalConfirmed}`}
          />
          <ListItemSecondaryAction>
            <Button variant="contained" onClick={() => props.onSelectCountry(item)}>
             Show
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  return (
    <List className={classes.root}>
      {summary_.data ? list_(summary_.data.Countries) : "No Countries found"}
    </List>
  );
}
