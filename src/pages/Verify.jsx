import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";

function Verify() {
  const [isVerified, setIsVerified] = useState(false);

  const [isAlreadyVerified, setIsAlreadyVerified] = useState(false);

  const { setAuth } = useAuth();

  const params = useParams();

  const id = params.id;

  const navigate = useNavigate();

  const [isLoading, setIssLoading] = useState("Verify email");

  useEffect(() => {
    document.title = "e-rent | verifyemail ";
  }, []);

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

      setIsAlreadyVerified(false);

      setAuth({ foundUser, accessToken });

      setIssLoading("Verify email");

      navigate("/");
    } catch (error) {
      setIssLoading("Verify email");

      if (error.response.status === 401) setIsAlreadyVerified(true);
    }
  };

  return (
    <div
      className="
    flex  justify-center items-center
   py-4 px-2
  "
    >
      <section className=" w-[520px] min-h-[400px]  p-8  bg-gradient-to-r from-stone-200 to-neutral-500 text-gray-900  rounded-3xl">
        {!isAlreadyVerified && (
          <div className="flex flex-col pb-4 ">
            <h1 className=" text-3xl text-center ">Verify email</h1>
            <p className=" text-xl text-center mt-20">
              Click the button below to verify your email
            </p>
            <button
              onClick={onHandleSubmit}
              className="border flex justify-center gap-2 rounded-full border-transparent py-2 px-12 text-2xl font-medium bg-black text-white m-4"
            >
              {isLoading}
            </button>
          </div>
        )}
        {isAlreadyVerified && (
          <h1 className=" text-2xl text-center mt-32 ">
            email is already verified
          </h1>
        )}
      </section>
    </div>
  );
}

export default Verify;
