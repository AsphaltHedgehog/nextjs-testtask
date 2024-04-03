'use client'

import React, { useEffect, useState } from "react";

// components
import { IUserFormValues } from "@/components/userForm";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";


// schema
import searchValidationSchema from "@/schemas/searchSchema";
import JobsPageSWR from "@/hooks/swr/titleFetchSwr";



export default function JobsPage() {
  const [title, setTitle] = useState<string>('');
  const [isTitleSet, setIsTitleSet] = useState<boolean>(false);

  const userString = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  
  const user: IUserFormValues | null = userString ? JSON.parse(userString) : null;

  const initialValues = {
  search: user? user.job : '' ,
  };

    useEffect(() => {
    if (user && user.job && !isTitleSet) {
      setTitle(user.job);
      setIsTitleSet(true);
    }
    }, [user, isTitleSet]);
  
  
  const handleSubmit = (values: { search: string }, formikHelpers: FormikHelpers<{ search: string }>) => {
    setTitle(values.search)
  };
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Find your job</h2>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Filter</h2>
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={searchValidationSchema}>
          <Form className="flex items-center">
            <label className="mr-4">
              Search:
              <Field type="text" name="search" className="ml-2 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500" />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600">Submit</button>
            <ErrorMessage name="search" component="div" className="text-red-500 ml-2" />
          </Form>
        </Formik>
      </section>
      <section>
        <JobsPageSWR jobTitle={title} />
      </section>
    </main>
  );
};