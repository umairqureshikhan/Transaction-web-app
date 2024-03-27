import {  useState } from "react";
import win from "./../public/win.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors]: any = useState({});

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
      try {
        const requestOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          Authorization: "",
          body: JSON.stringify(formData),
        };
        const res = await fetch(
          "https://expense-tracker-task-production.up.railway.app/user/login",
          requestOptions
        );
        const data = await res.json();
        console.log("response == ", res);
        if(res.status === 200){
          navigate('/transaction');
        }else{
          let obj = {
            password: 'Something Went Wrong'
          }
        }
        return data;
      } catch (error) {
        console.error("Error:", error); // Log any errors
        throw error;
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Pre-fill the input fields with userData
  const { email, password } = formData;

  return (
    <div className="login-main">
      <div className="login-content">
        <div>
          <h2>LOG IN</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-inputs">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="email address"
            />
            <div className="relative">
              <input
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
            {errors.email && <span className="error">{errors.email}</span>}
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <div className="login-btn">
            <button type="submit" >
              LOG IN
            </button>

            </div>
            
          </div>
        </form>
      </div>
      <div className="login-image background  ">
        <div className="absolute top-48 left-60">
          <img src={win} alt="" />
          <p>welcomeback to win</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
