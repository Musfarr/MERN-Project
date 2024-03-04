import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Signup = () => {

    const [formdata , setformdata] = useState({
        name : '',
        email : '',
        password : '',
        password2 : ''
    })


    const{name , email , password , password2} = formdata



    const onchange = (e) => {
         
        setformdata((prevstate) => ({
          ...prevstate,
          [e.target.name]: e.target.value,
        }));
    }
  return (
    <>
      <section className="heading">
        <h1>
          {" "}
          <FaUser /> Signup
        </h1>
        <p>Create an accout</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              name='name'
              placeholder="Name"
              value={name}
              onChange={onchange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name = "email"
              placeholder="Email"
              value={email}
              onChange={onchange}
            />
          </div>
          <div className="form-group">
            <input
              type='password'
              name = "password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={onchange}
            />
          </div>
          <div className="form-group">
            <input
            type='password'
              name = "password2"
              className="form-control"
              placeholder="Re-enter Password"
              value={password2}
              onChange={onchange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn-block  btn">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup