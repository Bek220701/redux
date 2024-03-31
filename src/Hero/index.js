import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const dispatch = useDispatch();
  const { money, expenses, product } = useSelector((b) => b);
 const  error = (messege) =>{ toast.error(`${messege}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
  const addToBuy = () => {
    if (productName.trim() === "" || productPrice.trim() === "") {
        error("Заполните пустые ячейки!!!")
    } else if (money < productPrice) {
      error("У вас не хватает денег кошолек !!!");
    } else {
      let newObj = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        name: productName,
        price: productPrice,
      };
      dispatch({ type: "ADD_PRODUCT", payload: newObj });
    }
    setProductName("");
    setProductPrice("");
  };
  const deleteBtn = (data) => {
    dispatch({ type: "DELETE_PRODUCT", payload: data });
  };
 const enterAdd = (e)=>{
if (e.key==="Enter") {
    addToBuy()
}
 }
  return (
    <div className="container">
      <div className="flex items-center justify-around mt-20">
        <div class="card">
          <center>
            All Money <br /> <span>{money}$</span>
          </center>{" "}
        </div>
        <div class="card">
          <center>
            Expenses
            <br /> <span>{expenses}$</span>
          </center>{" "}
        </div>
      </div>
      <center>
        <form class="max-w-xs mx-auto mt-28">
          <div class="relative  w-[400px]">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              onKeyDown={(e)=> enterAdd(e)}
              type="text"
              id="floating-phone-number"
              class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder=" "
            />
            <label
              for="floating-phone-number"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Product Name
            </label>
          </div>
          <div class="relative mt-10  w-[400px]">
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              onKeyDown={(e)=> enterAdd(e)}
              type="text"
              id="floating-phone-number"
              class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder=" "
            />
            <label
              for="floating-phone-number"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Product Price
            </label>
          </div>
          <button
            type="button"
            onClick={() => addToBuy()}
            class="text-white bg-gradient-to-r ml-32 mt-10 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Buy Product
          </button>
        </form>
        {product.length ? (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[500px] mt-10 ml-24">
            <table class=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {product.map((el) => (
                <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el.name}
                    </th>
                    <td class="px-6 py-4">{el.price}$</td>
                    <td class="px-6 py-4">
                      <button
                        onClick={() => deleteBtn(el)}
                        type="button"
                        class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          <div
            class="flex items-center text-center w-[500px] mt-10 ml-24 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium ">Don't have any products yet?</span>
            </div>
          <ToastContainer />
          </div>
        )}
      </center>
    </div>
  );
};

export default Hero;
