import { useState } from "react";
import { Link } from "react-dom";
import { useNavigate } from 'react-router-dom';
function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    try {
      
    e.preventDefault();
    const response = await fetch(
        "http://localhost:8000/api/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
             
                email,
               password,
            }),
        },
    );
    navigate("/");
    
    } catch (error) {
        
        console.log(error);
    }
}
    return(       
        <div class="Login-box">
  <h2> Login</h2>
  <div className="d-flex align-items-center justify-content-center">


    <form onSubmit={handleLogin} className="bg-primary">
 
  <div className="email-box">
    <input
      type="text"
      name="email"
      required=""
      placeholder="Enter Email "
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
  <div className="user-box">
    <input
      type="password"
      name="password"
      required=""
      placeholder="Enter password "

      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    
  </div>
  <br />
  <div>
    <button type="submit">Submit now</button>
  </div>
</form>

</div>
</div>
    );

}
export default Login;