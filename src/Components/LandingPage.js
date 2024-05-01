import React, { useState } from 'react'
import data from "../spotify_data.history.json"
import defaultUserPic from "../defaultImgs/Default2.jpg"
const data1 = data.filter((a) => a.master_metadata_track_name != null);




const LandingPage = () => {
    const [themeColor, setThemeColor] = useState("#2EBD59")
    const bgColor = "#181717"
    const textColor = "#6B726E"
    const textColor2 = "#6B726E"
    return (
        <div>
            {/* <h1>User:</h1> */}
            {/* <p>Estação do ano: {estacaoDoAno()}</p> */}
            {/* <p>Horas do dia que mais ouves: {horasDoDia()}</p> */}
            {/* <p>Total de músicas: {totalDeMusicas()}</p> */}
            {/* <p>Media diária: {mediaDiaria()} minutos</p> */}
            {/* <p>Tempo total: {tempoTotal()}</p> */}
            {/* <p>Total reproduções: {totalReproducoes()}</p> */}
            <div style={{ backgroundColor: bgColor }} className='w-[1200px] h-[700px] rounded-2xl'>
                <div className='h-[350px]'>
                    <div>
                        <img src={defaultUserPic}/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div style={{ backgroundColor: themeColor }} className='h-[350px] rounded-2xl'></div>
            </div>
        </div>
    )
}

export default LandingPage

function totalReproducoes(){

    const filteredData = data1.map(a => a = a.master_metadata_track_name)
    const numberOfReps = filteredData.length
    return numberOfReps
}

function tempoTotal() {
    const totalTempo = data1.reduce((total, item) => total + item.ms_played, 0);
    const totalHoras = Math.floor(totalTempo / (1000 * 60 * 60));
    const restante = totalTempo % (1000 * 60 * 60);
    const totalMinutos = Math.floor(restante / (1000 * 60));
    const totalSegundos = Math.floor((restante % (1000 * 60)) / 1000);
    const frase = `${totalHoras} hours, ${totalMinutos} minutes, and ${totalSegundos} seconds`;
    return frase
}


function mediaDiaria() {

    const naopuladas = data1.filter(a => a.reason_end === "trackdone")
    const totalPlaybackTime = naopuladas.reduce((total, item) => total + item.ms_played, 0);
    const media = Math.floor(totalPlaybackTime / 1203 / (1000 * 60))
    return media
}

function totalDeMusicas() {

    const filteredData = data1.map(a => a = a.master_metadata_track_name)
    const numberOfSongs = [...new Set(filteredData)].length
    return numberOfSongs
}


function horasDoDia() {
    const mapaTS = data1.reduce((mapa, a) => {
        let hours = new Date(a.ts).getHours()
        mapa[hours] = (mapa[hours] ?? 0) + 1
        return mapa
    }, {})
    const maxFrequency = Math.max(...Object.values(mapaTS));
    const mostFrequentKey = Object.keys(mapaTS).find(key => mapaTS[key] === maxFrequency);
    return mostFrequentKey
}


function estacaoDoAno() {
    const datas = data1.map(a => new Date(a.ts));

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
