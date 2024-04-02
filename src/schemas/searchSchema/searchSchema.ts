import * as Yup from 'yup';

const searchValidationSchema = Yup.object({
  search: Yup.string().min(8, "Too short search query").max(32, "Too long search query")
    .required('search query is required'),
});

export default searchValidationSchema;