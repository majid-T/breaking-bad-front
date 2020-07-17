import React, { useState, useEffect } from "react";
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
    <div className="row">
      {loading ? (
        <h2>Loading</h2>
      ) : (
        charachters.map((item) => {
          return (
            <div className="col-5 m-2" key={item.char_id}>
              {item.name}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Charachters;
