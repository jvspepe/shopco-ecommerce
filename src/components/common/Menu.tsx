import {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
  useRef,
} from "react";
import useClickAway from "@/hooks/useClickAway";
import classMerge from "@/utils/class-merge";

type Position = "center" | "left" | "right";

type Props = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handler: ReactNode;
  position?: Position;
};

function Menu({
  isOpen,
  setIsOpen,
  handler,
  position = "center",
  ...props
}: Props) {
  const { children, ...rest } = props;

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, setIsOpen);

  return (
    <div ref={ref} {...rest} className="relative">
      {handler}
      <div
        id={props["id"]}
        aria-hidden={isOpen}
        data-open={isOpen}
        className={classMerge(
          "invisible absolute z-40 min-w-[7.5rem] rounded border border-neutral-100 bg-white data-[open='true']:visible",
          {
            "left-1/2 top-full -translate-x-1/2": position === "center",
            "right-0 top-full": position === "left",
            "left-0 top-full": position === "right",
          },
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Menu;
