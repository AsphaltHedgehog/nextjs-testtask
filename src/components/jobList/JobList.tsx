import React from 'react'

// components
import JobCard from "@/components/jobCard";

// interface
import { IJob } from '../fetchJobs'
import { toast } from 'react-toastify';

export interface JobListProps {
  jobInfoArray: IJob[]
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

const JobList = ({ jobInfoArray, setFavoriteIds }: JobListProps) => {
  const listCreator = (jobInfoArray: IJob[]) => {

    if (jobInfoArray.length < 1) {
      toast.error("Internal app error")
      return;
    };

    // TODO: add navigation
    const elements = jobInfoArray.map(jobInfo => (
      <li key={jobInfo.job_id} onClick={() => console.log(1)}>
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