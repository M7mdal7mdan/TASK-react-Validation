import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "./Validation"
import { useForm } from "react-hook-form";

function RegistraionForm() {
    const{
     register,
     handleSubmit,
     formState:{errors},

    } =useForm({resolver: yupResolver(schema)});
    const onSubmit = (data) =>{
        console.log(data);
    }
    
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit (onSubmit)}>
          <label for="firstname">First name</label>
          <input type="text" placeholder="Mohammad" 
          {...register("firstname")}/>
          <p className="error">{errors.firstname?.message}</p>
  
          <label for="lastname">Last name</label>
          <input type="text" placeholder="AL-Hamdan"
           {...register("lastname")} />
           <p className="error">{errors.lastname?.message}</p>
  
          <label for="phonenumber">Phone number</label>
          <input type="text" placeholder="012345678"
           {...register("phonenumber")} />
           <p className="error">{errors.phonenumber?.message}</p>
  
          <label for="email">Email</label>
          <input type="text" placeholder="Exampl@gmail.com"
           {...register("email")} />
           <p className="error">{errors.email?.message}</p>
  
          <label for="civilid">Civil id</label>
          <input type="text" placeholder="294032400507"
           {...register("civilid")} />
           <p className="error">{errors.civilid?.message}</p>

          <label for="highschoolgrade">High school grade</label>
          <input type="text" placeholder="90" 
           {...register("highschoolgrade")}/>
           <p className="error">{errors.highschoolgrade?.message}</p>
  
          <button type="submit" className="btn">
            Submit your Form
          </button>
        </form>
      </div>
    );
  }

  export default RegistraionForm;
    