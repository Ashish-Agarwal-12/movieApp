import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import HallList from "./components/HallComponents/HallList"
import MovieList from "./components/MoviesComponents/MovieList"
import Home from "./components/Home"
import SlotList from "./components/SlotComponents/SlotList"
import UserList from './components/UserComponents/UserList';
import UserUpdate from './components/UserComponents/UserUpdate';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hallList" element={<HallList />} />
          <Route path="/slotList" element={<SlotList />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/userUpdate" element={<UserUpdate />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
