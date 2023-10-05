import {Link} from "react-router-dom";
function Home()
{
    return (
        <div className="bg-light">
            <h1 className="m-6 bg-primary text-light">Welcome!!! This is Homepage</h1>
            <div className="d-flex align-items-center justify-content-center ">

            <Link to="/login" className=" btn btn-primary rounded p-2 m-3">Login</Link>
        
            <Link to="/register" className="btn btn-primary rounded p-2 m-3">Register</Link>
            </div>
        </div>
    )  
}
export default Home;