import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name? 😠"),
  poster: yup.string().required("Why not fill this poster? 😠").min(4, "Need a bigger poster 😜"),
  rating: yup.number().required("Why not fill this rating? 😠").min(0, "Need a bigger rating 😜").max(10, "Too much rating 😂"),
  summary: yup.string().required("Why not fill this summary? 😠").min(20, "Need a bigger summary 😜"),
  trailer: yup.string().required("Why not fill this trailer? 😠").min(4, "Need a bigger trailer 😜"),
});

export function AddMovie() {
  const history = useHistory();


  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      //validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        addMovie(newMovie)
      },
    });

  const addMovie = (newMovie) => {

    console.log(newMovie);


    fetch(`https://619ba1512782760017445704.mockapi.io/movies/`,
      {
        method: "POST",
        body: JSON.stringify(AddMovie),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => history.push("/movies"));
  };



  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Name"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard" />

      <TextField
        id="poster"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster && errors.poster}
        label="Poster"
        variant="standard" />

      <TextField
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}
        label="Rating"
        variant="standard" />

      <TextField
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary && errors.summary}
        label="Summary"
        variant="standard" />

      <TextField
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
        label="Trailer"
        variant="standard" />

      <Button onClick={addMovie} variant="outlined">SAVE</Button>
    </form>

  );

}


