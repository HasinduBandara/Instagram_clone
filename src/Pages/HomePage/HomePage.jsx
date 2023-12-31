import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";

const HomePage = () => {
  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-100 px-10">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full ">
            {[1, 1, 11].map((item) => (<StoryCircle />))}
          </div>

          <div>
            posts
          </div>
        </div>
        <div className="w-[35%]">
          <HomeRight/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
