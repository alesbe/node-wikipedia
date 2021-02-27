const express = require("express");
const { fetchJson } = require("fetch-json");

const app = express();
const port = process.env.PORT || 5000;

//Setup port
app.listen(port, () => console.log(`Listening on port ${port}`));

//Check server status
app.get("/backend", (req, res) => {
    console.log(req.query);

    res.json({
      status: true
    });
});

//WIKIPEDIA API: https://es.wikipedia.org/w/api.php?action=query&generator=prefixsearch&gpssearch=manzano&prop=extracts&exintro=1&explaintext=1&redirects=1
//Webscraping
app.get("/search", (req, res) => {
  async function getData () {
    let query = req.query.query;
    let url = `https://es.wikipedia.org/w/api.php?action=query&generator=prefixsearch&gpssearch=${query}&prop=extracts&exintro=1&explaintext=1&format=json&redirects`;

    let data = await fetchJson.get(url);
    return data;
  };

  getData().then(data => {
    if(data.query.redirects.length >= 1){
      let title = data.query.redirects[0].to;
      let page = data.query.pages;

      for (let key in data.query.pages) {
        if(data.query.pages[key]['title'] == title){
          res.json(data.query.pages[key]);
        }
      }
    } else {
      for (let key in data.query.pages) {
        res.json(data.query.pages[key]);
        break;
      }
    }
  })
});