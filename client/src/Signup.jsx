import { useState } from "react";
import { Link } from "react-dom";
import { useNavigate } from 'react-router-dom';
function Signup(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); 
  const handleRegister = async (e) => {
    try {
      
    e.preventDefault();
    const response = await fetch(
        "http://localhost:8000/api/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
               password,
            }),
        },
    );
    navigate("/login");
    
    } catch (error) {
        
        console.log(error);
    }
}
    return(       
        <div class="SignUp-box">
  {}
  <h2>Registration</h2>
  <div className="d-flex align-items-center justify-content-center">


    <form onSubmit={handleRegister} className="bg-primary  p-3 rounded w-25 ">
  <div className="user-box d-flex">
    <input
      type="text"
      name="username"
      placeholder="Enter your Username"
      required=""
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    
  </div>
  <div className="email-box">
    <input
      type="text"
      name="email"
      placeholder="Enter  your Email"
      required=""
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
  <div className="user-box">
    <input
      type="password"
      placeholder="Enter yout Password"
      name="password"
      required=""
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    
  </div>
  <br />
  <div>
    <button type="submit" class="btn btn-light">Sign Up Now</button>
  </div>
</form>
</div>
</div>
    );

}
export default Signup;