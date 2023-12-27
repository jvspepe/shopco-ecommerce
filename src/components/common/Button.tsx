import classMerge from "@/utils/class-merge";
import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

const Button = <T extends ElementType = "button">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = component || "button";
  const { className, children, ...rest } = props;

  return (
    <Component
      {...rest}
      className={classMerge(
        "flex items-center justify-center gap-3 rounded-full bg-black p-1 px-8 py-4 text-center font-heading text-white transition-colors duration-300 hover:bg-black/50",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
