import React from "react";

export default function Nav(props) {

  const{title,links, bgColor,textColor, onClick} = props

  return (
    <nav className="w-full bg-gray-800 text-white flex justify-between items-center p-4">
        <h1 className="text-4xl font-black" >Logo</h1>
        <p>{title}</p>
      <ul className="flex space-x-4 mr-8">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}