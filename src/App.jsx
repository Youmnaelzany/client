import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/myBookings" element={<MyBookings />} />
        <Route path="/seatLayout" element={<SeatLayout />} />
      </Routes>
    </>
  );
};
export default App;
