import { FunctionComponent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string;
}

export const Input: FunctionComponent<InputProps> = ({ label, className = '', placeholder = '', value, type = 'Email', ...rest }) => {
  return (
    <div className={`group flex flex-col data-[hidden=true]:hidden w-full ${className}`} data-solt="base" data-has-elements="true" data-has-label="true" data-has-value="true">
      <div className={`relative w-full inline-flex shadow-sm shadow_p-data-[focus-visible=true]:ring-offset-background h-14 py-4 bg-gray-700 rounded-md px-2`} data-slot="input-wrapper">
        {!placeholder && (
          <label
            htmlFor={label}
            className="absolute z-10 pointer-events-none origin-top-left rtl:origin-all pe-2 max-w-full text-ellipsis overflow-hidden peer-hover:text-red-500 transition-all duration-200 transform group-focus-within:-translate-y-2 group-focus-within:text-xs group-focus-within:text-gray-300 text-gray-400"
            data-slot="label">
            {type}
          </label>
        )}
        {placeholder && (
          <label
            htmlFor={label}
            className="absolute z-10 pointer-events-none origin-top-left rtl:origin-all pe-2 max-w-full text-ellipsis overflow-hidden peer-hover:text-red-500 transition-all duration-200 transform -translate-y-3 text-xs"
            data-slot="label">
            {type}
          </label>
        )}
        <div className="inline-flex w-full items-center h-full box-bordr group-data-[has-label=true]:items-end pb-0.5" data-slot="inner-wrapper">
          <input
            {...rest}
            className={`peer w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground translate-y-2`}
            value={value}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

