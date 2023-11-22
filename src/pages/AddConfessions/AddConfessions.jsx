import React, { useState } from "react";
import { app } from "../../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./AddConfessions.css"

const AddConfessions = () => {
  const [confession, setConfession] = useState("");
  const db = getFirestore(app);
  const addConfession = async (e) => {
    e.preventDefault();
    var date = new Date()
    const confession = e.target.confession.value;
    try {
      const docRef = addDoc(collection(db, "confessions"), {
        confession,
        date,
      });
      console.log("Document written with ID", docRef.id);
      setConfession("");
    } catch (e) {
      console.error("Error adding confession:", e);
    }
  };
  return (
    <div>
      <form className="card" onSubmit={addConfession}>
        <label htmlFor="confession">Enter your confessions here</label>
        <input
          type="text"
          name="confession"
          id="confession"
          onChange={(e) => setConfession(e.target.value)}
          placeholder="Write your confessions here"
          value={confession}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddConfessions;
