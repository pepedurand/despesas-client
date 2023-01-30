import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToSignUp = () => {
    navigate(`/signup`);
  };
  const goToAdminHome = () => {
    navigate(`/admin/edit`);
  };
  return { goToLogin, goToHome, goToSignUp, goToAdminHome };
};
