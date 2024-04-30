import React from 'react'
import data from "../spotify_data.history.json"

const UserDifferentSongs = () => {
  const data1 = data.filter((a) => a.master_metadata_track_name != null);
    const filteredData = data1.map(a => a = a.master_metadata_track_name)
    const numberOfSongs = [...new Set(filteredData)].length
  return (
    <div>
      <p>Total de músicas: {numberOfSongs}</p>
    </div>
  )
}

export default UserDifferentSongs
