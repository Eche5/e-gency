import { useEffect, useRef, useState } from "react";
import { useCategory } from "../context/CategorieContext";
import Modal from "../ui/Modal";
import { useAuth } from "../context/AuthenticationContext";

function ContactForm() {
  const { isModal, setIsMOdal } = useCategory();
  const messageRef = useRef();
  const { auth } = useAuth();
  const [name, setName] = useState(auth?.foundUser?.firstname);
  const [message, setMessage] = useState("");
  const [includePhoneNumber, setIncludePhoneNumber] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  const handleCheckboxChange = () => {
    setIncludePhoneNumber((prevState) => !prevState);
  };
  useEffect(() => {
    if (message.length > 8) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
  }, [message]);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setIsMOdal(false);
    }, 3000);
  };
  return (
    <Modal>
      {!success && (
        <form className="flex flex-col pb-4" onSubmit={onHandleSubmit}>
          <label htmlFor="name" className="mt-4">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="name"
            required
            readOnly
            className="text-[22px] p-1 rounded-full text-black  pl-4"
          />
          <textarea
            id="editableField"
            rows="10"
            type="text"
            required
            value={message}
            placeholder="Your Message to the owner"
            className=" rounded-lg border-2 border-gray-700 p-2 text-black"
            onChange={(e) => setMessage(e.target.value)}
            ref={messageRef}
          />
          <label className="mt-4 flex justify-center">
            <input
              type="checkbox"
              checked={includePhoneNumber}
              onChange={handleCheckboxChange}
            />
            <p className=" text-[1rem] font-semibold">Include Phone Number</p>
          </label>
          <div className=" flex justify-center">
            <button
              type="submit"
              className={
                !messageIsValid
                  ? "text-white rounded-3xl bg-gray-900 px-8 p-2 border-2 border-gray-300 m-4 cursor-not-allowed"
                  : "text-white rounded-3xl bg-green-700 px-8 p-2 hover:transform hover:translate-x-[-5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4"
              }
            >
              Submit
            </button>
            <button
              onClick={() => setIsMOdal(false)}
              className="text-white rounded-3xl bg-red-500 px-8 p-2 hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {success && (
        <h1>You will be contacted shortly, Thank you for choosing us</h1>
      )}
    </Modal>
  );
}

export default ContactForm;
