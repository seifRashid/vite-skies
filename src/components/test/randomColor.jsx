import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("HEX color");
  const [color, setColor] = useState("#000000");
  const [rgbColor, setRgbColor] = useState("rgb(0, 0, 0)");
  const [bgColor, setBgColor] = useState(rgbColor);
  const [gradientColor, setGradientColor] = useState("linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))");

  function hexColor() {
    const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor("#" + randomHexColor);
    setBgColor(color)
    setColorType("HEX color");
  }

  function changeRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomRgbColor = `rgb(${r}, ${g}, ${b})`;
    setRgbColor(randomRgbColor);
    setBgColor(rgbColor);
    setColorType("RGB color");
  }

  function changeGradientColor(){
    const r1 = Math.floor(Math.random() * 256);
    const g1 = Math.floor(Math.random() * 256);
    const b1 = Math.floor(Math.random() * 256);
    const r2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);
    const randomGradientColor = `linear-gradient(to right, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
    setGradientColor(randomGradientColor);
    setBgColor(gradientColor)
    setColorType("Gradient color");
  }


  return (
    <>
      <div
        className="flex flex-col items-center w-full h-screen"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-5xl font-bold text-white mt-16">Generate Random Color</h1>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="py-2 px-3 border-2 rounded-md font-semibold cursor-pointer hover:bg-slate-200/80"
            onClick={hexColor}
          >
            Hex color
          </button>
          <button
            className="py-2 px-3 border-2 rounded-md font-semibold cursor-pointer hover:bg-slate-200/80"
            onClick={changeRgbColor}
          >
            rgb color
          </button>
          <button
            className="py-2 px-3 border-2 rounded-md font-semibold cursor-pointer hover:bg-slate-200/80"
            onClick={changeGradientColor}
          >
            Gradient color
          </button>
        </div>
        <p className="mt-16 text-5xl text-white font-bold">{colorType}</p>
        <p className="mt-16 text-9xl text-white font-black">{bgColor}</p>
      </div>
    </>
  );
}
