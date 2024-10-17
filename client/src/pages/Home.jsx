import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-4 p-10 sm:p-16 max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 rounded-xl shadow-xl text-center text-white">
        <h1 className="text-white font-extrabold text-5xl lg:text-7xl tracking-tight leading-tight">
          Discover Your <span className="text-yellow-400">Dream</span> Home
        </h1>
        <p className="text-white text-base sm:text-lg max-w-xl mx-auto">
          Find your perfect place with a curated selection of homes, just a
          click away.
        </p>
        <Link
          to="/search"
          className="inline-block text-sm sm:text-base text-indigo-700 font-bold bg-yellow-400 py-3 px-8 rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
        >
          Explore Listings
        </Link>
      </div>

      {/* Swiper Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[400px] md:h-[500px] relative"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-md">
                    {listing.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listing Sections */}
      <div className="max-w-6xl mx-auto p-5 flex flex-col gap-12 mt-12">
        {/* Offer Listings */}
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold text-slate-800">
                Featured Offers
              </h2>
              <Link
                className="text-base text-indigo-600 hover:underline"
                to={"/search?offer=true"}
              >
                View all offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold text-slate-800">
                Recently Listed for Rent
              </h2>
              <Link
                className="text-base text-indigo-600 hover:underline"
                to={"/search?type=rent"}
              >
                View all rental listings
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold text-slate-800">
                Recently Listed for Sale
              </h2>
              <Link
                className="text-base text-indigo-600 hover:underline"
                to={"/search?type=sale"}
              >
                View all sale listings
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
