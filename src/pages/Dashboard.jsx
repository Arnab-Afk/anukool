import React from 'react'
import StatsCard from '../components/ui/StatsCard.jsx'
import CandidatesTable from '../components/CandidatesTable.jsx'

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-28 pl-40 pr-40 pt-10 ">
        <StatsCard />
        <CandidatesTable />
      </div>
    </div>

  )
}

export default Dashboard
