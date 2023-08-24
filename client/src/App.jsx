import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Post from "./components/Posts/Posts";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
} from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
function App() {
  const [formats, setFormats] = useState(null);
  const [state, setState] = useState();
  console.log({
    formats,
  });
  const handleFormatChange = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Container maxWidth={false}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h5" align="center">
            CAMEREVENT
          </Typography>
          <img src={viteLogo} alt="Vite Logo" width="50" height="50" />
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
             <Post/>
            </Grid>
            <Form/>
            <Grid item xs={12} sm={4}>

            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
