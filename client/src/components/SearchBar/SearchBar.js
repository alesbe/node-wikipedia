import "./SearchBar.css";
import React, { useState } from "react";
import emoji_random from "../../utils/emoji_random";
const axios = require("axios");

export default function SearchBar({handleState}) {
  const [inputtext, setInputtext] = useState("");

  async function Search (ev) {
    ev.preventDefault();
    await axios
      .get("/search", {
        params: {
          query: inputtext
        }
      })
      .then((res) => {
        handleState({
          "name": inputtext,
          "emoji": emoji_random(),
          "s_name": res["data"]["title"],
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lob_Korocha1.JPG/250px-Lob_Korocha1.JPG",
          "desc": res["data"]["extract"]
        });
      })
      .catch((err) => {
        return err;
      });
  }

  return (
    <div id="cover">
      <form onSubmit={ev => {Search(ev)}}>
        <div class="tb">
          <div class="td">
            <input type="text" placeholder="Buscar" onChange={ev => setInputtext(ev.target.value)}></input>
          </div>
          <div class="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
