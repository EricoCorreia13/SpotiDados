import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaExpandAlt } from "react-icons/fa"
import data from "../spotify_data.history.json";
import default0 from "../defaultImgs/Default.jpg"
import default1 from "../defaultImgs/Default1.jpg"
import default2 from "../defaultImgs/Default2.jpg"
import default3 from "../defaultImgs/Default3.jpg"
import default4 from "../defaultImgs/Default4.jpg"
import default5 from "../defaultImgs/Default5.jpg"

const data1 = data.filter((a) => a.master_metadata_track_name != null);

const imgsArray = [default0, default1, default2, default3, default4, default5]


const Top100 = (props) => {

    const [timeRange, setTimeRange] = useState("total")
    const [filter, setfilter] = useState(false)
    const [filterTop, setfilterTop] = useState(false)
    const [expandido, setexpandido] = useState(false)
    const [top, setTop] = useState("musicas")

    function handleExpandido(){
        setexpandido(!expandido)
    }

    function handleFilter() {
        setfilter(!filter)
    }
    function handleFilterTop() {
        setfilterTop(!filterTop)
    }

    function handleTop(string){
        setTop(string)
    }



    function filtratopUmMes() {
        setTimeRange("1 mes")
    }
    function filtratopTresMeses() {
        setTimeRange("3 meses")
    }
    function filtratopTotal() {
        setTimeRange("total")
    }
    function filtratopSeisMeses() {
        setTimeRange("6 meses")
    }
    function filtratopUmAno() {
        setTimeRange("1 ano")
    }
    return (
        <div>
            {/* <div>
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
            </div> */}

            {!expandido && top === "musicas" && (
            <div>
                <div className='rounded-xl w-[355px] h-[210px] bg-black p-2 text-white '>
                    <div className='flex'>
                        <FaExpandAlt onClick={() => handleExpandido() } style={{ color: props.themeColor, cursor: "pointer" }}/>
                    <div className='flex ml-5 mb-1 mt-1 gap-20 items-center'>
                        <div className='flex gap-1 items-center'>
                                <p style={{ color: props.themeColor }}>O teu Top 100 Músicas</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                        </div>
                        <div className='relative flex justify-end'>
                            <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                            {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                            </div>)}
                        </div>
                    </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[140px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                            {top100musicas(timeRange).map((a, index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[250px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px]'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a} />
                                        <p className='text-xs text-center text-white'>{a.song}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right' style={{ color: props.themeColor }}>{a.listeningTimeInMinutes} mins</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>)}



            {/* Aqui e o grande */}
            {expandido && top === "musicas" && (
            <div className='text-white mt-[-300px] bg-zinc-900 opacity-95 w-[1000px] h-[600px] rounded-2xl flex justify-center items-center'>

                <div className='rounded-xl w-4/5 h-[500px] bg-black p-2 text-white '>
                    <div className='flex'>
                            <FaExpandAlt onClick={() => handleExpandido()} style={{ color: props.themeColor, cursor: "pointer" }} />
                        <div className='flex ml-5 mb-1 mt-1 gap-[490px] items-center'>
                                <div className='flex gap-1 items-center'>
                                    <p style={{ color: props.themeColor }}>O teu Top 100 Músicas</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                                </div>
                            <div className='relative flex justify-end'>
                                <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                                {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[440px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                            {top100musicas(timeRange).map((a, index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[650px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px] mt-3'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6 mt-2" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a} />
                                        <div className='flex gap-10 items-center'>
                                            
                                            <p className='text-s text-left text-white w-[150px] mt-3'>{a.song}</p>
                                            <p className='text-s text-left text-white w-[150px] mt-3'>by {a.artist}</p>
                                            <p className='text-s text-left text-white w-[150px] mt-3'>on {a.album}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right mt-3' style={{ color: props.themeColor }}>{a.listeningTimeInMinutes} mins</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                </div>)}
            {!expandido && top === "albums" && (
            <div>
                <div className='rounded-xl w-[355px] h-[210px] bg-black p-2 text-white '>
                    <div className='flex'>
                        <FaExpandAlt onClick={() => handleExpandido() } style={{ color: props.themeColor, cursor: "pointer" }}/>
                    <div className='flex ml-5 mb-1 mt-1 gap-20 items-center'>
                        <div className='flex gap-1 items-center'>
                                <p style={{ color: props.themeColor }}>O teu Top 100 Álbuns</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                        </div>
                        <div className='relative flex justify-end'>
                            <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                            {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                            </div>)}
                        </div>
                    </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[140px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                            {top100Albums(timeRange).map((a, index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[250px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px]'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a} />
                                        <p className='text-xs text-center text-white'>{a.album}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right' style={{ color: props.themeColor }}>{a.listeningTimeInMinutes} mins</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>)}



            {/* Aqui e o grande */}
            {expandido && top === "albums" && (
            <div className='text-white mt-[-300px] bg-zinc-900 opacity-95 w-[1000px] h-[600px] rounded-2xl flex justify-center items-center'>

                <div className='rounded-xl w-4/5 h-[500px] bg-black p-2 text-white '>
                    <div className='flex'>
                            <FaExpandAlt onClick={() => handleExpandido()} style={{ color: props.themeColor, cursor: "pointer" }} />
                        <div className='flex ml-5 mb-1 mt-1 gap-[490px] items-center'>
                                <div className='flex gap-1 items-center'>
                                    <p style={{ color: props.themeColor }}>O teu Top 100 Álbuns</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                                </div>
                            <div className='relative flex justify-end'>
                                <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                                {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[440px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                            {top100Albums(timeRange).map((a, index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[650px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px] mt-3'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6 mt-2" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={a.album} />
                                        <div className='flex gap-10 items-center'>
                                            
                                            <p className='text-s text-left text-white w-[150px] mt-3'>on {a.album}</p>
                                            <p className='text-s text-left text-white w-[150px] mt-3'>by {a.artist}</p>
                                            
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right mt-3' style={{ color: props.themeColor }}>{a.listeningTimeInMinutes} mins</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                </div>)}
            {!expandido && top === "artistas" && (
            <div>
                <div className='rounded-xl w-[355px] h-[210px] bg-black p-2 text-white '>
                    <div className='flex'>
                        <FaExpandAlt onClick={() => handleExpandido() } style={{ color: props.themeColor, cursor: "pointer" }}/>
                    <div className='flex ml-5 mb-1 mt-1 gap-20 items-center'>
                        <div className='flex gap-1 items-center'>
                                <p style={{ color: props.themeColor }}>O teu Top 100 Artistas</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                        </div>
                        <div className='relative flex justify-end'>
                            <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                            {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                            </div>)}
                        </div>
                    </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[140px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                                {top100Artistas(timeRange).map(([artist, playCount], index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[250px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px]'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={artist} />
                                        <p className='text-xs text-center text-white'>{artist}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right' style={{ color: props.themeColor }}>{playCount} plays</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>)}



            {/* Aqui e o grande */}
            {expandido && top === "artistas" && (
            <div className='text-white mt-[-300px] bg-zinc-900 opacity-95 w-[1000px] h-[600px] rounded-2xl flex justify-center items-center'>

                <div className='rounded-xl w-4/5 h-[500px] bg-black p-2 text-white '>
                    <div className='flex'>
                            <FaExpandAlt onClick={() => handleExpandido()} style={{ color: props.themeColor, cursor: "pointer" }} />
                        <div className='flex ml-5 mb-1 mt-1 gap-[490px] items-center'>
                            <div className='flex gap-1 items-center'>
                                <p style={{ color: props.themeColor }}>O teu Top 100 Artistas</p>
                                    <div className='relative flex justify-end'>
                                        <IoMdArrowDropdown onClick={() => handleFilterTop()} style={{ color: props.themeColor, cursor: "pointer" }} />
                                        {filterTop && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("musicas"), handleFilterTop())}>Musicas</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("albums"), handleFilterTop())}>Albums</p>
                                            <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (handleTop("artistas"), handleFilterTop())}>Artistas</p>
                                        </div>)}
                                    </div>
                        </div>
                            <div className='relative flex justify-end'>
                                <IoFilter onClick={() => handleFilter()} style={{ color: props.themeColor, fontSize: "25px", cursor: "pointer" }} />
                                {filter && (<div className='bg-zinc-900 rounded-md absolute text-right w-[55px] top-8 text-[10px]' style={{ fontFamily: "CircularSpotifyText-Light" }}>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTotal(), handleFilter())}>Total</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmMes(), handleFilter())}>1 mês</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopTresMeses(), handleFilter())}>3 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopSeisMeses(), handleFilter())}>6 meses</p>
                                    <p className='cursor-pointer rounded-sm pr-2 pt-[3px]' style={{ border: "0.5px solid black" }} onClick={() => (filtratopUmAno(), handleFilter())}>1 ano</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <ul className='rounded-md p-1 overflow-y-auto max-h-[440px] overflow-hidden mt-1   pt-1 border-solid' style={{ scrollbarWidth: "thin", scrollbarColor: "#202020 #101010" }}>
                                {top100Artistas(timeRange).map(([artist, playCount], index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex items-center gap-2 w-[650px]'>
                                        <p style={{ color: props.themeColor }} className='w-[10px] mt-3'>#{index + 1}</p>
                                        <img className="rounded-sm size-5 ml-6 mt-2" src={imgsArray[Math.floor(Math.random() * imgsArray.length)]} alt={artist} />
                                        <div className='flex gap-10 items-center'>
                                            
                                            <p className='text-s text-left text-white w-[150px] mt-3'>{artist}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='text-xs text-right mt-3' style={{ color: props.themeColor }}>{playCount} plays</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                </div>)}
        </div>
    );
}

export default Top100;





function top100musicas(timeRange) {
    const songListeningTime = {};
    let data2
    if (timeRange === "total") {
        data2 = data1
    }
    if (timeRange === "1 mes") {
        data2 = filterUltimoMes(data1)
    }
    if (timeRange === "3 meses") {
        data2 = filterUltimos3Meses(data1)
    }
    if (timeRange === "6 meses") {
        data2 = filterUltimos6Meses(data1)
    }
    if (timeRange === "1 ano") {
        data2 = filterUltimoAno(data1)
    }




    data2.forEach(item => {
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




function top100Albums(timeRange) {
    const albumListeningTime = {};

    let data2
    if (timeRange === "total") {
        data2 = data1
    }
    if (timeRange === "1 mes") {
        data2 = filterUltimoMes(data1)
    }
    if (timeRange === "3 meses") {
        data2 = filterUltimos3Meses(data1)
    }
    if (timeRange === "6 meses") {
        data2 = filterUltimos6Meses(data1)
    }
    if (timeRange === "1 ano") {
        data2 = filterUltimoAno(data1)
    }
    data2.forEach(item => {
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

function top100Artistas(timeRange) {
    const artistPlayCount = {};

    let data2
    if (timeRange === "total") {
        data2 = data1
    }
    if (timeRange === "1 mes") {
        data2 = filterUltimoMes(data1)
    }
    if (timeRange === "3 meses") {
        data2 = filterUltimos3Meses(data1)
    }
    if (timeRange === "6 meses") {
        data2 = filterUltimos6Meses(data1)
    }
    if (timeRange === "1 ano") {
        data2 = filterUltimoAno(data1)
    }
    data2.forEach(item => {
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


function filterUltimos6Meses(data) {
    const currentDate = new Date('2023-12-18T00:00:00Z');
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    return data.filter((item) => {
        const itemDate = new Date(item.ts);
        return itemDate >= sixMonthsAgo && itemDate <= currentDate;
    });
}

function filterUltimos3Meses(data) {
    const currentDate = new Date('2023-12-18T00:00:00Z');
    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    return data.filter((item) => {
        const itemDate = new Date(item.ts);
        return itemDate >= threeMonthsAgo && itemDate <= currentDate;
    });
}

function filterUltimoMes(data) {
    const currentDate = new Date('2023-12-18T00:00:00Z');
    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 1);

    return data.filter((item) => {
        const itemDate = new Date(item.ts);
        return itemDate >= threeMonthsAgo && itemDate <= currentDate;
    });
}

function filterUltimoAno(data) {
    const currentDate = new Date('2023-12-18T00:00:00Z');
    const oneYearAgo = new Date(currentDate);
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    return data.filter((item) => {
        const itemDate = new Date(item.ts);
        return itemDate >= oneYearAgo && itemDate <= currentDate;
    });
}