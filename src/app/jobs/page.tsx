'use client'

import React, { useEffect, useState } from "react";

// components
import fetchJobsTitle, { IJob } from "@/api/fetchJobsTitle";
import JobList from "@/components/jobList";
import { IUserFormValues } from "@/components/form";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";


// schema
import searchValidationSchema from "@/schemas/searchSchema";



export default function JobsPage() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  let count = 0

  const userString = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  
  const user: IUserFormValues | null = userString ? JSON.parse(userString) : null;

  const initialValues = {
  search: user? user.job : '' ,
};

  useEffect(() => {
    if (jobs.length < 1 && user && count === 0) {
      count = 1;
      fetchJobsTitle({ jobTitle: user.job, setJobs });
    }

    
  }, [jobs.length, user])

  const handleSubmit = (values: { search: string }, formikHelpers: FormikHelpers<{ search: string }>) => {
    fetchJobsTitle({ jobTitle: values.search, setJobs });
  };

  return (
    <main>
      <>
        <h2>Find your Dream Job</h2>
        <section>
          <h2>Filter</h2>
          <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={searchValidationSchema}>
            <Form>
              <label>Search
                <Field type='text' name='search'></Field>
              </label>
              <ErrorMessage name="search" component='div' />
              <button type='submit'>Submit</button>
            </Form>
          </Formik>
        </section>

      
          <section>
          {jobs.length > 0 ? <><h2>Jobs:</h2> <JobList jobInfoArray={ jobs } /> </> : <p>Loading...</p>}
          </section>
        
      </>
    </main>
  );
};