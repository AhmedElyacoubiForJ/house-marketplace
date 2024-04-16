import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "./Spinner";

import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";

register();

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    // the call
    fetchListings();
  }, []);

  if (loading) return <Spinner />;

  if (listings.length === 0) return <></>;

  return (
    <>
      <p className="exploreHeading">Recommended</p>
      <swiper-container
        space-between="10"
        slides-per-view="1"
        pagination="true"
        navigation="true"
      >
        {listings.map(({ data, id }) => (
          <swiper-slide
            key={id}
            onClick={() => navigate(`/category/${data.type}/${id}`)}
          >
            <div
              style={{
                background: `url(${data.imgUrls[0]}) center no-repeat`,
                backgroundSize: "cover",
              }}
              className="swiperSlideDiv"
            >
              <p className="swiperSlideText">{data.name}</p>
              <p className="swiperSlidePrice">
                ${data.discountedPrice ?? data.regularPrice}{" "}
                {data.type === "rent" && "/ month"}
              </p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}

export default Slider;
