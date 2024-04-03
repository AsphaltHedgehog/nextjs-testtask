import React from 'react'

// components
import JobCard from "@/components/jobCard";
import { IJob } from '@/api/fetchJobsTitle';


export interface JobListProps {
  jobInfoArray: IJob[]
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

const JobList = ({ jobInfoArray, setFavoriteIds }: JobListProps) => {
  const listCreator = (jobInfoArray: IJob[]) => {

    const elements = jobInfoArray.map(jobInfo => (
      <li key={jobInfo.job_id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 px-2 h-72">
          <JobCard jobInfo={jobInfo} setFavoriteIds={setFavoriteIds} />
      </li>
    ))

    return elements;
  };
  
  return (
    <ul className="flex flex-wrap justify-center">
      {listCreator(jobInfoArray)}
    </ul>
  )
};

export default JobList;