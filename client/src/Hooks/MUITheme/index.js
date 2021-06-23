import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        p: "h5",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "4em",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".subtitle": {
          fontWeight: "bold",
          textTransform: "uppercase",
          marginBottom: "10px",
          textAlign: "Center",

          overflow: "hidden",
        },
        ".responsiveImage": {
          overflow: "hidden",
        },
        ".sectionText": {
          color: "rgba(0,0,0,.7)",
          fontSize: "1.6em",
          textTransform: "inherit",

          paddingTop: "10px",
          lineHeight: "1.6em",

          "@media (min-width:960px)": {
            fontSize: "1.6em",
          },
        },
      },
    },
  },
});
theme.typography.h2 = {
  marginTop: "20px",
  fontSize: "1.7rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
export default theme;