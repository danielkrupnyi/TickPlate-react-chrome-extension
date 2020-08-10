import React, { useState, useEffect } from "react";

import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import Header from "../header/header";
import TaskList from "../task-list/task-list";
import { darkTheme, lightTheme } from "../../themes";

const App = () => {
  const [taskList, updateTaskList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.storage.sync.get(["tasks"], ({ tasks }) => updateTaskList(tasks));
    chrome.storage.sync.get(["darkMode"], ({ darkMode }) =>
      setDarkMode(darkMode)
    );
    setLoading(false);
  }, []);

  useEffect(() => chrome.storage.sync.set({ tasks: taskList }), [taskList]);

  useEffect(() => chrome.storage.sync.set({ darkMode: darkMode }), [darkMode]);

  const createTask = (term, performed = false) => {
    return { id: Math.random(), term, performed };
  };

  const onInputSubmit = (e, term) => {
    e.preventDefault();

    if (!term.length || term.length > 30) return;

    updateTaskList((prev) => [...prev, createTask(term)]);
  };

  const onDeleteButton = (id) => {
    updateTaskList((prev) => prev.filter((el) => el.id !== id));
  };

  const onCheckboxHandler = (id) => {
    updateTaskList((prev) => {
      return prev.map((el) => {
        if (el.id === id) el.performed = !el.performed;
        return el;
      });
    });
  };

  const onThemeSwitcher = () => setDarkMode((prev) => !prev);

  const theme = darkMode ? darkTheme : lightTheme;

  const alert = loading && (
    <Alert variant="filled" severity="info">
      LOADING...
    </Alert>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header
          onSubmitHandler={onInputSubmit}
          onThemeSwitcher={onThemeSwitcher}
        />
        {alert}
        <TaskList
          onToggleCheckbox={onCheckboxHandler}
          onDelete={onDeleteButton}
        >
          {taskList}
        </TaskList>
      </Container>
    </ThemeProvider>
  );
};

export default App;
