# deezer-lyrics
fetch a hidden deezer api to get a song lyrics from it's deezer share url
this is a proof of concept for a android app where you share the deezer url to the app and translate the lyrics to any language

from https://stackoverflow.com/a/59822502/12834073 : 
>They actually do have an API, but it's hidden. You will need a basic understanding of searching Deezer first (which is easy as hell), once you can search for a song and get the ID from that search, use
>
>https://www.deezer.com/ajax/gw-light.php?method=song.getLyrics&api_version=1.0&api_token=[api-token]&sng_id=[song-id]
>
>To get your API key, you can use inspect element on deezer.com. Open Inspect > Network > reload the page > click on (most likely) the second entry > scroll down to "Query String Parameters" > copy api_token and use that in the link above.

with your any sng_id and your api-token in place in the url, go to the url in your browser. got to the network tab and select only the /ajax url, and save it as a deezer.har.
