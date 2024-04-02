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
      <li key={jobInfo.job_id}>
        <JobCard jobInfo={jobInfo} setFavoriteIds={ setFavoriteIds }/>
      </li>
    ))

    return elements;
  };
  
  return (
    <ul>
      {listCreator(jobInfoArray)}
    </ul>
  )
};

export default JobList;