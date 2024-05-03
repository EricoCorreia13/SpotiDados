import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { FaExpandAlt } from "react-icons/fa"
import { FaCirclePlay } from "react-icons/fa6";
import { HiArrowUpCircle } from "react-icons/hi2";
import { BsThermometerSun, BsThermometerSnow } from "react-icons/bs";
import { PiButterflyDuotone } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import data from "../spotify_data.history.json";
import defaultUserPic from "../defaultImgs/Default2.jpg"
import default0 from "../defaultImgs/Default.jpg"
import default1 from "../defaultImgs/Default1.jpg"
import default2 from "../defaultImgs/Default2.jpg"
import default3 from "../defaultImgs/Default3.jpg"
import default4 from "../defaultImgs/Default4.jpg"
import default5 from "../defaultImgs/Default5.jpg"
import toolIMG from "../defaultImgs/Tool.jpg"
import systemIMG from "../defaultImgs/SystemOfADown.jpg"
import kendrickIMG from "../defaultImgs/kendrick-lamar.jpg"


const data1 = data.filter((a) => a.master_metadata_track_name != null);

const imgsArray = [default0, default1, default2, default3, default4, default5]



const Artist = (props) => {
    
    const dataArtist = data1.filter(a => a.master_metadata_album_artist_name === props.artist)
    

    return (
        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ ease: [0.67, 0.67, 0.83, 0.80] }}>
                {/* <p>{props.artist} PROFILE:</p>
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
                <p>Estação do ano que mais ouves: {estacaoDoAno(dataArtist)}</p> */}
                <div onClick={() => props.setArtist(null)} className='text-white  bg-zinc-900 opacity-95 w-[1000px] h-[600px] rounded-2xl flex justify-center items-center'>

                    <div className='w-4/5 h-4/5 bg-black bg-opacity-100 rounded-2xl flex' text-white>
                        <div onClick={() => props.setArtist(null)} className='flex ml-5 mt-5 cursor-pointer'><FaExpandAlt style={{ color: props.themeColor , fontSize: "20px" }}/></div>
                        <div className="flex flex-col items-start ml-[40px] mt-[80px] gap-10 w-2/5"> 
                            <p className=' text-5xl'>{props.artist} </p>
                            <div>
                                <p className='text-left'>Total de Reproduções</p>
                                <p className='text-center text-xl'>{totalReproducoes(dataArtist)}</p>
                            </div>
                            <div>
                                <p>Total de Músicas</p>
                                <p className='text-center text-xl'>{totalDeMusicas(dataArtist)}</p>
                            </div>
                            <div>
                                <p>Tempo de Reprodução</p>
                                <p className='text-center text-xl'>{tempoTotal(dataArtist)}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-[10px]">
                            <div className='flex flex-col align-center mt-8 mr-5'>
                                <div className='relative'>
                                    {props.artist === "TOOL" ? (<img src={toolIMG} className=' rounded-full size-32 p-4'/>) : 
                                    props.artist === "System Of A Down" ? (<img src={systemIMG} className=' rounded-full size-32 p-4'/>) :
                                    props.artist === "Kendrick Lamar" ? (<img src={kendrickIMG} className=' rounded-full size-32 p-4'/>) :
                                    (<img src={defaultUserPic} className=' rounded-full size-32 p-4'/>)
                                    }

                                    <FaCirclePlay className='absolute left-20 top-20' style={{ color: props.themeColor , fontSize: "30px" }}/>
                                </div>
                                
                            </div>
                            <div className='flex flex-col items-start gap-4 mt-[10px]'>
                                    <p className='text-2xl'>{percentagemDoTotal(data1, dataArtist)}% das tuas reproduções</p>
                                    <p className='text-l'>Ouviste mais quando era  {estacaoDoAno(dataArtist)}</p>
                            </div>
                            <div className='rounded-xl w-[355px] h-[200px] bg-zinc-800 p-2'>
                                <div className='ml-5 mb-1 mt-1'>
                                    <p style={{ color: props.themeColor }}>As 20 melhores...</p>
                                </div>
                                <div className='mt-3'>
                                <ul className='rounded-md p-1 overflow-y-auto max-h-[140px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                                             {top20musicas(dataArtist).map((a, index) => (
                                                 <li key={index} className='flex items-center'>
                                                    <div className='flex items-center gap-2 w-[250px]'>
                                                    <p style={{ color: props.themeColor }} className='w-[10px]'>#{index + 1}</p>
                                                     <img className="rounded-sm size-5 ml-5" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a} />
                                                     <p className='text-xs text-center'>{a.song}</p>
                                                     </div>
                                                     <div className=''>
                                                     <p className='text-xs text-right' style={{ color: props.themeColor }}>{a.listeningTimeInMinutes} mins</p>
                                                    </div>
                                                 </li>
                                             ))}
                                         </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
        </motion.div>
    );
}

export default Artist




  


