import { useState } from "react";
import {
  validateName,
  validateDescription,
  validateCategory,
  validateStock,
  validatePrice,
  validateDiscount,
} from "./helpers/ProductValidation";
import { useNavigate } from "react-router-dom";
import Category from "./Category";

import { categories } from "./helpers/FormHelpers";
import axios from "axios";

const CreateProduct = () => {
  const [files, setFiles] = useState([]);
  const history = useNavigate();

  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
    discount: 0,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    price: "",
    discount: "",
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const maxDescriptionLength = 255;

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: validateDescription(value),
    }));
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validateDescription(value),
    }));
    setDescriptionLength(value.length);
  };

  const handleCategoryChange = (selectedCategory) => {
    setInput((prevInput) => ({
      ...prevInput,
      category: selectedCategory,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      category: validateCategory(selectedCategory),
    }));
  };

  // //****************************************************************** */
  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      stock: validateStock(value),
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      price: validatePrice(value),
    }));
  };

  const handleDiscountChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      discount: validateDiscount(value),
    }));
  };

  //***************************************************************** */

  async function handleSubmit(event) {
    event.preventDefault();

    const fieldErrors = {
      name: validateName(input.name),
      description: validateDescription(input.description),
      category: validateCategory(input.category),
      stock: validateStock(input.stock),
      price: validatePrice(input.price),
      discount: validateDiscount(input.discount),
    };

    setErrors(fieldErrors);

    const hasErrors = Object.values(fieldErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    const responseInput = await axios.post(
      "https://neogn-back.up.railway.app/api/products/create",
      input
    );

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      const image = files[i];
      formData.append("image", image);
    }

    const responseImage = await axios.post(
      `https://neogn-back.up.railway.app/api/products/images/${responseInput.data.id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(responseImage);

    alert("Product Created Successfully");

    setInput({
      name: "",
      description: "",
      category: "",
      stock: 0,
      price: 0,
      discount: 0,
    });
    history("/admin/createProduct");
  }

  return (
    <div className="h-screen overflow-y-auto justify-center items-start md:inset-0 md:h-full dark:bg-neutral-950 flex">
      <div className="relative p-4 max-w-2xl h-screen md:h-auto font-general-sans w-full ">
        {/* <!-- content --> */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-zinc-950 sm:p-5 pb-[100px]">
          {/* <!--  header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
          </div>
          {/* <!--  body --> */}
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  id="name"
                  placeholder="Type product name"
                  onChange={handleNameChange}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                {errors.name && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <Category
                  categories={categories}
                  selectedCategory={input.category}
                  onSelectCategory={handleCategoryChange}
                />
                {errors.category && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.category}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="images"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple={true}
                  onChange={(event) => setFiles(event.target.files)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                {/* {errors.image && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.images}
                  </div>
                )} */}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={input.description}
                  name="description"
                  id="description"
                  rows="4"
                  placeholder="Write product description here"
                  onChange={handleDescriptionChange}
                  maxLength={maxDescriptionLength}
                  className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 bg-gray-50 rounded-lg border border-gray-300 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                {errors.description && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.description}
                  </div>
                )}
                <span className="flex justify-end dark:text-white">
                  {`${descriptionLength}/${maxDescriptionLength}`}
                </span>
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleStockChange}
                  placeholder="999"
                  required=""
                />
                {errors.stock && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.stock}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="off"
                  onChange={handlePriceChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="$2999"
                  required=""
                />
                {errors.price && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.price}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="discount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  autoComplete="off"
                  onChange={handleDiscountChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="99%"
                  required=""
                />
                {errors.discount && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.discount}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-gray-200 dark:hover:bg-white"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
