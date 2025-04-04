import { useState } from "react";

export default function LandingPage() {
  const [count, setCount] = useState(0);
  const [town, setTown] = useState("Mombasa");
  return (
    <div className="flex justify-between px-8 h-screen items-center">
      <div className="w-1/2 mt-8 flex  justify-start items-start gap-8">
        <h1 className="text-5xl font-bold">Hi my name is Rashid</h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          beatae vero, maxime tempora quo ullam sunt dicta minus. Repudiandae
          ducimus qui perferendis nobis quo laborum aut ut eligendi dolorem
          molestiae!
        </p>
        <button className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Contact Me
        </button>
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <div>
          <p>Town: {town}</p>
          <button onClick={() => setTown("Nairobi")}>Click me</button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="size-72 rounded-full bg-blue-200 flex justify-center items-center">
          image
        </div>
      </div>
    </div>
  );
}
