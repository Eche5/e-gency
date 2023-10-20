import { useState } from "react";
import axios from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";

function Verify() {
  const [isVerified, setIsVerified] = useState(false);
  const { setAuth } = useAuth();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [isLoading, setIssLoading] = useState("Verify email");
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const FORGOT_URL = `/verify/${id}`;
    setIssLoading("verifying email...");
    try {
      const response = await axios.patch(FORGOT_URL, JSON.stringify({ id }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) setIsVerified(true);
      const accessToken = response?.data?.accessToken;

      const foundUser = response?.data?.user;

      setAuth({ foundUser, accessToken });
      setIssLoading("Verify email");
      navigate("/");
    } catch (error) {
      setIssLoading("Verify email");
    }
  };
  return (
    <div
      className="
    flex  justify-center items-center
   py-4 px-2
  "
    >
      <section className="  mt-40   p-4  text-white rounded-lg">
        <button
          onClick={onHandleSubmit}
          className="border flex justify-center gap-2 rounded-full border-transparent py-2 px-12 text-2xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white m-4"
        >
          {isLoading}
        </button>
      </section>
    </div>
  );
}

export default Verify;
