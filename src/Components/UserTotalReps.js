import React from 'react'
import data from "../spotify_data.history.json"

const UserTotalReps = () => {
    const data1 = data.filter((a) => a.master_metadata_track_name != null);
    const filteredData = data1.map(a => a = a.master_metadata_track_name)
    const numberOfReps = filteredData.length
  return (
    <div>
      <p>Total de reproduções: {numberOfReps}</p>
    </div>
  )
}

export default UserTotalReps
