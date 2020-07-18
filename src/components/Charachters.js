import React, { useState, useEffect } from "react";
import CharCard from "./CharCard";
import axios from "axios";

const Charachters = ({ baseUrl }) => {
  const [charachters, setCharachters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharsFromApi = async () => {
      const chars = await axios(`${baseUrl}characters`);
      if (chars.status === 200) {
        setCharachters(chars.data);
      }
      setLoading(false);
    };

    getCharsFromApi();
  }, []);
  return (
    <div className="row justify-content-center">
      {loading ? (
        <i className="fas fa-sync-alt fa-spin fa-10x mt-100"></i>
      ) : (
        charachters.map((item) => {
          return <CharCard key={item.char_id} char={item} />;
        })
      )}
    </div>
  );
};

export default Charachters;
