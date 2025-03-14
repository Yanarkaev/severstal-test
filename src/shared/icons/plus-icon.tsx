import React from "react";

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#fff" />
    </svg>
  );
};
