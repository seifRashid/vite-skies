export default function ImageSlider() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center bg-slate-500">
        <h1 className="text-5xl text-white font-semibold mt-8">Image Slider</h1>
        <div className="flex items-center w-1/2 h-[500px] mt-8">
          <button className="bg-white p-6 size-16 flex items-center justify-center rounded-full m-8 cursor-pointer">
            prev
          </button>
          <div className="w-full h-full bg-slate-200/80 rounded-lg shadow-md flex items-center justify-center">
            <img
              src="https://api.api-ninjas.com/v1/animals?name=cheetah"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <button className="bg-white p-6 size-16 flex items-center justify-center rounded-full m-8 cursor-pointer">
            next
          </button>
        </div>
      </div>
    </>
  );
}
