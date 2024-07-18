import React from "react";

const achievementsContent = [
  {
    imageUrl: "https://res.cloudinary.com/dejithzc7/image/upload/v1721156647/Prime%20Pro/uwtl4bklfhdgtbwntttk.png",
    title:
      "PrimePro has secured US $3 million from venture capitalists, the highest among all start-ups in the country.",
  },
  {
    imageUrl: "https://res.cloudinary.com/dejithzc7/image/upload/v1721156647/Prime%20Pro/x5ijupcn5bq3o6qfrb6t.png",
    title:
      "PrimePro has secured US $3 million from venture capitalists, the highest among all start-ups in the country.",
  },
  {
    imageUrl: "https://res.cloudinary.com/dejithzc7/image/upload/v1721156646/Prime%20Pro/vb5ay0eeaaeqjk0jkyrd.png",
    title:
      "PrimePro has secured US $3 million from venture capitalists, the highest among all start-ups in the country.",
  },
  {
    imageUrl: "https://res.cloudinary.com/dejithzc7/image/upload/v1721156646/Prime%20Pro/y83mlxhdmgqepxjsyjzs.png",
    title:
      "PrimePro has secured US $3 million from venture capitalists, the highest among all start-ups in the country.",
  },
];

const AchievementsBox = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center pt-10 px-20">
        {achievementsContent.map((item, index) => (
          <div key={index} className="w-1/4">
            <div className="flex flex-col items-center px-6 py-4 mx-3 hover:bg-slate-100 rounded-md hover:drop-shadow-md text-center">
              <img src={item.imageUrl} alt="Achievement" className="py-6" />
              <h3 className="pb-6">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsBox;
