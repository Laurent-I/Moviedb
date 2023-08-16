import CircularProgressBar from "./CircularProgressBar";

export default function Card(props) {

  return (
    <div className="inline-block w-auto h-auto bg-transparent border border-none rounded-lg shadow dark:bg-gray-800 dark:border-none dark:bg-transparent relative">
      <div className="relative">
        <a href="#">
          <img className="rounded-lg h-60" src={props.image} alt="" />
        </a>
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center p-5 shadow-lg rounded-md  bg-opacity-40"
        >
          <h5 className="mb-1 text-sm font-bold tracking-tight text-white hover:text-blue-600  cursor-pointer">
            {props.title}
          </h5>
          <p className="mb-3 text-xs font-normal text-gray-200">
            {props.release}
          </p>
          <CircularProgressBar percentage={props.rating} />
        </div>
      </div>
    </div>
  );
}
