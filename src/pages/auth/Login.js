import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const navigateToHome = useNavigate();
	const signInUser = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInWithEmailAndPassword(email, password);
	};
	if (error) {
		console.log(error);
	}
	if (user) {
		navigateToHome("/");
	}
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="container">
			<div className="py-5">
				<h1 className="text-info text-center py-5"> Login Now</h1>
				<form className="form-width" onSubmit={signInUser}>
					<div className="form-outline mb-4">
						<input
							type="email"
							name="email"
							placeholder="enter your email"
							id="form2Example1"
							className="form-control"
						/>
						<label className="form-label" for="form2Example1">
							Email address
						</label>
					</div>

					<div className="form-outline mb-4">
						<input
							name="password"
							type="password"
							placeholder="enter your password"
							id="form2Example2"
							className="form-control"
						/>
						<label className="form-label" for="form2Example2">
							Password
						</label>
					</div>

					<div className="row mb-4">
						<div className="col d-flex justify-content-center">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="form2Example34"
									checked
								/>
								<label
									className="form-check-label"
									for="form2Example34"
								>
									{" "}
									Remember me{" "}
								</label>
							</div>
						</div>

						<div className="col">
							<a href="#!">Forgot password?</a>
						</div>
					</div>

					<button
						type="submit"
						className="btn btn-primary btn-block mb-4"
					>
						Sign in
					</button>

					<div className="text-center">
						<p>
							Not a member? <a href="/register">Register</a>
						</p>
						<p>or sign up with:</p>
						<button
							type="button"
							className="btn btn-primary btn-floating mx-1"
						>
							<i className="fab fa-facebook-f"></i>
						</button>

						<button
							type="button"
							className="btn btn-primary btn-floating mx-1"
						>
							<i className="fab fa-google"></i>
						</button>

						<button
							type="button"
							className="btn btn-primary btn-floating mx-1"
						>
							<i className="fab fa-twitter"></i>
						</button>

						<button
							type="button"
							className="btn btn-primary btn-floating mx-1"
						>
							<i className="fab fa-github"></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
