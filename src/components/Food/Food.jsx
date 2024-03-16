function Food() {
  return (
    <div className="rounded-2xl p-4 border-2 border-gray-300">
      <div className="flex flex-col gap-4">
        <img src="/img/food-item 1.png" alt="" />
        <h1 className="font-semibold text-xl text-primaryGray">
          Spaghetti Bolognese
        </h1>
        <p className="text-lightGray">
          classNameic Italian pasta dish with savory meat sauce.
        </p>
      </div>
      <hr className="my-4" />
      <ul className="list-disc list-inside text-lightGray">
        <h2 className="text-lg font-medium text-primaryGray py-3">
          Ingredients: 6
        </h2>
        <li>500g ground beef</li>
        <li>1 onion, chopped</li>
        <li>2 cloves garlic, minced</li>
      </ul>
      <hr className="my-4" />
      <div className="flex items-center gap-6 py-4 text-primaryColor">
        <div className="flex gap-2 items-center">
          <i className="bi bi-stopwatch"></i>
          <p>30 minutes</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bi bi-fire"></i>
          <p>600 calories</p>
        </div>
      </div>
      <button className="btn btn-accent bg-primaryGreen rounded-full px-8 font-medium">
        Want to Cook
      </button>
    </div>
  );
}

export default Food;
