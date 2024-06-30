import React from "react";

export const UIWraper: React.FC<{ children }> = ({ children }) => {
  return <div className="bg-[#0f0f0f] text-gray-300">{children}</div>;
};
