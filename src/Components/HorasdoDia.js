import React from 'react'
import data from "../spotify_data.history.json";


const HorasdoDia = () => {
    const data1 = data.filter((a) => a.master_metadata_track_name != null);
    const mapaTS = data1.reduce((mapa, a) => {
        let hours = new Date(a.ts).getHours()
         mapa[hours] = (mapa[hours] ?? 0) + 1
         return mapa
    }, {})
    const maxFrequency = Math.max(...Object.values(mapaTS));
    const mostFrequentKey = Object.keys(mapaTS).find(key => mapaTS[key] === maxFrequency);
  return (
    <div>
      <p>Most Frequent Listening Hours: {mostFrequentKey}</p>
    </div>
  )
}

export default HorasdoDia
