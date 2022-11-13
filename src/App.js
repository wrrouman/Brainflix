import "./App.css";

import Data from '../src/data/video-details.json';
import Header from "./components/Header/Header.js";
import VideoPage from "./components/VideoPage/VideoPage";
// import NextVideos from "./components/NextVideos/NextVideos";
import Comment from "./components/Comments/Comments"
import Videolist from "./components/Videolist/Videolist";
import { MapHTMLAttributes } from "react";



function App() {
  const details = Data [0]
  return (
    <>
      <Header />
      <VideoPage />
    </>
  );
}

export default App;
