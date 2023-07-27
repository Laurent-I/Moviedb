import movieImage from "../../assets/images/oppenheimer.jpg";
import Progress from "./Progress";

export default function Card() {
  return (
    <>
      <div className="inline-block w-auto h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-none dark:bg-transparent relative">
        <div className="badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-6 h-6 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <Progress />
        <a href="#">
          <img className="rounded-lg h-60" src={movieImage} alt="" />
        </a>
        <div className="p-5 flex flex-col justify-center content-center">
          <a href="#">
            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600">
              Oppenheimer
            </h5>
          </a>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            July, 19, 2023
          </p>
        </div>
      </div>
    </>
  );
}
