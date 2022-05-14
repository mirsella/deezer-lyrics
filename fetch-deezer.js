const fs = require('fs')
require('isomorphic-fetch');
const fetchHAR = require('fetch-har').default;
const { https } = require('follow-redirects');
const har = JSON.parse(fs.readFileSync('deezer.har'))

const url = "https://deezer.page.link/iDo613dDAyk9A4Gi8"

let sng_id

// resolve the deezer short link to get the sng_id
https.get(url, response => {
  const url = response.responseUrl
  sng_id = url.match(/track\/([0-9]+)/)[1]

  // replace the har sng_id with the one of the url
  for (const query of har.log.entries[0].request.queryString) {
    if (query.name === "sng_id") {
      query.value = sng_id
    }
  }

  fetchHAR(har)
    .then(res => res.json())
    .then(res => {
      console.log(res.results.LYRICS_TEXT)
    })
})

