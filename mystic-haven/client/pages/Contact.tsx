import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage since that's our contact page
    navigate("/");
  }, [navigate]);

  return null;
}
