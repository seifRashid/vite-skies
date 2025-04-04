import { useState } from "react";
import faqData from "../../../../data/accodion-data";

export default function Accordion() {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (questionId) => {
    console.log("question clicked")
    setExpanded(questionId === expanded ? null : questionId);
  };
  return (
    <>
      <div className="w-1/2 m-auto mt-24 p-4 flex flex-col gap-4 bg-slate-200/80 rounded-sm shadow-sm">
      <h1>React FAQ section</h1>
        {faqData.map((data) => {
          return (
            <>
              <div className="flex gap-4">
                <h2 className="text-xl font-bold text-slate-600" >{data.question}</h2>
                <span className="cursor-pointer text-slate-600 hover:scale-105 transform duration-300 font-semibold" onClick={()=>{handleClick(data.id)}} >
                  ⏬
                </span>
              </div>
              {expanded === data.id ? (
                <div className="mt-4">
                  <p>{data.answer}</p>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
