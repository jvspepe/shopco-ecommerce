import classMerge from "@/utils/class-merge";
import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

const IconButton = <T extends ElementType = "button">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = component || "button";
  const { className, children, ...rest } = props;

  return (
    <Component
      {...rest}
      className={classMerge(
        "flex items-center justify-between gap-2 rounded p-1 font-heading uppercase transition-colors duration-300 hover:bg-black/10",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default IconButton;
