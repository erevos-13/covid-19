import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Flag from 'react-world-flags'
import * as moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    maxHeight: 330,
    overflowY: "scroll",
    border: '1px solid gray',
    backgroundColor: theme.palette.background.paper,
  },
  avatarNone: {
    backgroundColor: 'transparent'
  }
}));

export default function ListByStatus({stats}) {
  const classes = useStyles();
  console.log(stats)




  const list_ = (items) => {
    return items.map((item, index) => {
      return (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.avatarNone}>
              <Flag code={item.CountryCode}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={moment(item.Date).format("YYYY-MM-DD") }
            secondary={`Cases: ${item.Cases}`}
          />
          
        </ListItem>
      );
    });
  };

  return (
    <List className={classes.root}>
      {stats ? list_(stats) : "No Stats found"}
    </List>
  );
}
