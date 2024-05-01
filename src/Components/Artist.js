import React from 'react'
import data from "../spotify_data.history.json";
import default0 from "../defaultImgs/Default.jpg"
import default1 from "../defaultImgs/Default1.jpg"
import default2 from "../defaultImgs/Default2.jpg"
import default3 from "../defaultImgs/Default3.jpg"
import default4 from "../defaultImgs/Default4.jpg"
import default5 from "../defaultImgs/Default5.jpg"

const data1 = data.filter((a) => a.master_metadata_track_name != null);

const imgsArray = [default0, default1, default2, default3, default4, default5]



const Artist = (props) => {
    
    const dataArtist = data1.filter(a => a.master_metadata_album_artist_name === props.artist)

    return (
        <div>
                <p>{props.artist} PROFILE:</p>
                <p>Total reproduções: {totalReproducoes(dataArtist)}</p>
                <p>Total de musicas: {totalDeMusicas(dataArtist)}</p>
                <p>Tempo total passado a ouvir: {tempoTotal(dataArtist)}</p>
                <p>{props.artist} representa {percentagemDoTotal(data1, dataArtist)}% das tuas reproduções.</p>
                <p>Top 20: {top20musicas(dataArtist).map((song, index) => (
                    <div key={index} className='flex'>
                        <img className="rounded-sm size-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]}></img>
                        <p key={index}>{index + 1} - {song.song} by {song.artist} on {song.album} - {song.listeningTimeInMinutes} mins</p>
                    </div>
                ))}</p>
                <p>Posição no top100: {posicaoNoTop(props.artist)}</p>
                <p>Estação do ano que mais ouves: {estacaoDoAno(dataArtist)}</p>
         
        </div>
    );
}

export default Artist


function estacaoDoAno(data) {
    const datas = data.map(a => new Date(a.ts));

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    for (let i = 0; i < datas.length; i++) {
        if ((datas[i].getMonth() === 2 && datas[i].getDate() >= 20) || (datas[i].getMonth() === 3) || (datas[i].getMonth() === 4 && datas[i].getDate() <= 20)) {
            count1++;
        }
        if ((datas[i].getMonth() === 5 && datas[i].getDate() >= 21) || (datas[i].getMonth() === 6) || (datas[i].getMonth() === 7 && datas[i].getDate() <= 21)) {
            count2++;
        }
        if ((datas[i].getMonth() === 8 && datas[i].getDate() >= 22) || (datas[i].getMonth() === 9) || (datas[i].getMonth() === 10 && datas[i].getDate() <= 21)) {
            count3++;
        }
        if ((datas[i].getMonth() === 11 && datas[i].getDate() >= 22) || (datas[i].getMonth() === 0) || (datas[i].getMonth() === 1 && datas[i].getDate() <= 19)) {
            count4++;
        }
    }

    let array = [count1, count2, count3, count4];
    let estacaomaxima = Math.max(...array);
    let estacao = "";

    if (estacaomaxima === count1) {
        estacao = "Primavera";
    }
    if (estacaomaxima === count2) {
        estacao = "Verão";
    }
    if (estacaomaxima === count3) {
        estacao = "Outono";
    }
    if (estacaomaxima === count4) {
        estacao = "Inverno";
    }
    return (estacao)
}




function percentagemDoTotal(data1, data2){
    let total = totalReproducoes(data1)
    let totalArtista = totalReproducoes(data2)

    return Math.floor((totalArtista / total) * 10000) / 100
}

function posicaoNoTop(artistname) {
    const top100 = top100Artistas();
    let posicao = "";

    for (let i = 0; i < top100.length; i++) {
        if (top100[i][0] === artistname) {
            posicao += (i + 1) + "º";
            break; // Pare o loop assim que o artista for encontrado
        }
    }

    // Se a posição ainda estiver vazia, o artista não está no top 100
    if (posicao === "") {
        posicao = "Este artista não está no teu top 100";
    }

    return posicao;
}

function totalReproducoes(data) {

    const filteredData = data.map(a => a = a.master_metadata_track_name)
    const numberOfReps = filteredData.length
    return numberOfReps
}

function totalDeMusicas(data) {

    const filteredData = data.map(a => a = a.master_metadata_track_name)
    const numberOfSongs = [...new Set(filteredData)].length
    return numberOfSongs
}



function top20musicas(data) {
    const songListeningTime = {};


    data.forEach(item => {
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


    const top20musicas = songListeningTimeArray.slice(0, 20).map(([key, listeningTime]) => {
        const [song, artist, album] = key.split(' - ');
        return { song, artist, album, listeningTimeInMinutes: Math.floor(listeningTime / (1000 * 60)) };
    });

    return top20musicas;
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

function tempoTotal(data) {
    const totalTempo = data.reduce((total, item) => total + item.ms_played, 0);
    const totalHoras = Math.floor(totalTempo / (1000 * 60 * 60));
    const restante = totalTempo % (1000 * 60 * 60);
    const totalMinutos = Math.floor(restante / (1000 * 60));
    const totalSegundos = Math.floor((restante % (1000 * 60)) / 1000);
    const frase = `${totalHoras} hours, ${totalMinutos} minutes, and ${totalSegundos} seconds`;
    return frase
}