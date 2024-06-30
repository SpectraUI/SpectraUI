import { ButtonHTMLAttributes, FunctionComponent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
  | "primary"
  | "secondary"
  | "green"
  | "red"
  | "yellow"
  | "zinc"
  | "cyan";
  variant?: "outline" | "solid" | "flat" | "shadow";
  size?: "lg" | "xl" | "sm" | "xs";
  animated?: boolean;
}

const rendererVariant = (variant: string | undefined, color: string) => {
  switch (variant) {
    case "solid":
      if (color !== "#3f3f46") {
        if (color === "#7EE7FC") {
          return `bg-[${color}] text-gray-700`;
        }
        return `bg-[${color}] text-gray-200`;
      }
      return `bg-[${color}] text-gray-300`;

    case "outline":
      return `border-2 border-[${color}] text-[${color}]`;

    case "flat":
      return `bg-[${color}] bg-opacity-30 text-[${color}]`;

    case "shadow":
      if (color !== "#3f3f46") {
        if (color === "#7EE7FC") {
          return `bg-[${color}] text-gray-700 shadow-lg shadow-[${color}77]`;
        }
        return `bg-[${color}] text-gray-200 shadow-[${color}77] shadow-lg`;
      }
      return `bg-[${color}] text-gray-300 shadow-[${color}77] shadow-lg`;

    default:
      if (color !== "#3f3f46") {
        if (color === "#7EE7FC") {
          return `bg-[${color}] text-gray-700`;
        }
        return `bg-[${color}] text-gray-200`;
      }
      return `bg-[${color}] text-gray-300`;
  }
};

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    className,
    animated,
    children,
    size,
    color,
    variant,
    disabled,
    ...otherProps
  } = props;
  let animated_: boolean;
  if (animated === undefined) {
    animated_ = true;
  } else {
    animated_ = animated;
  }

  let HexColor;
  switch (color) {
    case "secondary":
      HexColor = "#9353d3";
      break;
    case "primary":
      HexColor = "#006fee"
      break;
    case "red":
      HexColor = "#F31260";
      break;
    case "yellow":
      HexColor = "#F5A524";
      break;
    case "green":
      HexColor = "#17C964";
      break;
    case "zinc":
      HexColor = "#3f3f46";
      break;
    case "cyan":
      HexColor = "#7EE7FC";
      break;
    default:
      HexColor = "#006fee";
      break;
  }

  let scale;
  if (disabled) {
    switch (size) {
      case "xl":
        scale = "scale-150 opacity-70";
        break;
      case "lg":
        scale = "scale-125 opacity-70";
        break;
      case "sm":
        scale = "scale-95 opacity-70";
        break;
      case "xs":
        scale = "scale-75 opacity-70";
        break;
      default:
        scale = "scale-95 opacity-70";
    }
  } else {
    switch (size) {
      case "xl":
        scale = "scale-150 active:scale-[145%]";
        break;
      case "lg":
        scale = "scale-125 active:scale-[120%]";
        break;
      case "sm":
        scale = "scale-95 active:scale-[90%]";
        break;
      case "xs":
        scale = "scale-75 active:scale-[70%]";
        break;
      default:
        scale = "scale-95 active:scale-[90%]";
    }
  }

  // eslint-disable-next-line
  let foo = [
    "bg-[#3f3f46]",
    "bg-[#7EE7FC]",
    "bg-[#006fee]",
    "bg-[#9353d3]",
    "bg-[#F31260]",
    "bg-[#F5A524]",
    "bg-[#17C964]",

    "border-[#3f3f46]",
    "border-[#7EE7FC]",
    "border-[#006fee]",
    "border-[#9353d3]",
    "border-[#F31260]",
    "border-[#F5A524]",
    "border-[#17C964]",

    "shadow-[#3f3f4677]",
    "shadow-[#7EE7FC77]",
    "shadow-[#006fee77]",
    "shadow-[#9353d377]",
    "shadow-[#F3126077]",
    "shadow-[#F5A52477]",
    "shadow-[#17C96477]",

    "text-[#3f3f46]",
    "text-[#7EE7FC]",
    "text-[#006fee]",
    "text-[#9353d3]",
    "text-[#F31260]",
    "text-[#F5A524]",
    "text-[#17C964]",
  ];

  const class_ = `inline-flex items-center justify-center whitespace-nowrap rounded-md ro_y px-4 py-2 m-1 ${animated_ ? "transition-all" : ""} ${className} ${rendererVariant(variant, HexColor)} ${scale}`;

  return (
    <button className={class_} {...otherProps} disabled={disabled}>
      {children}
    </button>
  );
};
