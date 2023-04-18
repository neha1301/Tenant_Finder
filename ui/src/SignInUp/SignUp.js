import axios from "axios";
import "../SignInUp/css/style.css";
import "../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import Nav from "../Navbar/Nav";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSignIn = () => {
		navigate('/signIn');
	}

  const handleSignup = async (signUpData) => {
    console.log("signUpData - ", signUpData);
    try {
      let response  =  await  axios.post("http://localhost:5001/api/signup", signUpData)
        if (response.data?.status === "SUCCESS") {
          handleSignIn()
        } else {
          alert("Something went wrong...")
        }
      } catch (error) {
        alert(error.response.data.error || "Something went wrong...")
      }
  }

  const handleSubmit = (event) => {
    console.log("Handle submit")
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      role,
      password,
      confirmPassword,
    } =  event.target.elements;

    if (password.value != confirmPassword.value) {
      alert("Passwords do not match!");
      return;
    } else {
      handleSignup({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        mobileNumber: mobileNumber.value,
        role: role.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      })
    }
  };
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>SIGN UP FORM</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Sign In as</b>
              </label>
              <select
                name="role"
                id="role"
                className="form-control"
                required
              >
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-wrapper">
              <button type="submit">SIGN UP</button>
            </div>
            <div className="form-wrapper">
              <button onClick={handleSignIn}>Already a member</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
