import React from "react";
import useSWR from 'swr';

// components
import fetchJobsDetail from "@/api/fetchJobsDetail";
import FavButton from "@/components/favButton";

export interface JobsPageSWRProps {
  jobsId: string | string[];
}

const DetailPageSWR = ({ jobsId,
  // setFavoriteIds
}: JobsPageSWRProps) => {

  const { data, error, isLoading } = useSWR({ jobsId }, fetchJobsDetail, {
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
    const { job_title, job_city, job_state, job_description, job_max_salary, job_min_salary, job_is_remote, job_employment_type, employer_logo, job_id } = data[0];


    return (
      <main>
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
          {employer_logo && (
            <img
              src={employer_logo}
              alt="logo"
              className="w-24 h-24 mx-auto mb-4"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">{job_title}</h3>
          <div className="mb-2">
            <p>{job_city}</p>
            <p>{job_state}</p>
          </div>
          <p className="text-sm text-gray-700 mb-4">{job_description}</p>

          {/* If there is salary min and max */}
          {job_max_salary && job_min_salary && (
            <p className="text-gray-800 mb-2">{`Salary: ${job_max_salary} - ${job_min_salary}`}</p>
          )}
          {/* If there is only salary max */}
          {job_max_salary && !job_min_salary && (
            <p className="text-gray-800 mb-2">{`Max Salary: ${job_max_salary}`}</p>
          )}
          {/* If there is only salary min */}
          {!job_max_salary && job_min_salary && (
            <p className="text-gray-800 mb-2">{`Min Salary: ${job_min_salary}`}</p>
          )}
          <p className="text-gray-800 mb-2">
            Remote: {job_is_remote ? "Yes" : "No"}
          </p>
          <p className="text-gray-800 mb-2">
            Employment type: {job_employment_type}
          </p>

          <FavButton jobId={job_id}>Like</FavButton>
        </div>
      </main>
    );
  }
};


export default DetailPageSWR;