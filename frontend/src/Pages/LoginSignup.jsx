import React, { useState } from "react";
import "./LoginSignup.css";
import axios from "axios"; // Import Axios for making HTTP requests

export default function LoginSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true); // Add a password validation state
  const [isAgreed, setIsAgreed] = useState(false); // Add a state to track if the user agrees
  const message=("Hoşgeldiniz, `${name}`" );
  const signupHandler = async () => {
    // Check if the password is valid and the user has agreed
    if (passwordIsValid && isAgreed) {
      // Send a POST request to the backend to create a user
      try {
        const response = await axios.post("http://localhost:3000/createUsers", {
          username: name,
          password: password,
          email: email,
          is_admin: false, // Assuming the user is not an admin
        });
        console.log("User created successfully:", response.data);
        alert("Kayıt başarıyla tamamlandı.");
        // You can add code to handle success or navigate to a different page here
      } catch (error) {
        console.error("Error creating user:", error);
        // You can handle errors here
      }
    } else {
      // Password is not valid or user hasn't agreed
      console.error("Invalid password or agreement not checked");
      // You can display an error message to the user
    }

    
  };

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign up</h1>
        <h2>{message}</h2>
        <div className="login-signup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button onClick={signupHandler}>Continue</button>
        <p className="login-signup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-signup-agree">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          ></input>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
