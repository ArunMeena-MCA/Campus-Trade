import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("select");
  const [image, setimage] = useState([]);

  const handelSubmit = () => {
    if (
      title === "" ||
      price === "" ||
      description === "" ||
      category === ""
    ) {
      alert("Each and every feild must not be empty");
      return;
    }
    const data = {title, price, description, category}
    const url = "http://localhost:3000/add-product";

    axios
      .post(url, data)
      .then((res) => {
        if (res.data.message) alert(res.data.message);
        settitle("");
        setprice("");
        setdescription("");
        setcategory("");
        setimage("");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product");
      });
  };

  // const handleFileChange = (event) => {
  //   const files = Array.from(event.target.files);
  //   setimage(files);
  // };

  return (
    <div className="w-1/2 mx-auto pt-[7%] h-full pb-5">
      <h1 className="text-xl font-bold">Product Details</h1>
      <h1 className="mt-5">Add Title</h1>
      <input
        type="text"
        value={title}
        placeholder="Title"
        required
        className="w-full border border-black text-xl p-2 rounded-md"
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <h1 className="mt-5">Description</h1>
      <textarea
        className="w-full border border-black p-2 rounded-md"
        value={description}
        rows="3"
        cols="50"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <h1 className="mt-5">Price</h1>
      <input
        type="number"
        value={price}
        className="border border-black text-l p-2 rounded-md"
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />

      {/* <h1 className="mt-5">Images</h1>
      <input
        type="file"
        multiple
        className="border border-black p-2 rounded-md"
        onChange={handleFileChange}
        accept="image/*"
      />

      {image.length > 0 ? (
        <div className="flex items-center gap-5 flex-wrap py-5">
          {image.map((file, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ) : null} */}

      <div className="flex items-center mt-7 gap-5">
        <h1>Category: </h1>
        <select
          title=""
          id=""
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          className="border border-black"
        >
          <option >Fiction</option>
          <option >Non-Fiction</option>
        </select>
      </div>
      <input
        type="submit"
        value="Add Product"
        onClick={handelSubmit}
        className="ml-[40%] test-center mt-7 rounded-full px-7 py-2 bg-[#fcd12d]"
      />
    </div>
  );
};

export default AddProduct;
