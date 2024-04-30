import React from 'react'
import data from "../spotify_data.history.json"

const UserTotalPlayTime = () => {
  const data1 = data.filter((a) => a.master_metadata_track_name != null);
  const totalPlaybackTime = data1.reduce((total, item) => total + item.ms_played, 0);

// Convert total milliseconds to hours, minutes, and seconds
  const totalHours = Math.floor(totalPlaybackTime / (1000 * 60 * 60));
  const remainingTime = totalPlaybackTime % (1000 * 60 * 60);
  const totalMinutes = Math.floor(remainingTime / (1000 * 60));
  const totalSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  const frase = `${totalHours} hours, ${totalMinutes} minutes, and ${totalSeconds} seconds`;
    return (
      <div>
          <p>Tempo Total: {frase} </p>
      </div>
      )
}

export default UserTotalPlayTime
