import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
