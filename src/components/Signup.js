import {React,useContext} from 'react';
import { useFormik } from 'formik';
import UserContext from '../Utils/UserContext';
import { useNavigate } from "react-router-dom";


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted

  const {setUser}=useContext(UserContext);
   const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setUser({name:values.firstName,email:values.email,
      });
      navigate("/");
      formik.resetForm();
      
    },
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit} className="flex flex-col items-center " >
      <div className="container-signup border border-black h-auto w-80 my-24 bg-gray-800 rounded-lg">
        <div className="signup-box p-4 space-y-2 space-x-4">
          <h1 className="text-white p-2 font-medium">Create your account</h1>
        <label htmlFor="firstName" className="block text-white">First Name</label>
        <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className="form-input block border border-gray-300"
        />
      {formik.touched.firstName && formik.errors.firstName ? <div className="text-red-600">{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName" className="block pt-4 text-white">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        className="form-input block border border-gray-300"
      />
      {formik.touched.lastName && formik.errors.lastName ? <div className=" text-red-600">{formik.errors.lastName}</div> : null}

      <label htmlFor="email" className="block pt-4 text-white">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="form-input block border border-gray-300"
      />
      {formik.touched.email && formik.errors.email ? <div className="text-red-600" >{formik.errors.email}</div> : null}
      <div className="pt-4 pl-16">
       <button type="submit" className=" form-button  block bg-blue-600 hover:bg-blue-900 text-white font-medium  py-1 px-5 border rounded" >Submit</button>
      </div>
       </div>
      </div> 
    </form>
  );
};

export default SignupForm;