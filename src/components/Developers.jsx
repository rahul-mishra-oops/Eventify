import { pricingOptions } from "../constants";

const Developers = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide">
        The Developers
      </h2>
      <div className="flex flex-wrap ">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-1">
            <div className="shadow-[20px_35px_60px_0px_rgba(0,0,0,0.3)] p-5  rounded-xl hover:bg-blue-500 transition duration-300">
              <img
                className="h-90 w-75 border-neutral-300"
                src={option.image}
                alt=""
              />
              <a
                href="#"
                className="inline-flex text-white justify-center shadow-2xl bg-gradient-to-r from-blue-500 to-sky-800 items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-sky-900  rounded-lg transition duration-200"
              >
                <p className="">
                  <span className="text-2xl">{option.name}</span>
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
