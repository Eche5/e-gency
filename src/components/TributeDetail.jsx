import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTribute } from "../Context/TributeContext";

function TributeDetail() {
  const [valid, setIsValid] = useState(false);
  const [update, isUpDated] = useState(false);
  const [image, setImage] = useState(null);
  const { editTribute, fetchOneTribute } = useTribute();
  const [tribute, setTribute] = useState(editTribute);

  const tributeRef = useRef();
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const { tributeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Mrs. Sunmola | rewrite Tribute";
    fetchOneTribute(tributeId);
  }, []);

  useEffect(() => {
    if (tribute.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [tribute]);
  useEffect(() => {
    tributeRef.current.focus();
  }, []);

  const upDateTributeHandler = async () => {
    const res = await fetch(
      `https://memorial.adaptable.app/api/v1/users/tribute/${tributeId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tribute }),
      }
    );
    if (res.ok) {
      isUpDated(true);
      return navigate("/tributes");
    }
  };

  return (
    <div className="flex justify-center items-center m-4">
      {!update && (
        <section className=" flex flex-col justify-center p-4  rounded-lg">
          <form>
            <div className="flex-col flex justify-evenly flex-grow-0 p-2 gap-4 ">
              <textarea
                id="editableField"
                rows="10"
                type="text"
                required
                value={tribute}
                placeholder="Your Tribute"
                className=" rounded-lg border-2 border-gray-700 p-2"
                onChange={(e) => setTribute(e.target.value)}
                ref={tributeRef}
              />
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
            <button
              type="button"
              onClick={upDateTributeHandler}
              className={
                !valid
                  ? " ml-2 cursor-not-allowed rounded-full bg-white border-2 px-4 py-2 rounded-md flex hover:bg-[#fffbf2]"
                  : " ml-2 bg-white border-2 rounded-full flex hover:bg-[#fffbf2] px-4 py-2"
              }
              disabled={!valid}
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

export default TributeDetail;
