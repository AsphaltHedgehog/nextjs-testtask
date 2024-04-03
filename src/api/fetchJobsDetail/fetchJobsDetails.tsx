import axios from 'axios';

export interface fetchJobsDetailProps {
  jobsId: string | string[];
}

const fetchJobsDetail = async ({ jobsId }: fetchJobsDetailProps) => {
  let jobsIdString

  try {
  if (!jobsId) {
    throw new Error;
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


    if (!options.params.job_id || options.params.job_id === '' || options.params.job_id.length === 0) {
      throw new Error;
    }

    const response = await axios.request(options);
    return response.data.data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchJobsDetail;