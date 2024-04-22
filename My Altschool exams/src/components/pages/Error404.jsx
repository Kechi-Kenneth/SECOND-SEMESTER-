import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col justify-center items-center h-[70dvh] mb-24">
      <p className="text-6xl">Page not found :</p>
      <p className="text-2xl pt-6 underline underline-offset-4">
        <Link to="/"> click here to return home</Link>
      </p>
    </div>
  );
}

export default Error404;
