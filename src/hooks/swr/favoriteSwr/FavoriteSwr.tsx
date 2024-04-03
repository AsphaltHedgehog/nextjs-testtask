import React from "react";
import useSWR from 'swr';

// components
import fetchJobsDetail from "@/api/fetchJobsDetail";
import JobList from "@/components/jobList";



export interface JobsPageSWRProps {
  favoriteIds: string | string[];
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

const FavoritePageSWR = ({ favoriteIds, setFavoriteIds }: JobsPageSWRProps) => {
  const { data, error, isLoading } = useSWR({jobsId: favoriteIds}, fetchJobsDetail, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  });

  if (error) {
    if (favoriteIds.length < 1) {
      return <div>Subscribe to some jobs first</div>
    }
    return <div>Error</div>;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  };

  if (data && !isLoading && !error) {
    return(
      <JobList jobInfoArray={data}setFavoriteIds={setFavoriteIds}/>
    )
  }
};


export default FavoritePageSWR;