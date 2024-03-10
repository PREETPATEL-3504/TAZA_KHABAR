
import './App.css';
import React, { useState } from 'react';
import Navbar from './componets/Navbar';
import News from './componets/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={9 / 0} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={9 / 0} category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={9 / 0} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={9 / 0} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={9 / 0} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={9 / 0} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={9 / 0} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
