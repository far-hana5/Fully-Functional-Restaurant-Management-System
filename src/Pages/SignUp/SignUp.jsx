import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
      const {
    register,
    handleSubmit,
    
    formState: { errors }  } = useForm();

    const onSubmit = (data) => console.log(data)
     

    return (
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
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        
         <label className="label">Name</label>
          <input type="text" {...register("Name", { required: true })} className="input" placeholder="Name" />
          {errors.Name && <span>This field is required</span>}
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register("password", { required: true,minLength:6, maxLength: 20 })} className="input" placeholder="Password" />
           {errors.password?.type === "required" && (<p>Password is required</p>)}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;