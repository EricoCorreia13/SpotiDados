import React from 'react';
import data from "../spotify_data.history.json";

const Top100AllArtists = () => {
    // Create an object to store the play count for each artist
    const artistPlayCount = {};
    
    // Loop through the data and count the plays for each artist
    data.forEach(item => {
        const artist = item.master_metadata_album_artist_name;
        if (artist in artistPlayCount) {
            artistPlayCount[artist] += 1;
        } else {
            artistPlayCount[artist] = 1;
        }
    });

    // Convert the object into an array of objects for easier sorting
    const artistPlayCountArray = Object.entries(artistPlayCount);

    // Sort the array based on the play count in descending order
    artistPlayCountArray.sort((a, b) => b[1] - a[1]);

    // Get the top 100 most played artists
    const top100Artists = artistPlayCountArray.slice(0, 100);

    return (
        <div>
            {top100Artists.map(([artist, playCount], index) => (
                <p key={index}>{artist}: {playCount} plays</p>

            ))}
        </div>
    );
}

export default Top100AllArtists;
