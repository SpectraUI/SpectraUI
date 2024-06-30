import { FunctionComponent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

export const Input: FunctionComponent<InputProps> = ({ disabled = false, className = '', placeholder = '', value, type = 'Email', id = '', ...rest }) => {
  return (
    <div className={`group flex flex-col data-[hidden=true]:hidden w-full bg-gray-800 shadow-md shadow-gray-800/40 rounded-md ${className}`} data-solt="base" data-has-elements="true" data-has-label="true" data-has-value="true">
      <div className={`relative w-full inline-flex shadow-sm shadow_p-data-[focus-visible=true]:ring-offset-background h-14 py-4 rounded-md px-2`} data-slot="input-wrapper">
        {!placeholder && !disabled && (
          <label
            className="absolute z-10 pointer-events-none origin-top-left rtl:origin-all pe-2 max-w-full text-ellipsis overflow-hidden peer-hover:text-red-500 transition-all duration-200 transform group-focus-within:-translate-y-2 group-focus-within:text-xs group-focus-within:text-gray-300 text-gray-400"
            data-slot="label"
            htmlFor={id}
          >
            {type}
          </label>
        )}
        {placeholder || disabled && (
          <label
            htmlFor={id}
            className="absolute z-10 pointer-events-none origin-top-left rtl:origin-all pe-2 max-w-full text-ellipsis overflow-hidden peer-hover:text-red-500 transition-all duration-200 transform -translate-y-3 text-xs"
            data-slot="label">
            {type}
          </label>
        )}
        <div className="inline-flex w-full items-center h-full box-bordr group-data-[has-label=true]:items-end pb-0.5" data-slot="inner-wrapper">
          {!disabled ? (
            <input
              {...rest}
              className={`peer w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground translate-y-2`}
              value={value}
              placeholder={placeholder}
              id={id}
              type={type}
            />
          ) : (
            <span
              className={`peer w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground translate-y-2 pointer-events-none`}
              id={id}
            >
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

