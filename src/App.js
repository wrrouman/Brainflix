import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import { getVideos } from "./components/api/api";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    // the code I want to run during the update

    getVideos().then((res) => {
      console.log(res.data);
      setVideosData(res.data);
    });
  }, []); // empty dependency will ony run after the inital mount of the component 

  const [videosData, setVideosData] = useState();
     return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home videosData={videosData} />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/:id" element={<Home videosData={videosData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
