

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center mt-6 lg:mt-5 px-8">
      <div>
        <h1 className="text-3xl sm:text-6xl lg:text-6xl text-left tracking-wide">
          <span className=" drop-shadow-2xl bg-gradient-to-r from-blue-500 to-sky-800 text-transparent bg-clip-text">

            Eventify
            {" "}
          </span>
          your hapiness


        </h1>
        <p className="mt-10 text-md text-left text-neutral-500 max-w-4xl">
          Discover, Register, Create. Your ultimate event experience starts here. Join us in shaping unforgettable moments together.
        </p>
        <div className="flex justify-start my-10">
          <a
            href="createevent"
            className="bg-gradient-to-r from-blue-500 to-sky-800 py-3 px-4 mx-3 rounded-md text-white drop-shadow-2xl"
          >
            Create an event
          </a>
          <a href="#" className="shadow-2xl py-3 px-4 mx-3 rounded-md border">
            Explore events
          </a>
        </div>
      </div>
      <div className="flex mt-10 justify-center">

        <img class=" h-auto max-w-full ml-10 size-[20rem] invisible md:visible" src="src\assets\hero.png" alt="image description" />


      </div>
    </div>
  );
};

export default HeroSection;
