import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";

function ProductsTable() {
  const { data } = useSelector((state) => state.MainRex);
  return (
    <section className="bg-gray-100 w-full py-20 px-8 flex flex-col gap-9 max-h-[100vh] overflow-scroll">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-medium text-[#494949]">Products list</h3>
        <h3>
          Admin/<span className="text-[#9B9B9B]">Products list</span>
        </h3>
      </div>
      <div>
        <div className="bg-white shadow-[0px 14px] shadow-black py-4 px-[30px] rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-[#494949]">Products list</h2>
            <div className="flex items-center gap-2.5 bg-[#F0F0F0] w-[400px] pl-1 h-[41px] rounded-3xl">
              <button className="bg-[#d6d6d6] p-2  flex justify-center items-center rounded-3xl">
                <MagnifyingGlass size={20} />
              </button>
              <input
                type="text"
                placeholder="Search products here"
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <table className="w-full ">
            <thead className="bg-[#2A3042] text-white">
              <tr>
                <th className="p-4">Image</th>
                <th>Id</th>
                <th>Name</th>
                <th>Articul</th>
                <th>Price</th>
                <th>Category</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((elem) => {
                  return (
                    <tr
                      key={elem.id}
                      className="bg-white text-center border-b-2"
                    >
                      <td className="p-5 w-[120px]">
                        <figure>
                          <img src={elem.img} alt="" className="w-[120px]" />
                        </figure>
                      </td>
                      <th>{elem.id}</th>
                      <td className="w-[300px]">{elem.prodName}</td>
                      <td>Арт: {elem.art}</td>
                      <td>{elem.price}</td>
                    </tr>
                  );
                })
              ) : (
                <tr className="bg-[#FFFDFD] text-[#575757]">
                  <th colSpan={100} className="p-4">
                    No data...
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductsTable;
