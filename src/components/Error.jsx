import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-[1100px] mx-auto px-12 pb-20 rounded-2xl text-center mt-16"
        style={{ boxShadow: "0px 5px 10px #0000001a" }}>
        <h2 className="text-[18vw] leading-none font-bold text-center">404</h2>
        <h4 className="font-black text-center text-[1.5em] text-black/80" style={{ boxShadow: "1px 1px 2px #ffffff66" }}>Oops! Page not found</h4>
        <p className="text-[1.2em] text-[#0d0d0d]/80 font-semibold mt-4">Sorry, the page you are looking for does not exist. If you think something is broken, report a problem.</p>
        <div className="mt-10">
          <Link className="text-button2 text-xl font-bold px-5 py-3 mt-20 rounded-full hover:text-white hover:bg-button2" style={{ border: "2px solid button2" }} to="/" >RETURN HOME</Link>
        </div>
      </div>
    </div>

  );
};

export default Error;