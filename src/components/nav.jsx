import React from "react";

export default function Nav() {

  const{title, bgColor,textColor, onClick} = props

  return (
    <nav className="w-full bg-gray-800 text-white flex justify-between items-center p-4">
        <h1 className="text-4xl font-black" >Logo</h1>
      <ul className="flex space-x-4 mr-8">
        <li className="cursor-pointer hover:underline hover:bg-gray-500/50 rounded-md px-4 py-2" >Home</li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500/50 rounded-md px-4 py-2" >About</li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500/50 rounded-md px-4 py-2" >Contact</li>
      </ul>
    </nav>
  );
}