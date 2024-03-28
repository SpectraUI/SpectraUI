import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      if (color !== "#71717A") {
        return `bg-[${color}] text-gray-900`;
      }
      return `bg-[${color}] text-gray-100`;

    case "outline":
      return `border-2 border-[${color}] text-[${color}]`;

    case "flat":
      return `bg-[${color}] bg-opacity-30 text-[${color}]`;

    case "shadow":
      if (color !== "#71717A") {
        return `bg-[${color}] text-gray-900 shadow-[0_8px_20px_-7px_${color}]`;
      }
      return `bg-[${color}] text-gray-100 shadow-[0_8px_20px_-7px_${color}]`;

    default:
      if (color !== "#71717A") {
        return `bg-[${color}] text-gray-900`;
      }
      return `bg-[${color}] text-gray-100`;
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
      HexColor = "#7828C8";
      break;
    case "primary":
      HexColor = "#3561FA";
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
      HexColor = "#71717A";
      break;
    case "cyan":
      HexColor = "#7EE7FC";
      break;
    default:
      HexColor = "#3561FA";
      break;
  }

  let scale;
  if (disabled) {
    switch (size) {
      case 'xl':
        scale = 'scale-150 opacity-70';
        break;
      case 'lg':
        scale = 'scale-125 opacity-70';
        break;
      case 'sm':
        scale = 'scale-95 opacity-70';
        break;
      case 'xs':
        scale = 'scale-75 opacity-70';
        break;
      default:
        scale = 'scale-95 opacity-70';
    }
  } else {
    switch (size) {
      case 'xl':
        scale = 'scale-150 active:scale-[145%]';
        break;
      case 'lg':
        scale = 'scale-125 active:scale-[120%]';
        break;
      case 'sm':
        scale = 'scale-95 active:scale-[90%]';
        break;
      case 'xs':
        scale = 'scale-75 active:scale-[70%]';
        break;
      default:
        scale = 'scale-95 active:scale-[90%]';
    }
  }


  // eslint-disable-next-line
  let foo = [
    "bg-[#71717A]",
    "bg-[#7EE7FC]",
    "bg-[#3561FA]",
    "bg-[#7828C8]",
    "bg-[#F31260]",
    "bg-[#F5A524]",
    "bg-[#17C964]",

    "border-[#71717A]",
    "border-[#7EE7FC]",
    "border-[#3561FA]",
    "border-[#7828C8]",
    "border-[#F31260]",
    "border-[#F5A524]",
    "border-[#17C964]",

    "shadow-[0_8px_20px_-7px_#71717A]",
    "shadow-[0_8px_20px_-7px_#7EE7FC]",
    "shadow-[0_8px_20px_-7px_#3561FA]",
    "shadow-[0_8px_20px_-7px_#7828C8]",
    "shadow-[0_8px_20px_-7px_#F31260]",
    "shadow-[0_8px_20px_-7px_#F5A524]",
    "shadow-[0_8px_20px_-7px_#17C964]",

    "text-[#71717A]",
    "text-[#7EE7FC]",
    "text-[#3561FA]",
    "text-[#7828C8]",
    "text-[#F31260]",
    "text-[#F5A524]",
    "text-[#17C964]",
  ];

  const class_ = `px-2 text-sm py-1 m-2 rounded-lg ${animated_ ? "transition-all" : ""} ${className} ${rendererVariant(variant, HexColor)} ${scale}`;

  return (
    <button className={class_} {...otherProps} disabled={disabled}>
      {children}
    </button>
  );
};
