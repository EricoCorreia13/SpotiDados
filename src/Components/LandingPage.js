import React, { useState } from 'react'
import data from "../spotify_data.history.json"
import { LuClock3 } from "react-icons/lu";
import { TbAntennaBars5 } from "react-icons/tb";
import defaultUserPic from "../defaultImgs/Default.jpg"
import { BsThermometerSun, BsThermometerSnow } from "react-icons/bs";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { PiButterflyDuotone } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { ReactComponent as Logo } from '../defaultImgs/spotidados-logoB4F.svg';

import Top100 from './Top100';
import Artist from './Artist';


import default0 from "../defaultImgs/Default.jpg"
import default1 from "../defaultImgs/Default1.jpg"
import default2 from "../defaultImgs/Default2.jpg"
import default3 from "../defaultImgs/Default3.jpg"
import default4 from "../defaultImgs/Default4.jpg"
import default5 from "../defaultImgs/Default5.jpg"
const imgsArray = [default0, default1, default2, default3, default4, default5]
const data1 = data.filter((a) => a.master_metadata_track_name != null);


const LandingPage = () => {
    const [themeColor, setThemeColor] = useState("#2EBD59")
    const bgColor = "#181717"
    const textColor = "#575757"
    const textColor2 = "#6B726E"
    const [search, setSearch] = useState("")
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [artistName, setArtistName] = useState()
    function handleInputFocus() {
        setIsInputFocused(true);
    }

    function handleInputBlur() {
        setIsInputFocused(false);
    }
    
    

    function mudarIconEstacao(estacao){
        if (estacao === "Primavera"){
            return (
                <PiButterflyDuotone style={{ color: themeColor, fontSize: "35px", marginBottom: "3px" }} />
            )
        }
        if (estacao === "Verão"){
            return (
                <BsThermometerSun style={{ color: themeColor, fontSize: "35px", marginBottom: "3px" }} />
            )
        }
        if (estacao === "Outono"){
            return (
                <TiWeatherWindyCloudy style={{ color: themeColor, fontSize: "35px", marginBottom: "3px" }} />
            )
        }
        if (estacao === "Inverno"){
            return (
                <BsThermometerSnow style={{ color: themeColor, fontSize: "35px", marginBottom: "3px" }} />
            )
        }
    }

    const searchArtistas = todosArtistas().filter(a => a.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div style={{ fontFamily: "CircularSpotifyText-Medium" }} >
            {/* <h1>User:</h1> */}
            {/* <p>Estação do ano: {estacaoDoAno()}</p> */}
            {/* <p>Horas do dia que mais ouves: {horasDoDia()}</p> */}
            {/* <p>Total de músicas: {totalDeMusicas()}</p> */}
            {/* <p>Media diária: {mediaDiaria()} minutos</p> */}
            {/* <p>Tempo total: {tempoTotal()}</p> */}
            {/* <p>Total reproduções: {totalReproducoes()}</p> */}
            
            
            
            
            
            <div style={{ backgroundColor: bgColor }} className='w-[1000px] h-[600px] rounded-2xl'>
                
                
                {/* User Profile Pic */}
                <div className='h-[300px] flex justify-center'>
                    <div className='flex flex-col align-center w-[200px] ml-10 mt-10 mr-5'>
                        <img src={defaultUserPic} className='rounded-full size-36 p-4'/>
                    </div>
                     {artistName && <div className='absolute z-10'><Artist artist={artistName} setArtist={setArtistName} themeColor={themeColor}/></div>}

                    {artistName}    
                    <div className='flex flex-col w-[800px] align-center mt-5 mb-5 gap-4'>
                        {/* Search bar */}
                        <div className='ml-[75px] flex flex-col w-[180px] mb-4'>
                            <div className='relative bg-[#363636] rounded-full p-1 flex justify-between pr-[15px] pl-[15px] items-center w-[400px]'>
                                
                               
                                <input style={{ border: "none", outline: "none", backgroundColor: "transparent", fontSize: "14px" }} onFocus={handleInputFocus}
                                     type='search' value={search} onChange={(event) => setSearch(event.target.value)} placeholder="procura um artista" />
                                <div>
                                    <IoSearch style={{ color: themeColor, fontSize: "17px" }} /></div>
                                </div>
                                     {isInputFocused && (
                                         <ul className='absolute top-[90px]   bg-[#363636] rounded-md p-1 overflow-y-auto max-h-[140px] overflow-hidden mt-1 w-[395px] pl-4 pt-1' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                                             {searchArtistas.map((a, index) => (
                                                 <li key={index} className='flex gap-2'>
                                                     <img className="rounded-sm size-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a} />
                                                     <div onClick={() => {
                                                        handleInputBlur()
                                                        setArtistName(a)
                                                     }} className='cursor-pointer'><p>{a}</p></div>
                                                     
                                                 </li>
                                             ))}
                                         </ul>
                                     )}

                                </div>
                        




                        {/* boxes com Totais */}
                        <div className='flex gap-10'>
                            <div style={{ backgroundColor: textColor, boxShadow: "0px 2px 7px  rgba(0, 0, 0, 0.5)"}} className='w-40 h-24 rounded-md flex flex-col justify-center gap-2 '>
                                <p className='text-white text-center text-s font-light'>Reproduções Totais:</p>
                                <p className='text-white text-center text-xl '>{totalReproducoes()}</p>
                            </div>
                            <div style={{ backgroundColor: textColor, boxShadow: "0px 2px 7px  rgba(0, 0, 0, 0.5)"}} className='w-40 h-24 rounded-md flex flex-col justify-center gap-2 '>
                                <p className='text-white text-center text-s font-light'>Total de Músicas:</p>
                                <p className='text-white text-center text-xl '>{totalDeMusicas()}</p>
                            </div>
                            <div style={{ backgroundColor: textColor, boxShadow: "0px 2px 7px  rgba(0, 0, 0, 0.5)"}} className='w-40 h-24 rounded-md flex flex-col justify-center gap-2 '>
                                <p className='text-white text-center text-s font-light'>Tempo Total:</p>
                                <p className='text-white text-center text-xl '>+ {tempoTotal()}</p>
                            </div>
                        </div>
                        {/* Medias Resultados */}
                        <div className='flex gap-12'>
                            <div className='flex flex-col mt-2 '>
                                <p style={{ color: textColor2 }}>A tua média diária</p>
                                <div className='flex flex-row items-end'>
                                    <TbAntennaBars5 style={{ color: themeColor, fontSize: "50px" }}/>
                                    <p className='text-white text-xl mb-1'>{mediaDiaria()} minutos</p>
                                </div>
                            </div>
                            <div className='flex flex-col mt-2 gap-2 '>
                                <p style={{ color: textColor2 }}>A hora que mais ouves</p>
                                <div className='flex flex-row items-end gap-2'>
                                    <LuClock3 style={{ color: themeColor, fontSize: "37px", marginBottom: "3px" }}/>
                                    <p className='text-white text-xl mb-[1px]'>{horasDoDia()}:00h</p>
                                </div>
                            </div>
                            <div className='flex flex-col mt-2  gap-2'>
                                <p style={{ color: textColor2 , marginLeft: "-12px"}}>A estação que mais ouves</p>
                                <div className='flex flex-row items-end gap-2'>
                                    {mudarIconEstacao(estacaoDoAno())}
                                    <p className='text-white text-xl '>{estacaoDoAno()}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Logotipo */}                              
                    <div className='flex justify-center pr-10 pt-5' >
                        <Logo style={{ width: "150px", color: themeColor }} />
                    </div>
                </div>
                <div style={{ backgroundColor: themeColor }} className='h-[300px] rounded-2xl'>
                    <Top100 />
                </div>
            </div>
        </div>
    )
}

export default LandingPage



function todosArtistas() {
    const artistas = data1.map(a => a.master_metadata_album_artist_name);
    const semRepetidos = [...new Set(artistas)];
    return semRepetidos;
}


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
    const frase = `${totalHoras} horas`;
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
