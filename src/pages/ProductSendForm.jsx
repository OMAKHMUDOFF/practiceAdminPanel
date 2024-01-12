import React, { useState } from "react";
import { sendApi } from "../store/reducers/MainReducers";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductSendForm() {
  const { crud } = useSelector((state) => state.MainRex);
  const [data, setData] = useState({
    prodName: "",
    price: "",
    brand: "",
    color: "",
    category: "",
    disc: "",
  });

  function autoClear() {
    setData({
      prodName: "",
      price: "",
      brand: "",
      color: "",
      category: "",
      disc: "",
    });
  }

  const handleGetVal = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      art: parseInt(Math.random() * 100000),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8000/crud", { ...data });
    dispatch(sendApi(res.data));
    autoClear();
  };

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
        <form
          className="w-full bg-[#2A3042] rounded-md flex flex-col gap-7 p-5 shadow-lg shadow-[#2a3042]"
          onSubmit={handleSubmit}
        >
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
                  value={data.prodName}
                  onChange={handleGetVal}
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
                  value={data.price}
                  name="price"
                  onChange={handleGetVal}
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
                  value={data.brand}
                  name="brand"
                  onChange={handleGetVal}
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
                  value={data.color}
                  onChange={handleGetVal}
                />
              </div>
            </div>
            <div className="flex justify-center mt-10 items-end gap-5 p-5">
              <select
                name="category"
                className="p-[10px] w-full rounded-md outline-none"
                value={data.category}
                onChange={handleGetVal}
              >
                <option value="Выберите категорию" hidden>
                  Выберите категорию
                </option>
                <option value="Инструменты">Инструменты</option>
                <option value="Сантехника">Сантехника</option>
                <option value="Для дома">Для дома</option>
              </select>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[#d6d6d6]" htmlFor="discount">
                  Product Discount
                </label>
                <input
                  type="text"
                  placeholder="Enter product discount"
                  id="discount"
                  name="disc"
                  value={data.disc}
                  onChange={handleGetVal}
                />
              </div>
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
