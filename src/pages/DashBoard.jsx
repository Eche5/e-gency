import { useEffect, useState } from "react";
import avatar from "../assets/8380015.jpg";
import { useAuth } from "../context/AuthenticationContext";
import { useParams } from "react-router-dom";

function DashBoard() {
  const {
    auth,
    setFirstname,
    setLastname,
    setMatchPwd,
    setEmail,
    firstname,
    lastname,
    updateMe,
    success,
    email,
  } = useAuth();
  useEffect(() => {
    if (auth.foundUser) {
      setFirstname(auth.foundUser.firstname);
      setLastname(auth.foundUser.lastname);
      setEmail(auth.foundUser.email);
      setMatchPwd("");
    }
  }, [auth, setEmail, setFirstname, setMatchPwd, setLastname]);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const onEditHandler = (e) => {
    e.preventDefault();
    setIsReadOnly((prev) => (prev = !prev));
    setIsEdit(true);
  };
  const params = useParams();
  const { "*": id } = params;
  const updateProfileHandler = (e) => {
    e.preventDefault();
    updateMe(id);
    if (success) {
      setIsReadOnly(true);
      setIsEdit(false);
    } else {
      setIsReadOnly(true);
      setIsEdit(false);
    }
  };
  return (
    <div
      className="
    flex flex-col justify-center items-center
   py-4 px-2
  "
    >
      <img src={avatar} className=" w-40 h-40 rounded-full" />
      <section className="w-full max-w-[420px] min-h-[400px]  p-8 text-white rounded-lg">
        <form
          className="flex flex-col pb-4 gap-4"
          onSubmit={updateProfileHandler}
        >
          {!isEdit && (
            <button
              type="button"
              className=" text-blue-700 float-right"
              onClick={onEditHandler}
            >
              Edit
            </button>
          )}
          <input
            type="text"
            value={firstname}
            readOnly={isReadOnly}
            placeholder="Your name"
            onChange={(e) => setFirstname(e.target.value)}
            className="text-[22px] p-1 rounded text-black border-2 border-gray-900"
          />
          <input
            type="text"
            readOnly={isReadOnly}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="text-[22px] p-1 rounded text-black border-2 border-gray-900"
          />
          <input
            type="text"
            readOnly={isReadOnly}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[22px] p-1 rounded text-black border-2 border-gray-900"
          />
          <input
            type="password"
            onChange={(e) => setMatchPwd(e.target.value)}
            placeholder="Confirm Password"
            readOnly={isReadOnly}
            className="text-[22px] p-1 rounded text-black border-2 border-gray-900"
          />
          {isEdit && (
            <button
              type="submit"
              className=" bg-white border-2 border-gray-900 rounded-lg text-black hover:bg-blue-900"
            >
              Update your profile
            </button>
          )}
        </form>
      </section>
    </div>
  );
}

export default DashBoard;
