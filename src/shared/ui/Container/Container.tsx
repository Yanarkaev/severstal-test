import s from "./Container.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "", ...props }: IProps) => {
  return (
    <div className={`${s.Container} ${className}`} {...props}>
      {children}
    </div>
  );
};
