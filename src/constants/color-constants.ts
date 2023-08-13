import {
  blue,
  green,
  lightBlue,
  orange,
  purple,
  red,
} from "../components/Color";

export const colorValues = {
  primary: {
    border: `${blue[700]}80`,
    backgroundColor: `${blue[700]}`,
    color: `${blue[700]}`,
    hover: {
      border: blue[700],
      backgroundColor: `${blue[700]}0a`,
      solidBackground: blue[800],
    },
  },
  secondary: {
    border: `${purple[500]}80`,
    backgroundColor: `${purple[500]}`,
    color: `${purple[500]}`,
    hover: {
      border: purple[500],
      backgroundColor: `${purple[500]}0a`,
      solidBackground: purple[700],
    },
  },
  error: {
    border: `${red[700]}80`,
    backgroundColor: `${red[700]}`,
    color: `${red[700]}`,
    hover: {
      border: red[700],
      backgroundColor: `${red[700]}0a`,
      solidBackground: red[800],
    },
  },
  warning: {
    border: `${orange[700]}80`,
    backgroundColor: `${orange[700]}`,
    color: `${orange[700]}`,
    hover: {
      border: orange[700],
      backgroundColor: `${orange[700]}0a`,
      solidBackground: orange[900],
    },
  },
  info: {
    border: `${lightBlue[700]}80`,
    backgroundColor: `${lightBlue[700]}`,
    color: `${lightBlue[700]}`,
    hover: {
      border: lightBlue[700],
      backgroundColor: `${lightBlue[700]}0a`,
      solidBackground: lightBlue[900],
    },
  },
  success: {
    border: `${green[800]}80`,
    backgroundColor: `${green[800]}`,
    color: `${green[800]}`,
    hover: {
      border: green[800],
      backgroundColor: `${green[800]}0a`,
      solidBackground: green[900],
    },
  },
  disabled: {
    border: "#0000001f",
    backgroundColor: "#0000001f",
    color: "#00000042",
  },
};
