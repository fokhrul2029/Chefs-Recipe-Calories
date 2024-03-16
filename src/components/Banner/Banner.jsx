function Banner() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-2">
        <div className="bg-[url('/img/banner.png')] bg-center bg-no-repeat bg-cover rounded-3xl py-24 flex flex-col gap-6 justify-center text-center items-center text-white px-4">
          <h1 className="font-bold text-5xl">
            Discover an exceptional cooking <br />
            className tailored for you!
          </h1>
          <p className="max-w-5xl px-5 mx-auto text-lg">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="flex gap-4 text-xl font-semibold">
            <button className="btn btn-accent rounded-full bg-primaryGreen px-6 text-primaryGray">
              Explore Now
            </button>
            <button className="btn btn-outline text-white border-white rounded-full px-6">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
