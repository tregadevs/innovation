import React from "react";

const dataItems = [
  {
    key: 1,
    text: "We provide end product solution to our clients",
  },
  {
    key: 2,
    text: "We give promised tech support after delivery of project",
  },
  {
    key: 3,
    text: "We have a team of expert who are well in their domain",
  },
  {
    key: 4,
    text: "We deliver the product with promised deadline",
  },
  {
    key: 5,
    text: "We believe in the quality of solution that industry require ",
  },
];

const WhyWe = () => {
  return (
    <div className="py-8 px-8 bg-purple-700 flex flex-col items-center ">
      <div className="text-center">
        <h3 className="font-semibold text-2xl text-white underline">
          Why We
        </h3>
        {/* <h2 className='font-semibold text-xl '>Here is the reason, Why should you select us!</h2> */}
      </div>
      <div>
        {dataItems.map((e) => {
          return (
            <div className="flex gap-3 w-4/5 mx-auto font-semibold my-4 items-center">
              <div className="font-medium text-white text-2xl border-[#f1f1f1] border-2 rounded-full p-2 shadow-2xl">
                <span>{e.key}</span>
              </div>
              <div className="shadow font-medium text-xl italic text-gray-900 flex items-center shadow-black p-1 pl-2">
                {e.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyWe;
