import * as Yup from 'yup';

const userValidationSchema = Yup.object({
  name: Yup.string().min(2, "Too short name").max(18, "Too long name")
    .required('Name is required'),
  job: Yup.string().min(5, "Too short desired job").max(18, "Too long desired job")
    .required('Desired Job Title is required'),
  aboutMe: Yup.string().min(150, "Too short summary").max(350, "Too long summary")
    .required('About me is required'),
});

export default userValidationSchema;