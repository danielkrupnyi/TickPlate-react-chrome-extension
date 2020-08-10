import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "10px",
    padding: "2px 0",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: theme.palette.primary.contrastText,
  },
  iconButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  taskList: {
    marginTop: "10px",
    marginBottom: "20px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  icons: {
    fontSize: "20px",
    color: theme.palette.primary.contrastText,
  },
  item: {
    marginTop: "5px",
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

export default useStyles;
