import Link from "react-router-dom";
import bulle from "@assets/img/batbulle.png";
import batman from "../assets/img/batmanCoverPage.jpeg";
import "../components/Home.css";

function Home() {
  return (
    <div>
      <h1 className=" md:font-bold text-3xl text-yellow-500 mb-600 mt-10">
        N'oublie pas la réplique
      </h1>

      <img
        className="w-[50%] my-20 absolute h-50 w-50 -right-4"
        src={bulle}
        alt="batman"
      />

      <div>
        <img
          className="mx-auto my-[50%] w-[40%] h-[40%] "
          src={batman}
          alt="batmancover"
        />
      </div>

      <Link
        className="bg-transparent hover:bg-yellow-500 text-white-700 font-semibold hover:text-white py-5 px-10 border border-blue-500 hover:border-transparent rounded "
        to="/quizz"
      >
        Start
      </Link>
    </div>
  );
}

export default Home;
