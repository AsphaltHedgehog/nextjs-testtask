import React from "react";
import axios from 'axios';
import { IJob } from "../fetchJobsTitle";

export interface fetchJobsDetailProps {
  jobsId: string | string[];
  setJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
}

const fetchJobsDetail = async ({ jobsId, setJobs }: fetchJobsDetailProps) => {
  let jobsIdString

  if (!jobsId) {
    return;
  }

  if (Array.isArray(jobsId)) {
    jobsIdString = await jobsId.join(',')
  } else {
    jobsIdString = await jobsId;
  }

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/job-details',
    params: {
      job_id: jobsIdString,
      extended_publisher_details: 'true'
    },
    headers: {
      'X-RapidAPI-Key': `${process.env.apiKey}`,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    if (!options.params.job_id || options.params.job_id === '' || options.params.job_id.length === 0) {
      return []
    }

    const response = await axios.request(options);
  
  
    setJobs(response.data.data)
  } catch (error) {
    console.error(error);
  }
};

export default fetchJobsDetail;