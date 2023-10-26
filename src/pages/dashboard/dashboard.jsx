import { useState } from "react";

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [userCourse, setUserCourse] = useState("");
  const [userEv, setUserEv] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const API = "https://6537a88fbb226bb85dd39095.mockapi.io/student/list";

  async function PostData() {
    if (userName !== "" && userCourse !== "" && userEv !== "") {
      setIsLoading(true);

      try {
        const data = {
          name: userName,
          course_name: userCourse,
          evaluation: userEv,
        };

        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(API, config);

        if (response.ok) {
          setIsLoading(false)
          setUserName('')
          setUserCourse('')
          setUserEv('')
        } 
      } catch {
        console.log('Error');
      }
    } else {
      console.log("Malumot toldring");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Hello world!</h1>
      <div className="flex items-center flex-col	 w-1/3 mx-auto gap-3">
        <input
          className="w-full border-2 p-2 rounded-lg"
          type="text"
          placeholder="Ismi"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="w-full border-2 p-2 rounded-lg"
          type="text"
          value={userCourse}
          placeholder="Gruh nomi"
          onChange={(e) => setUserCourse(e.target.value)}
        />
        <input
          className="w-full border-2 p-2 rounded-lg"
          type="text"
          value={userEv}
          placeholder="Bal"
          onChange={(e) => setUserEv(e.target.value)}
        />
        <button
          className="w-full 
          border-2 p-2 border-none 
          rounded-lg bg-sky-500/100 
          bg-cyan-500 hover:bg-sky-500/75 
          active:bg-sky-500/50 text-white"
          onClick={PostData}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </>
  );
}
export default Dashboard;
