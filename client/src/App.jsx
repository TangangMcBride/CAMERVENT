import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Post from "./components/Posts/Posts";
import Navbar from "./components/Navbar";

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
    <>
      <Navbar />
    </>
  );
}

export default App;
