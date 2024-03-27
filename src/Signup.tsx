import { useState } from "react";
import win from "./../public/win.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  
    const navigate = useNavigate();


  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cPassword: "",
    username: "",
  });

  const [errors, setErrors]: any = useState('');
  // const [password, setPassword]: any = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // let obj = {
      //   username: formData.username,
      //   email: formData.email,
      //   password: formData.password,
      // };
      try {
        const requestOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          Authorization: "",
          body: JSON.stringify(formData),
        };
        const res = await fetch(
          "https://expense-tracker-task-production.up.railway.app/user/register",
          requestOptions
        );
        const data = await res.json();
        console.log("response == ", res);
        if(res.status === 200){
          navigate('/');
        }else{
          let obj = {
            password: 'Something Went Wrong'
          }
          setErrors(obj);
        }
        return data;
      } catch (error) {
        console.error("Error:", error); // Log any errors
        throw error;
      }
    }
  };

  // const handlePasswordChange = (event: any) => {
  //   setPassword(event.target.value);
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Pre-fill the input fields with userData
  const { username, email, password, cPassword } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className="signUp-main">
        <div className="signUp-content">
          <div className="signUp">
            <h2>SIGN UP</h2>
          </div>

          <div className="signUp-inputs">
            <input className="input-form"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder=" User Name"
            />
            <input className="input-form"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <div className="relative">
              <input className="input-form"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute  top-4 right-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative">
              <input className="input-form"
                type={showPassword ? "text" : "password"}
                name="cPassword"
                value={cPassword}
                onChange={handleChange}
                placeholder="confirm Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute  top-4 right-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="checkbox  ">
              <input type="checkbox" id="termsCheckbox" className=""/>
              <h6>
                I accept the <span>terms and conditions</span>{" "}
              </h6>
            </div>

            {errors.email && <span className="error">{errors.email}</span>}
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <button type="submit" className="signUp-btn">LOG IN</button>
          </div>
        </div>

        <div className="login-image background  ">
          <div className="absolute top-48 left-60">
            <img src={win} alt="" />
            <p>welcomeback to win</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
