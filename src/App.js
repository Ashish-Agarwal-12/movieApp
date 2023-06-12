import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import HallList from "./components/HallList"
import MovieList from "./components/MoviesList"
import Home from "./components/Home"
import SlotList from "./components/SlotList"
import { HallContextProvider } from './context/HallContext';

function App() {
  return (
    <div className="App">
      <HallContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hallList" element={<HallList />} />
          <Route path="/slotList" element={<SlotList />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Layout>
      </HallContextProvider>
    </div>
  );
}

export default App;
