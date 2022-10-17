import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "600": "#FFBA08",
      "300": "rgba(255,186,8,0.5)",
    },
    text: {
      "900": "#47585B",
      "100": "#F5F8FA",
    },
    info: {
      "900": "#999999",
      opacity: "rgba(153,153,153,0.5)",
      "100": "#DADADA",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "text.100",
      },
    },
  },
});
