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
      <div className="section">
        <h2 className="text-2xl font-bold mb-4">Releases</h2>
        <ReleasesTable rows={rows} />
      </div>
    </>
  )
}
