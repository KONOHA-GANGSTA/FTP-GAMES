import { createTheme } from "@mui/material";
export const theme = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to right,#460046,#43007a,#460046)",
          margin: "0px",
        },
        text: {
          width: "100%",
          height: "20px",
        },
      },
    },
  },
});
