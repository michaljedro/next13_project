import Header from "../../restaurant/[slug]/components/Header";
import RestaurantNavbar from "../../restaurant/[slug]/components/RestaurantNavbar";
import Title from "../../restaurant/[slug]/components/Title";
import Rating from "../../restaurant/[slug]/components/Rating";
import Description from "../../restaurant/[slug]/components/Description";
import Images from "../../restaurant/[slug]/components/Images";
import Reviews from "../../restaurant/[slug]/components/Reviews";
import ReservationCard from "../../restaurant/[slug]/components/ReservationCard";
export default function RestaurantDetails() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
