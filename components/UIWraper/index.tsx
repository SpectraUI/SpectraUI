import React from "react";

export const UIWraper: React.FC<{ children }> = ({ children }) => {
  return <div className="bg-black">{children}</div>;
};
