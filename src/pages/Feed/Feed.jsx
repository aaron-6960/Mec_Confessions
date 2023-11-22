import React, { useState, useEffect } from "react";
import ConfessionCard from "../../components/ConfessionCard/ConfessionCard";
import "./Feed.css";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const collecting = async () => {
      const db = getFirestore(app);
      const q = query(collection(db, "confessions"), orderBy("date", "desc"));
      const querrySnapshot = await getDocs(q);
      const data = querrySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
    };
    collecting();
  }, []);
  console.log(data[0]);
  return (
    <div className="feed">
      {data.map((element) => {
        console.log(element.date.toDate().toLocaleString())
        return (
          <ConfessionCard
            confession={element.confession}
            confessionDate={element.date.toDate().toLocaleString()}
            key={element.id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
