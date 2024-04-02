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
      <Form>
        <div>
          <label>Name:</label>
          <Field type='text' name='name'></Field>
          <ErrorMessage name="name" component='div' />
        </div>
        <div>
          <label>Desired Job Title:</label>
          <Field type='text' name='job'></Field>
          <ErrorMessage name="job" component='div' />
        </div>
        <div>
          <label>About me:</label>
          <Field as="textarea" name='aboutMe' rows="5" cols="55"></Field>
          <ErrorMessage name="aboutMe" component='div' />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
};


export default UserForm;