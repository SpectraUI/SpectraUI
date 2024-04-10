import React, { useEffect, useState } from "react";

export interface CheckboxProps {
  onChage?: () => any;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(
    (props.checked && true) || false,
  );

  useEffect(() => {
    props.onChage && props.onChage();
  }, [checked, props]);

  return (
    <>
      <div
        className={`transition-all text-white m-2 border-2 aspect-square w-min h-min rounded-lg ${checked ? "bg-[#3561FA] border-[#3561FA]" : ""}`}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <svg
          className={`transition-all ${checked ? "visible" : "invisible"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </>
  );
};
