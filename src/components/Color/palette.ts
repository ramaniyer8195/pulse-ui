import red from "./red";
import blue from "./blue";
import purple from "./purple";
import orange from "./orange";
import lightBlue from "./lightBlue";
import green from "./green";

const palette = {
  primary: {
    main: blue[200],
    light: blue[50],
    dark: blue[400],
  },
  secondary: {
    main: purple[200],
    light: purple[50],
    dark: purple[400],
  },
  error: {
    main: red[500],
    light: red[300],
    dark: red[700],
  },
  warning: {
    main: orange[400],
    light: orange[300],
    dark: orange[700],
  },
  info: {
    main: lightBlue[400],
    light: lightBlue[300],
    dark: lightBlue[700],
  },
  success: {
    main: green[400],
    light: green[300],
    dark: green[700],
  },
};

export default palette;
