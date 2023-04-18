import { useEffect, useState } from "react";
import axios from "axios";
import '../SignInUp/css/style.css';
import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import Nav from '../Navbar/Nav';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	const navigate = useNavigate();

	const handleSignUp = () => {
		navigate('/signUp');
	}

	const handleUserDetails = async ({mobileNumber, role, password}) => {
		try {
			const response = await axios.get(
				`http://localhost:5001/api/signin?mobileNumber=${mobileNumber}&role=${role}&password=${password}`
			);

			const {status, data} = response.data;

			if (status === "SUCCESS") {
				navigate( data?.role === "ADMIN" ?  '/add-property' : '/properties' );
			} else {
				alert("Something went wrong...")
			}
		} catch (error) {
			console.log(error);
		}
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();

    const {
      mobileNumber,
      role,
      password,
    } =  event.target.elements;
		handleUserDetails({
      mobileNumber: mobileNumber.value,
      role: role.value,
      password: password.value,
    })
	}

	return (
		<div>
			<Nav />
			<div className="wrapper">
				<div className="inner">
					<form onSubmit={handleFormSubmit}>
						<h3>SIGN IN FORM</h3>

						<div className="form-wrapper">
							<label htmlFor="mobileNumber"><b>Phone Number</b></label>
							<input type="text" id="mobileNumber" name="mobileNumber" className="form-control" />
						</div>

						<div className="form-wrapper">
							<label htmlFor="password"><b>Password</b></label>
							<input type="password" id="password" name="password" className="form-control" />
						</div>

						<div className="form-wrapper">
							<label htmlFor="role"><b>Sign In as</b></label>
							<select name="role" id="role" className="form-control">
								<option value="">Choose a option</option>
								<option value="ADMIN">Admin</option>
								<option value="USER">User</option>
							</select>
						</div>

						<div className="form-wrapper">
							<button type="submit">SIGN IN</button>
						</div>

						<div className="form-wrapper">
							<button type="button" onClick={handleSignUp}>NEW USER</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn;
