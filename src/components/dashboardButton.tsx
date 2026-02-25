import { useNavigate } from "react-router-dom";

const DashboardButton: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return <button onClick={goToHome}>Go to Dashboard</button>;
};

export default DashboardButton;
