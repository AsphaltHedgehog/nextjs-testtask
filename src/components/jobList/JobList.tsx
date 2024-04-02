import React from 'react'

// components
import JobCard from "@/components/jobCard";

// interface
import { IJob } from '../fetchJobs'

export interface JobListProps {
  jobInfoArray: IJob[]
}

const JobList = ({ jobInfoArray }: JobListProps) => {
  const listCreator = (jobInfoArray: IJob[]) => {

    if (jobInfoArray.length < 1) {
      return;
    };

    // TODO: add navigation
    const elements = jobInfoArray.map(jobInfo => (
      <li key={jobInfo.job_id} onClick={() => console.log(1)}>
        <JobCard jobInfo={jobInfo} />
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