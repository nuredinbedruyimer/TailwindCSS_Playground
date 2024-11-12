import React from "react";

const Paragraph = ({ paragraph, order }) => {
  const customeOrder = order ? "order-" + order : "";
  console.log(customeOrder);
  return (
    <div className={`border-gray-200 p-4 space-y-12 ${customeOrder}`}>
      <p className="text-4xl text-lime-800 font-extrabold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{order}
      </p>
      <p>{paragraph}</p>
    </div>
  );
};

export default Paragraph;
