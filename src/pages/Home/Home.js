// import Data from '../src/data/video-details.json';
import Data from "../../../src/data/video-details.json"
import Header from "../../components/Header/Header";
import VideoPage from "../../components/VideoPage/VideoPage";
// import NextVideos from "./components/NextVideos/NextVideos";
// import Comment from "./components/Comments/Comments"
import Comment from "../../components/Comments/Comments"
import VideoList from "../../components/Videolist/Videolist"
// import Videolist from "./components/Videolist/Videolist";
import { MapHTMLAttributes } from "react";



function Home({videosData}) {
  // const details = Data [0]
  return (
    <>
      <Header />
      {videosData && (<VideoPage videosData={videosData}/>)}
    </>
  );
}

export default Home;