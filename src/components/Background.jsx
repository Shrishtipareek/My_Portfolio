import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* main background */}
      <div className="absolute inset-0 bg-[#FFF8F5]" />

      {/* pink glow */}
      <div
      className="
      absolute
      top-[-200px]
      right-[-100px]
      w-[500px]
      h-[500px]
      rounded-full
      bg-pink-200/50
      blur-[120px]"
      />

      {/* cream glow */}

      <div
      className="
      absolute
      bottom-[-200px]
      left-[-100px]
      w-[500px]
      h-[500px]
      rounded-full
      bg-orange-100/50
      blur-[120px]"
      />

      {/* center soft white */}

      <div
      className="
      absolute
      top-[30%]
      left-[40%]
      w-[350px]
      h-[350px]
      rounded-full
      bg-white/80
      blur-[100px]"
      />

    </div>
  );
};

export default Background;