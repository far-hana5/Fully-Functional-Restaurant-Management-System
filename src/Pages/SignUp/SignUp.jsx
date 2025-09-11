import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit, reset, formState: { errors } } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(data.name)
          .then(() => {
            // console.log("profile info")
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log("User added to the database");
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })

          })
          .catch(error => console.log(error))
      })

  }


  return (
    <>
      <Helmet>
        <title>Bistro Boss|SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

              <label className="label">Name</label>
              <input type="text" {...register("Name", { required: true })} className="input" placeholder="Name" />
              {errors.Name && <span>This field is required</span>}
              <label className="label">Email</label>
              <input type="email" {...register("email")} className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="input" placeholder="Password" />
              {errors.password?.type === "required" && (<p>Password is required</p>)}
              <div><a className="link link-hover">Forgot password?</a></div>
              <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />


            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp;