'use client'

import React, { useEffect, useState } from "react";

// api
import fetchJobsDetail from "@/api/fetchJobsDetail";

// components
import { IJob } from "@/components/fetchJobs";
import JobList from "@/components/jobList";

export default function LikedPage() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  
  useEffect(() => {
    const storedJobs = localStorage.getItem("data");
    if (!storedJobs || storedJobs.length < 1) {
      return
    };
      
    setFavoriteIds(JSON.parse(storedJobs));
  }, [])

  useEffect(() => {
    fetchJobsDetail({ jobsId: favoriteIds, setJobs })
  }, [favoriteIds]);

  return (
    <main>
      <h2>Liked Jobs</h2>
      <section>
        <> <JobList jobInfoArray={jobs} setFavoriteIds={ setFavoriteIds  } /> </>
      </section>
    </main>
  )
}