export const Top1 = (props) => {

    const [expandido, setExpandido] = useState(false)
    const dataArtist = data1.filter(a => a.master_metadata_album_artist_name === props.artist)
    function handleExpandido(){
        setExpandido(!expandido)
    }

    return (
        <div>
            {expandido && (
            <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='h-[300px] w-[160px] bg-gradient-to-b flex flex-col gap-4 ' style={{ background: 'linear-gradient(to bottom, #111111 20%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0))' }}>
                <div>
                <motion.div initial={{ opacity: 0, translateY: 200}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-2'/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 mt-3 text-xs'>
                    <p>{totalReproducoes(dataArtist)} plays</p>
                    <BsGraphUpArrow  style={{ color: "black" , fontSize: "20px" }}/>
                    <p>{percentagemDoTotal(data1, dataArtist)}%</p>
                    <BsThermometerSnow  style={{ color: "black" , fontSize: "20px"}} className='hover: text-white' />
                    <p>Mais ouvido no {estacaoDoAno(dataArtist)}</p>
            </div>
            </motion.div>)}
            {!expandido && (
            <div className='h-[300px] w-[160px]  flex flex-col gap-4' >
                <div>
                <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <p onClick={() => props.setArtistName("TOOL")} className='absolute text-2xl top-12 cursor-pointer'>TOOL</p>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-[100px]'/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-[220px] cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
            </div>)}

            
        </div>
    )
  };

export const Top2 = (props) => {

    const [expandido, setExpandido] = useState(false)
    const dataArtist = data1.filter(a => a.master_metadata_album_artist_name === props.artist)
    function handleExpandido(){
        setExpandido(!expandido)
    }

    return (
        <div>
            {expandido && (
            <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='h-[300px] w-[160px] bg-gradient-to-b flex flex-col gap-4' style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 10%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0))' }}>
                <div>
                <motion.div initial={{ opacity: 0, translateY: 200}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-2'/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 mt-3 text-xs'>
                    <p>{totalReproducoes(dataArtist)} plays</p>
                    <BsGraphUpArrow  style={{ color: "black" , fontSize: "20px"}} />
                    <p>{percentagemDoTotal(data1, dataArtist)}%</p>
                    <PiButterflyDuotone  style={{ color: "black" , fontSize: "20px"}}/>
                    <p>Mais ouvido no {estacaoDoAno(dataArtist)}</p>
            </div>
            </motion.div>)}
            {!expandido && (
            <div className='h-[300px] w-[160px]  flex flex-col gap-4' >
                <div>
                <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <p onClick={() => props.setArtistName("System Of A Down")} className='absolute text-2xl top-8 text-center cursor-pointer'>System Of A Down</p>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-[100px] '/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-[220px] cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
            </div>)}

            
        </div>
    )
  };


  export const Top3 = (props) => {

    const [expandido, setExpandido] = useState(false)
    const dataArtist = data1.filter(a => a.master_metadata_album_artist_name === props.artist)
    function handleExpandido(){
        setExpandido(!expandido)
    }

    return (
        <div>
            {expandido && (
            <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='h-[300px] w-[160px] bg-gradient-to-b flex flex-col gap-4' style={{ background: 'linear-gradient(to bottom, #111111 20%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0))' }}>
                <div>
                <motion.div initial={{ opacity: 0, translateY: 200}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-2'/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 mt-3 text-xs'>
                    <p>{totalReproducoes(dataArtist)} plays</p>
                    <BsGraphUpArrow  style={{ color: "black" , fontSize: "20px"}} />
                    <p>{percentagemDoTotal(data1, dataArtist)}%</p>
                    <BsThermometerSun  style={{ color: "black" , fontSize: "20px"}}/>
                    <p>Mais ouvido no {estacaoDoAno(dataArtist)}</p>
            </div>
            </motion.div>)}
            {!expandido && (
            <div className='h-[300px] w-[160px]  flex flex-col gap-4' >
                <div>
                <motion.div initial={{ opacity: 0, translateY: -100}} animate={{ opacity: 1, translateY: 0 }} transition={{ ease: [0.17, 0.67, 0.83, 0.67] }} className='relative flex justify-center'>
                    <p onClick={() => props.setArtistName("Kendrick Lamar")} className='absolute text-2xl top-8 text-center cursor-pointer'>Kendrick Lamar</p>
                    <img src={props.img} className=' rounded-full size-32 p-4 mt-[100px] '/>
                    {expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-32 cursor-pointer' style={{ transform: "rotate(180deg)", color: "black" , fontSize: "30px"}}/>)}
                    {!expandido && (<HiArrowUpCircle onClick={() => handleExpandido()} className='absolute top-[220px] cursor-pointer' style={{ color: "black" , fontSize: "30px"}}/>)}
                    </motion.div>
                </div>
            </div>)}

            
        </div>
    )
  };



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
    const frase = `${totalHoras} hours e ${totalMinutos} minutes`;
    return frase
}