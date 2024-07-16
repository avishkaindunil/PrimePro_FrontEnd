import React from "react";
import AchievementsBox from "./AchievementsBox";

const Achievements = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] text-black font-medium">Our Achievements</h1>
        <p className="text-[16px] text-[#575757]">
          Since June 2024, PrimePro has become a celebrated success story in Sri
          Lanka's tech sector.
        </p>
      </div>
      <div>
        <AchievementsBox />
      </div>
    </div>
  );
};

export default Achievements;
