import React from "react";
import axios from 'axios';
import { IJob } from "@/components/fetchJobs";

export interface fetchJobsDetailProps {
  jobTitle: string;
  setJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
}

const fetchJobsTitle = async ({ jobTitle, setJobs }: fetchJobsDetailProps) => {

  console.log(jobTitle);
  

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    page: '1',
    num_pages: '1',
    // job_titles: TODO: 
  },
  headers: {
    'X-RapidAPI-Key': 'f63cf3ec6emsh3d725b5c79a169bp1dd2fcjsn36ea03d0676c',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
  };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

  try {
    // if (!options.params.job_id || options.params.job_id === '' || options.params.job_id.length === 0) {
    //   return []
    // }

    // const response = await axios.request(options);
  
  
    // setJobs(response.data.data)
  } catch (error) {
    console.error(error);
  }
};

export default fetchJobsTitle;