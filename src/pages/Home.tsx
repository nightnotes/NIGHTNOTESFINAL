import React from 'react'
import Navbar from '../components/Navbar'
import ReleasesTable from '../components/ReleasesTable'
import { useEffect, useState } from 'react'
import { getReleaseSchedule } from '../utils/releaseState'
import type { ReleaseRow } from '../utils/schedule'

export default function Home() {
  const [rows, setRows] = useState<ReleaseRow[]>([]);
  useEffect(() => { getReleaseSchedule().then(setRows) }, [])
  return (
    <>
      <Navbar />
      {/* DEBUG HUD */}
      <div style={{position:'fixed',top:8,left:8,zIndex:9999,background:'rgba(0,0,0,.55)',padding:'6px 10px',borderRadius:12,fontSize:12}}>
        <div>boot: home</div>
        <div>rows: {rows?.length ?? 0}</div>
      </div>
      <div className="section">
        <h2 className="text-2xl font-bold mb-4">Releases</h2>
        <ReleasesTable rows={rows} />
      </div>
    </>
  )
}
