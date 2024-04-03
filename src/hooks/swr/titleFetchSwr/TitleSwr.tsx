import React from "react";
import useSWR from 'swr';
import fetchJobsTitle from "@/api/fetchJobsTitle/fetchJobsTitle";
import JobList from "@/components/jobList";

export interface JobsPageSWRProps {
  jobTitle: string;
}

const JobsPageSWR = ({ jobTitle }: JobsPageSWRProps) => {

  const { data, error, isLoading } = useSWR(`${jobTitle}`, fetchJobsTitle, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  });
  
  if (error) {
    return <div>Error</div>;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  };

  if (data && !isLoading && !error) {
    
    if (data.length === 0) {
      return <div>0 results</div>
    }

    return(
      <JobList jobInfoArray={ data } />
    )
  }
};


export default JobsPageSWR;