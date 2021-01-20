import React, { useState } from "react";

const SignIn = () => {

  const [info, setInfo] = useState({
    UserName: "",
    Password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <form className="signIn">
      <div className="input">
        <label>UserName</label>
        <input  type="text" name="UserName"  onChange={handleChange} />
      </div>

      <div className="input">
        <label>Password</label>
        <input  type="text" name="Password" onChange={handleChange} />
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  );
};

export default SignIn;
