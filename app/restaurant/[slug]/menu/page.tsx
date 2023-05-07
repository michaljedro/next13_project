import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "./components/Menu";
import Title from "../components/Title";
import Rating from "../components/Rating";
import Description from "../components/Description";
import Images from "../components/Images";
import Reviews from "../components/Reviews";
import ReservationCard from "../components/ReservationCard";

export default function RestaurantMenu() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar />
          <Menu />
        </div>
      </div>
    </>
  );
}
