import React, { useState } from "react";
import useStyles from "../../classes";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { NightsStay } from "@material-ui/icons/";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Header = (props) => {
  const { onSubmitHandler, onThemeSwitcher } = props;

  const [ItemTerm, onInputChange] = useState("");

  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.header}
      onSubmit={(e) => {
        onSubmitHandler(e, ItemTerm);
        onInputChange("");
      }}
      variant="elevation"
      severity="info"
    >
      <InputBase
        className={classes.input}
        placeholder="Enter Your Task"
        value={ItemTerm}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <AddBoxIcon />
      </IconButton>
      <IconButton className={classes.iconButton} onClick={onThemeSwitcher}>
        <NightsStay />
      </IconButton>
    </Paper>
  );
};

export default Header;
