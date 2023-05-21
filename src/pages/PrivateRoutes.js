// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = () => {
  const isAdminn = localStorage.getItem("isAdminn");
  if (isAdminn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;