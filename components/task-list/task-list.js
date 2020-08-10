import React from "react";
import { List } from "@material-ui/core";
import TaskListItem from "../task-list-item/task-list-item";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useStyles from "../../classes";

const TaskList = (props) => {
  const { children, onToggleCheckbox, onDelete } = props;

  const classes = useStyles();

  return (
    <List className={classes.taskList}>
      <TransitionGroup className="task-list">
        {children.map(({ id, term, performed }) => {
          return (
            <CSSTransition key={id} timeout={800} classNames="item-enter-done">
              <TaskListItem
                id={id}
                onDelete={onDelete}
                performed={performed}
                onCheckbox={onToggleCheckbox}
              >
                {term}
              </TaskListItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </List>
  );
};

export default TaskList;
