import React from "react";

 export const ScrollArea = ({ children, className = "" }) => {
  return (
    <div
      className={`overflow-y-auto max-h-[calc(100vh-100px)] pr-2 ${className}`}
    >
      {children}
    </div>
  );
};

