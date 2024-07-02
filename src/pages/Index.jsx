import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Biohacking Tool</h1>
      <p className="mb-6">Sign up to start adding your personal biohacking experiments.</p>
      <Button onClick={() => navigate("/signup")} className="mr-2">Sign Up</Button>
      <Button onClick={() => navigate("/experiments")}>View Experiments</Button>
    </div>
  );
};

export default Index;