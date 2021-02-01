import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    maxHeight: 330,
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListOfCountries() {
  const classes = useStyles();
  const summary_ = useSelector(state => state.summary)

  const list_ = (items) => {
    return items.map((item) => {
      return (
        <ListItem key={item.ID}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.Country} secondary={`TotalConfirmed ${item.TotalConfirmed}`} />
        </ListItem>
      );
    });
  };

  return <List className={classes.root}>{
      (summary_.data)? list_(summary_.data.Countries) : 'No Countries found'
    }</List>;
}
