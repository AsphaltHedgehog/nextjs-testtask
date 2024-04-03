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
  const { job_title, job_city, job_state, job_description, job_max_salary, job_min_salary, job_is_remote, job_employment_type, job_id } = jobInfo
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{job_title}</h3>
        <div className="mb-2">
          <p>{job_city}</p>
          <p>{job_state}</p>
        </div>
        <p className="text-sm text-gray-600 mb-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>{job_description}</p>
        {/* if have salary min max */}
        {job_max_salary && job_min_salary &&
          <p className="text-gray-800 mb-2">{`Salary: ${job_max_salary} - ${job_min_salary}`}</p>
        }
        {/* if have salary max */}
        {job_max_salary && !job_min_salary &&
          <p className="text-gray-800 mb-2">{`Max Salary: ${job_max_salary}`}</p>
        }
        {/* if have salary min */}
        {!job_max_salary && job_min_salary &&
          <p className="text-gray-800 mb-2">{`Min Salary: ${job_min_salary}`}</p>
        }
        <p className="text-gray-800 mb-2">Remote: {job_is_remote ? 'Yes' : 'No'}</p>
        <p className="text-sm text-gray-600 mb-2 normal-case">Employment type: {job_employment_type}</p>
      </div>
      <div className="mt-auto">
        <FavButton jobId={job_id} setFavoriteIds={setFavoriteIds}>Like</FavButton>
        <Link onClick={() => toast.info('Job details loading...')} href={`/job-details/${job_id}`}> Job Details </Link>
      </div>
    </div>
  )
}

export default JobCard