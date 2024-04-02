import React from "react";
import axios from 'axios';
import { IJob } from "@/components/fetchJobs";

export interface fetchJobsDetailProps {
  jobsId: string | string[];
  setJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
}

const fetchJobsDetail = async ({ jobsId, setJobs }: fetchJobsDetailProps) => {

  if (!jobsId) {
    return;
  }
  
  const jobsIdString = Array.isArray(jobsId) ? jobsId.join(' , ') : jobsId

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/job-details',
  params: {
    job_id: jobsIdString,
    extended_publisher_details: 'true'
  },
  headers: {
    'X-RapidAPI-Key': 'f63cf3ec6emsh3d725b5c79a169bp1dd2fcjsn36ea03d0676c',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  
  setJobs(response.data.data)
} catch (error) {
	console.error(error);
}
}

export default fetchJobsDetail;