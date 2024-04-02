'use client'

import React, { useEffect, useState } from "react";

// components
import fetchJobs, { IJob } from "@/components/fetchJobs";
import JobCard from "@/components/jobCard";

export default function Home() {
  const [jobs, setJobs] = useState<IJob[]>([])
  
  useEffect(() => {
    if (jobs.length < 1) {
      fetchJobs({setJobs});
    }
  }, [jobs.length])
  


  return (
    <main>
      <section>
        <h1>Find your Dream Job</h1>
        <div>Filter</div>
        {jobs.length > 0 ?
          <div>Jobs: <JobCard jobInfo={jobs[1]} /> </div> :
          <p>Loading...</p>
        }
      </section>
    </main>
  );
}
