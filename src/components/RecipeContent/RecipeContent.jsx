import Cook from "../Cook/Cook";
import Cooking from "../Cooking/Cooking";
import Food from "../Food/Food";
import Result from "../Result/Result";

function RecipeContent() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center items-center py-4">
          <h1 className="font-semibold text-4xl text-primaryGray">
            Our Recipes
          </h1>
          <p className="max-w-4xl px-3 text-lightGray text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-4 py-6">
          <div className="col-span-3 grid lg:grid-cols-2 gap-6">
            <Food></Food>
            <Food></Food>
          </div>

          <div className="col-span-2">
            <div className="border-2 rounded-xl p-4 border-gray-300 flex flex-col gap-6">
              {/* <!-- Block 1  --> */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <h1 className="px-8 text-center border-b inline py-2 font-semibold text-2xl text-primaryGray">
                    Want to cook: 01
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
                      <Cook></Cook>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Block 2  --> */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <h1 className="px-8 text-center border-b inline py-2 font-semibold text-2xl text-primaryGray">
                    Currently cooking: 02
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
                      <Cooking></Cooking>
                      {/* <!-- Result --> */}
                      <Result></Result>
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
