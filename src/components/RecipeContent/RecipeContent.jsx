/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Cook from "../Cook/Cook";
import Cooking from "../Cooking/Cooking";
import Food from "../Food/Food";
import Result from "../Result/Result";
import { toast } from "react-toastify";

function RecipeContent() {
  const [foods, setFoods] = useState([]);
  const [cards, setCards] = useState([]);
  const [cookingItem, setCookingItem] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleAddCards = (data) => {
    const isExist = cards.find((item) => item.id == data.id);
    const isExist2 = cookingItem.find((item) => item.id == data.id);

    if (!isExist && !isExist2) {
      setCards((pre) => [...pre, data]);
    } else {
      toast("Already Exist!");
    }
  };

  const handleCooking = (data) => {
    setCards((pre) => pre.filter((item) => item.id !== data.id));
    setCookingItem((pre) => [...pre, data]);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center items-center py-4">
          <h1 className="font-semibold text-4xl text-primaryGray">
            Our Recipes
          </h1>
          <p className="max-w-4xl px-3 text-lightGray text-center mx-auto">
            Discover culinary delights with our recipes, crafted to tantalize
            your taste buds and ignite your passion for cooking. From simple
            classics to innovative creations, we offer a feast for every palate,
            making every meal a memorable experience.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-4 py-6">
          <div className="col-span-3 grid lg:grid-cols-2 gap-6">
            {foods.map((food) => (
              <Food key={food.id} food={food} handleAddCards={handleAddCards} />
            ))}
          </div>

          <div className="col-span-2">
            <div className="border-2 rounded-xl p-4 border-gray-300 flex flex-col gap-6">
              {/* <!-- Block 1  --> */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <h1 className="px-8 text-center border-b inline py-2 font-semibold text-2xl text-primaryGray">
                    Want to cook: {cards.length}
                  </h1>
                </div>
                <div className="overflow-x-auto">
                  <table className="table text-lightGray">
                    {/* <!-- head --> */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <!-- row 1 --> */}
                      {cards.map((item, i) => (
                        <Cook
                          handleCooking={handleCooking}
                          item={item}
                          index={i}
                          key={i}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Block 2  --> */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <h1 className="px-8 text-center border-b inline py-2 font-semibold text-2xl text-primaryGray">
                    Currently cooking: {cookingItem.length}
                  </h1>
                </div>
                <div className="overflow-x-auto">
                  <table className="table text-lightGray">
                    {/* <!-- head --> */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <!-- row 1 --> */}
                      {cookingItem.map((item, i) => (
                        <Cooking item={item} key={item.id} index={i} />
                      ))}
                      {/* <!-- Result --> */}
                      <Result items={cookingItem} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeContent;
