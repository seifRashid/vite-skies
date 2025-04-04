import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

    const handleSubmit =(e)=> {
        console.log(formData);
}

  return (
    <form className="flex flex-col gap-4 w-1/2 mx-auto border border-gray-400 p-8 rounded-md shadow-sm hover:shadow-md">
      <h1 className="text-5xl font-bold text-center">Log In</h1>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onInput={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
            className="p-2 w-full border border-gray-400 rounded-sm"
            placeholder="Enter Username..."
          />
          {/* <p>{formData.username}</p> */}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onInput={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            className="p-2 w-full border border-gray-400 rounded-sm"
            placeholder="Enter Email..."
          />
        </div>
      </div>
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="email"
        name="password"
        onInput={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }} 
        className="p-2 w-full border border-gray-400 rounded-sm"
        placeholder="Enter Password..."
      />
      <button
        type="submit"
        className="p-2 bg-blue-400 hover:bg-blue-500 cursor-pointer w-1/4 font-semibold text-white rounded-sm"
        onSubmit={handleSubmit}
        // onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
