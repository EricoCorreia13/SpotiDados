import React from 'react';
import data from "../spotify_data.history.json";

const UserMediaDiaria = () => {

    const data1 = data.filter((a) => a.master_metadata_track_name != null);
    const naopuladas = data1.filter (a => a.reason_end === "trackdone")
    const totalPlaybackTime = naopuladas.reduce((total, item) => total + item.ms_played, 0);
    const mediaDiaria = Math.floor(totalPlaybackTime / 1203 / (1000 * 60)) 
  
  

  return (
    <div>
      <p>Media diária: {mediaDiaria} minutos.</p>
    </div>
  );
};

export default UserMediaDiaria;