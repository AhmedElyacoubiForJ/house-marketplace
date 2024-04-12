import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  // for sale or rent
  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get referernce
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        ); // s. App route call l.23

        // Execute the query
        const querySnap = await getDocs(q);

        const listings = [];
        querySnap.forEach((doc) => {
          //console.log(doc.data())
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };

    // fetching
    fetchListings();
  }, []);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
         Offers
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem key={listing.id} listing={listing.data} id={listing.id} />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>There are no current Offers</p>
      )}
    </div>
  );
}

export default Offers;
