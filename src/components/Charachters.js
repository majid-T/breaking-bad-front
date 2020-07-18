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
        console.log(chars.data);
        setCharachters(chars.data);
      }
      setLoading(false);
    };

    getCharsFromApi();
  }, []);
  return (
    <div className="row justify-content-center">
      {loading ? (
        <h2>Loading</h2>
      ) : (
        charachters.map((item) => {
          return <CharCard char={item} />;
        })
      )}
    </div>
  );
};

export default Charachters;
