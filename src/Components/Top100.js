import React from 'react';
import data from "../spotify_data.history.json";
import default0 from "../defaultImgs/Default.jpg"
import default1 from "../defaultImgs/Default1.jpg"
import default2 from "../defaultImgs/Default2.jpg"
import default3 from "../defaultImgs/Default3.jpg"
import default4 from "../defaultImgs/Default4.jpg"
import default5 from "../defaultImgs/Default5.jpg"

const data1 = data.filter((a) => a.master_metadata_track_name != null);

const imgsArray = [default0, default1, default2, default3, default4, default5]


const Top100 = () => {
    return (
        <div>
            <div>
                <h1>Top 100 Artistas</h1>
                {top100Artistas().map(([artist, playCount], index) => (
                    <div key={index} className='flex'>
                        <img className="rounded-sm size-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]}></img>
                        <p>{index + 1} - {artist}: {playCount} plays</p>
                    </div>
                ))}
            </div>
            <div><h1>Top 100 Musicas</h1>
                {top100musicas().map((song, index) => (
                    <div key={index} className='flex'>
                        <img className="rounded-sm size-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]}></img>
                        <p key={index}>{index + 1} - {song.song} by {song.artist} on {song.album} - {song.listeningTimeInMinutes} mins</p>
                    </div>

                ))}
            </div>
            <div><h1>Top 100 Albums</h1>
                {top100Albums().map((album, index) => (
                    <div key={index} className='flex'>
                        <img className="rounded-sm size-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]}></img>
                    <p key={index}>{index + 1} - {album.album} by {album.artist} - {album.listeningTimeInMinutes} mins</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Top100;





function top100musicas() {
    const songListeningTime = {};

    
    data1.forEach(item => {
        const song = item.master_metadata_track_name;
        const artist = item.master_metadata_album_artist_name;
        const album = item.master_metadata_album_album_name;
        const msPlayed = item.ms_played;

        const key = `${song} - ${artist} - ${album}`; 

        if (key in songListeningTime) {
            songListeningTime[key] += msPlayed;
        } else {
            songListeningTime[key] = msPlayed;
        }
    });

    
    const songListeningTimeArray = Object.entries(songListeningTime);

    
    songListeningTimeArray.sort((a, b) => b[1] - a[1]);

    
    const top100musicas = songListeningTimeArray.slice(0, 100).map(([key, listeningTime]) => {
        const [song, artist, album] = key.split(' - '); 
        return { song, artist, album, listeningTimeInMinutes: Math.floor(listeningTime / (1000 * 60)) }; 
    });

    return top100musicas;
}

function top100Albums() {
    const albumListeningTime = {};


    data1.forEach(item => {
        const artist = item.master_metadata_album_artist_name;
        const album = item.master_metadata_album_album_name;
        const msPlayed = item.ms_played;

        const key = `${album} - ${artist}`; 

        if (key in albumListeningTime) {
            albumListeningTime[key] += msPlayed;
        } else {
            albumListeningTime[key] = msPlayed;
        }
    });


    const albumListeningTimeArray = Object.entries(albumListeningTime);


    albumListeningTimeArray.sort((a, b) => b[1] - a[1]);

    const top100Albums = albumListeningTimeArray.slice(0, 100).map(([key, listeningTime]) => {
        const [album, artist] = key.split(' - '); // Split the key to extract album and artist
        return { album, artist, listeningTimeInMinutes: Math.floor(listeningTime / (1000 * 60)) }; // Convert listening time to minutes
    });

    return top100Albums;
}

function top100Artistas() {
    const artistPlayCount = {};


    data1.forEach(item => {
        const artist = item.master_metadata_album_artist_name;
        if (artist in artistPlayCount) {
            artistPlayCount[artist] += 1;
        } else {
            artistPlayCount[artist] = 1;
        }
    });


    const artistPlayCountArray = Object.entries(artistPlayCount);


    artistPlayCountArray.sort((a, b) => b[1] - a[1]);


    const top100Artistas = artistPlayCountArray.slice(0, 100);
    return top100Artistas;
}
