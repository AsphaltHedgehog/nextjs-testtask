import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'


// components
import { IJob } from '@/api/fetchJobsTitle'
import FavButton from '../favButton'
import { toast } from 'react-toastify'

export interface JobCardProps {
  jobInfo: IJob
  setFavoriteIds?: React.Dispatch<React.SetStateAction<string[]>>
}

const JobCard = ({ jobInfo, setFavoriteIds }: JobCardProps) => {
  const { job_title, job_city, job_state, job_description, job_max_salary, job_min_salary, job_is_remote, job_employment_type, employer_logo, job_id } = jobInfo
  
  return (
    <>
      {employer_logo &&
        // <Image src={employer_logo} alt='logo' width={24} height={24} />
        <img src={employer_logo} alt='logo' width={24} height={24}/>
      }
      <h3>{job_title}</h3>
      <div>
        <p>{job_city}</p>
        <p>{job_state}</p>
      </div>
      <p>{job_description}</p>
      {/* if have salary min max */}
      {job_max_salary && job_min_salary &&
        <p>{`Salary: ${job_max_salary} - ${job_min_salary}`}</p>
      }
      {/* if have salary max */}
      {job_max_salary && !job_min_salary &&
        <p>{`Max Salary: ${job_max_salary}`}</p>
      }
      {/* if have salary min */}
      {!job_max_salary && job_min_salary &&
        <p>{`Min Salary: ${job_min_salary}`}</p>
      }
      <p>Remote: { job_is_remote ? 'Yes' : 'No' }</p>
      <p>Employment type: {job_employment_type}</p>
      
      <FavButton jobId={job_id} setFavoriteIds={setFavoriteIds}>Like</FavButton>
      <Link onClick={() => toast.info('Job details loading...')} href={`/job-details/${job_id}`}> Job Details </Link>
    </>
  )
}

export default JobCard