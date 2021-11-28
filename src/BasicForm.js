//import { FormGroup } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';

  
  const formValidationSchema = yup.object({
      email:yup
      .string()
      .min(5,"Need a bigger email 😜")
      .required("Why not fill this email? 😠")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,"Pattern Not Match  🧐"),
      password:yup
      .string()
      .min(8,"Need a longer password 😜")
      .max(12,"Too much password 😂")
      .required("Why not fill this password? 😠"),
  });

  export function BasicForm(){
    const {handleSubmit, values, handleChange,handleBlur, errors, touched} = 
    useFormik({
        initialValues:{email:"", password:""},
        //validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit:(values) => {
            console.log("onSubmit",values);
        },
    });
    return(
        <form onSubmit={handleSubmit}>
        <input 
            id="email"
            name="email"
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            type="email" 
            placeholder="Enter your email"
        />
        {errors.email && 
        touched.email && 
        errors.email}
        <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password" 
            placeholder="Enter your password" 
        />
        {errors.password && 
        touched.password && 
        errors.password}
        <button type="submit">Submit</button>
    </form>
    );
  }


