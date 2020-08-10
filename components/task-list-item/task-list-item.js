import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../../classes";
import {
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";

const TaskListItem = (props) => {
  const { onDelete, children, id, performed, onCheckbox } = props;

  const classes = useStyles();

  return (
    <ListItem dense button className={classes.item}>
      <ListItemIcon className={classes.icons}>
        <Checkbox
          checked={performed}
          edge="start"
          tabIndex={-1}
          onChange={() => onCheckbox(id)}
        />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(id)}
          className={classes.icons}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskListItem;
