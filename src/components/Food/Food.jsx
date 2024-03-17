/* eslint-disable react/prop-types */
function Food({ food, handleAddCards }) {
  const { title, img, description, ingredients, preparing_time, calories } =
    food;
  const image = `/img/${img}`;

  return (
    <div className="rounded-2xl p-4 border-2 border-gray-300">
      <div className="flex flex-col gap-4">
        <img src={image} alt="" />
        <h1 className="font-semibold text-xl text-primaryGray">{title}</h1>
        <p className="text-lightGray">{description}</p>
      </div>
      <hr className="my-4" />
      <ul className="list-disc list-inside text-lightGray">
        <h2 className="text-lg font-medium text-primaryGray py-3">
          Ingredients: {ingredients.length}
        </h2>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="flex items-center gap-6 py-4 text-primaryColor">
        <div className="flex gap-2 items-center">
          <i className="bi bi-stopwatch"></i>
          <p>{preparing_time} minutes</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bi bi-fire"></i>
          <p>{calories} calories</p>
        </div>
      </div>
      <button
        onClick={() => handleAddCards(food)}
        className="btn btn-accent bg-primaryGreen rounded-full px-8 font-medium"
      >
        Want to Cook
      </button>
    </div>
  );
}

export default Food;
