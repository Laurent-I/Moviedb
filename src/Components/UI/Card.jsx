import { useEffect, useState } from "react";
import movieImage from "../../assets/images/oppenheimer.jpg";
import CircularProgressBar from "./CircularProgressBar";

export default function Card(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress === 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block w-auto h-auto bg-transparent border border-none rounded-lg shadow dark:bg-gray-800 dark:border-none dark:bg-transparent relative mr-7">
      <div className="relative">
        <a href="#">
          <img className="rounded-lg h-60" src={props.image} alt="" />
        </a>
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center p-5 shadow-lg rounded-md bg-gray-900 bg-opacity-40"
        >
          <h5 className="mb-1 text-md font-bold tracking-tight text-white hover:text-blue-600 text-opacity-80 cursor-pointer">
            {props.title}
          </h5>
          <p className="mb-3 text-sm font-normal text-gray-200 text-opacity-80">
            {props.release}
          </p>
          <CircularProgressBar percentage={props.rating} />
        </div>
      </div>
    </div>
  );
}
