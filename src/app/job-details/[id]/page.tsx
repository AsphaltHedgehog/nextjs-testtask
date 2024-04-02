'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// components
import { IJob } from '@/api/fetchJobsTitle';
import FavButton from '@/components/favButton';

// api
import fetchJobsDetail from '@/api/fetchJobsDetail';

interface JobDetailsPageProps {
  params: { id: string; }
}


const JobDetailsPage = ({ params }: JobDetailsPageProps) => {
  const [jobDetail, setJobDetail] = useState<IJob[]>([]);
  
  useEffect(() => {
    fetchJobsDetail({ jobsId: decodeURIComponent(params.id), setJobs: setJobDetail });
  }, [params.id]);
  

  if (jobDetail.length === 0) {
    return <p>Loading</p>;
  }

  const { job_title, job_city, job_state, job_description, job_max_salary, job_min_salary, job_is_remote, job_employment_type, employer_logo, job_id } = jobDetail[0];

  return (
    <main>
      <div>
        {employer_logo && <Image src={employer_logo} alt='logo' width={124} height={124} />}
        <h3>{job_title}</h3>
        <div>
          <p>{job_city}</p>
          <p>{job_state}</p>
        </div>
        <p>{job_description}</p>

        {/* If there is salary min and max */}
        {job_max_salary && job_min_salary &&
          <p>{`Salary: ${job_max_salary} - ${job_min_salary}`}</p>
        }
        {/* If there is only salary max */}
        {job_max_salary && !job_min_salary &&
          <p>{`Max Salary: ${job_max_salary}`}</p>
        }
        {/* If there is only salary min */}
        {!job_max_salary && job_min_salary &&
          <p>{`Min Salary: ${job_min_salary}`}</p>
        }
        <p>Remote: {job_is_remote ? 'Yes' : 'No'}</p>
        <p>Employment type: {job_employment_type}</p>
      
        <FavButton jobId={job_id}>Like</FavButton>
      </div>
    </main>
  );
};



export default JobDetailsPage