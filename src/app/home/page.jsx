const HomePage = () => {
  return (
    <>
      <section className="bg-Secondary">
        <div className="container mx-auto px-4 flex flex-col gap-6 items-center justify-center text-white py-52 text-center">
          <div className="flex gap-3 items-center text-primary md:text-xl text-xs">
            <div className="border-t-2 md:w-12 w-8 border-primary" />
            <p>Technology And Digital Solutions</p>
            <div className="border-t-2 md:w-12 w-8 border-primary" />
          </div>
          <h1 className="lg:w-[816px] md:text-[44px] text-[28px] font-medium">
            Most Loved, Top Rated <br />
            <span className="text-primary">
              Website, Mobile App, Digital Marketing
            </span>
            <br />
            Agency From Halifax, Canada
          </h1>
          <p>
            Securing Top Position in Web & App Development Companies list, We
            help Startups, Entrepreneurs & <br /> Enterprises shaping their
            ideas into Award-Winning Product & Business.
          </p>{" "}
          <br />
          <button className="px-7 py-3 rounded-xl bg-primary text-white">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
