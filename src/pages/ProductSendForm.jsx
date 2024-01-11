import React from "react";

function ProductSendForm() {
  return (
    <section className="bg-gray-100 w-full py-20 px-8">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-medium text-[#494949]">
          Products Send Form
        </h3>
        <h3>
          Admin/<span className="text-[#9B9B9B]">Products Send Form</span>
        </h3>
      </div>
      <div className="bg-white w-[700px] flex justify-center items-center  shadow-slate-400 p-8 rounded-xl mx-auto mt-16 shadow-xl">
        <form className="w-full bg-[#2A3042] rounded-md flex flex-col gap-7 p-5 shadow-lg shadow-[#2a3042]">
          <div className="flex flex-col gap-7">
            <div className="flex justify-between p-5 gap-5">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[#d6d6d6]" htmlFor="prodName">
                  Product name
                </label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  id="prodName"
                  name="prodName"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[#d6d6d6]" htmlFor="price">
                  Product price
                </label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  id="price"
                  name="price"
                />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-5">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[#d6d6d6]" htmlFor="brand">
                  Product brand
                </label>
                <input
                  type="text"
                  placeholder="Enter product brand"
                  id="brand"
                  name="brand"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[#d6d6d6]" htmlFor="color">
                  Product color
                </label>
                <input
                  type="text"
                  placeholder="Enter product color"
                  id="color"
                  name="color"
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <select
                name="category"
                className="p-[10px] w-2/3 rounded-md outline-none"
              >
                <option value="Выберите категорию" hidden>
                  Выберите категорию
                </option>
                <option value="Инструменты">Инструменты</option>
                <option value="Сантехника">Сантехника</option>
                <option value="Для дома">Для дома</option>
              </select>
            </div>
          </div>
          <button className="py-5 px-20 bg-green-700 text-white w-3/4 mx-auto rounded-full mt-24">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ProductSendForm;
