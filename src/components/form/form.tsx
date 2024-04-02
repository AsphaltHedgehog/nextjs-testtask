import React from "react";
import { ErrorMessage, Field, Form } from "formik";



const UserForm = () => {
  <Form>
    <div>
      <label>Name:</label>
      <Field type='text' name='name'></Field>
      <ErrorMessage name="name" component='div'/>
    </div>
    <div>
      <label>Desired Job Title:</label>
      <Field type='text' name='job'></Field>
      <ErrorMessage name="job" component='div'/>
    </div>
    <div>
      <label>About me:</label>
      <Field as="textarea" name='aboutMe' rows="5" cols="55"></Field>
      <ErrorMessage name="aboutMe" component='div'/>
    </div>
  <button type="submit">Submit</button>
  </Form>
}


export default UserForm;