'use client'

import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

// schema
import userValidationSchema from "@/schemas/userSchema";
import { toast } from "react-toastify";

export interface IUserFormValues {
  name: string;
  job: string;
  aboutMe: string;
};

const getUserinfo = () => {
  let initialValues = {
    name: '',
    job: '',
    aboutMe: '',
  };
  
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    if (user) {
      initialValues = JSON.parse(user)
    }
    
  }

  return initialValues;
};


const UserForm = () => {

  const headleSubmit = (values: IUserFormValues) => {
    const user = localStorage.getItem('user');

    if (user) {
      toast.success("User info updated");
    } else {
      toast.success('User successfully created ');
    }
    
    localStorage.setItem('user', JSON.stringify(values));
  }

  return (
    <Formik
      initialValues={getUserinfo()}
      onSubmit={headleSubmit}
      validationSchema={userValidationSchema}
    >
      <Form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <Field
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
        </div>
        <div className="mb-4">
          <label htmlFor="job" className="block text-gray-700 text-sm font-bold mb-2">
            Desired Job Title:
          </label>
          <Field
            type="text"
            name="job"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage name="job" component="div" className="text-red-500 text-xs italic" />
        </div>
        <div className="mb-6">
          <label htmlFor="aboutMe" className="block text-gray-700 text-sm font-bold mb-2">
            About me:
          </label>
          <Field
            as="textarea"
            name="aboutMe"
            rows={5}
            cols={55}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage name="aboutMe" component="div" className="text-red-500 text-xs italic" />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  )
};


export default UserForm;