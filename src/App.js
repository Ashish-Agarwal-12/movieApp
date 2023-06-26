import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HallList from "./components/HallComponents/HallList";
import HallUpdate from "./components/HallComponents/HallUpdate";
import MovieList from "./components/MoviesComponents/MovieList";
import Home from "./components/Home";
import SlotList from "./components/SlotComponents/SlotList";
import UserList from "./components/UserComponents/UserList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import BookingPage from "./components/BookingComponents/BookingPage";
import BookingList from "./components/BookingComponents/BookingList";
import SlotUpdate from "./components/SlotComponents/SlotUpdate";
import UserUpdate from "./components/UserComponents/UserUpdate";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout";
import Ticket from "./components/Ticket";
import MyBookings from "./components/BookingComponents/MyBookings";
import AddMovie from "./components/MoviesComponents/AddMovie";

function App() {
  return (
    <div className="App">
        <Layout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hallList" element={<HallList />} />
            <Route path="/updateHall" element={<HallUpdate />} />
            <Route path="/slotList" element={<SlotList />} />
            <Route path="/updateSlot" element={<SlotUpdate />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/userUpdate" element={<UserUpdate />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/bookingList" element={<BookingList />} />
            <Route path="/myBookings" element={<MyBookings />} />
            {/* <Route path="/tickets" element={<Ticket />} /> */}
            <Route path="/movieForm" element={<AddMovie />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
