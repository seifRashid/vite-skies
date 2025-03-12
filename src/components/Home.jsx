import Nav from "./nav";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div>
          <Nav />
        </div>
        <div className="flex justify-between px-8 h-screen items-center">
          <div className="w-1/2 mt-8 flex flex-col gap-8">
            <h1 className="text-5xl font-bold">Hi my name is Rashid</h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              beatae vero, maxime tempora quo ullam sunt dicta minus.
              Repudiandae ducimus qui perferendis nobis quo laborum aut ut
              eligendi dolorem molestiae!
            </p>
            <button className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Contact Me
            </button>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <div className="size-72 rounded-full bg-blue-200 flex justify-center items-center">
              image
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
