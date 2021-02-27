import React, { useState, useEffect } from "react";
import './SearchTrees.css';
import TreeCard from'../TreeCard/TreeCard';
import SearchBar from "../SearchBar/SearchBar"

const axios = require("axios");

export default function SearchTrees() {
  const [cardInfo, setCardInfo] = useState({
    "name": "Manzano",
    "emoji": "🍃",
    "s_name": "Malus domestica",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lob_Korocha1.JPG/250px-Lob_Korocha1.JPG",
    "desc": "Malus domestica, el manzano europeo o manzano común, es un árbol de la familia de las rosáceas, cultivado por su fruto, apreciado como alimento."
  });

  function handleState(newState) {
    setCardInfo(newState);
  }

  return (
    <div class="wrapper_search">
      <SearchBar handleState={handleState} />
      <div id="separator"></div>
      <TreeCard
        name={cardInfo["name"]}
        emoji={cardInfo["emoji"]}
        s_name={cardInfo["s_name"]}
        image={cardInfo["image"]}
        desc={cardInfo["desc"]}
      />
    </div>
  );
}
