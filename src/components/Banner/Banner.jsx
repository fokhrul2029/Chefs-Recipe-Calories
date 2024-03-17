function Banner() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-2">
        <div className="bg-[url('/img/banner.png')] bg-center bg-no-repeat bg-cover rounded-3xl py-24 flex flex-col gap-6 justify-center text-center items-center text-white px-4">
          <h1 className="font-bold text-5xl">
            Discover an exceptional cooking <br />
            className tailored for you!
          </h1>
          <p className="max-w-5xl px-5 mx-auto text-lg">
            Embark on a culinary journey with our tailored cooking classes,
            designed to elevate your skills and ignite your culinary creativity.
            From novice to connoisseur, explore a personalized approach to
            mastering the art of cooking.
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
    </div>
  );
}

export default Banner;
