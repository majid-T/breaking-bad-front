import React, { useState } from "react";
import CharModal from "./CharModal";

const CharCard = ({ char }) => {
  let [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    console.log(`Clicked for ${char.name}`);
    console.log("modalShow was:", modalShow);
    setModalShow(!modalShow);
  };

  return (
    <div className="col-3 m-2" key={char.char_id}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={char.img} className="card-img-top" alt={char.name} />
          </div>
          <div className="card-back">
            <p className="ml-2">Nickname:{char.nickname}</p>
            <p className="ml-2">Portrayed by: {char.portrayed}</p>
            <span href="#" className="btn btn-primary" onClick={toggleModal}>
              details
            </span>
          </div>
        </div>
      </div>

      <CharModal show={modalShow} handleClose={toggleModal}>
        <p className="ml-5 mt-5">Name:{char.name}</p>
        <p className="ml-5 mt-2">Birthday:{char.birthday}</p>
        <p className="ml-5 mt-2">Nickname:{char.nickname}</p>
        <p className="ml-5 mt-2">Portrayed by: {char.portrayed}</p>
        <p className="ml-5 mt-2">Status:{char.status}</p>
      </CharModal>
    </div>
  );
};

export default CharCard;
