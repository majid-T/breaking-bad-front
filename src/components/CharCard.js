import React from "react";

const CharCard = ({ char }) => {
  return (
    <div className="col-3 m-2" key={char.char_id}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={char.img} class="card-img-top" alt={char.name} />
          </div>
          <div className="card-back">
            <p>Nickname:{char.nickname}</p>
            <p>Portrayed by: {char.portrayed}</p>
            <a href="#" className="btn btn-primary">
              details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharCard;
