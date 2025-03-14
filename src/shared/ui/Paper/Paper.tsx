import React from "react";
import s from "./Paper.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Paper = ({ className, children, ...props }: IProps) => {
  return (
    <div className={`${s.Paper} ${className}`} {...props}>
      {children}
    </div>
  );
};
