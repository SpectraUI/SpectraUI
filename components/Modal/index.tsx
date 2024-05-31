import { DialogHTMLAttributes, ReactNode, useEffect } from "react";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  onBlur?: () => any;
  visible: boolean;
  id: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    const setVisibility = () => {
      const element = document.getElementById(
        String(props.id),
      ) as HTMLDialogElement;

      props.visible ? element.showModal() : element.close();
    };

    setVisibility();
  }, [props.visible, props.id]);

  return (
    <dialog
      id={String(props.id)}
      className={"outline-none shadow rounded-md p-4 " + props.className}
    >
      {props.children}
    </dialog>
  );
};

export interface ModalTopProps {
  children: ReactNode;
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const ModalTop: React.FC<ModalTopProps> = (props) => {
  switch (props.justify) {
    case "start":
      return (
        <div className="flex justify-start items-center gap-2">
          {props.children}
        </div>
      );
    case "center":
      return (
        <div className="flex justify-center items-center gap-2">
          {props.children}
        </div>
      );
    case "end":
      return (
        <div className="flex justify-end items-center gap-2">
          {props.children}
        </div>
      );
    case "between":
      return (
        <div className="flex justify-between items-center gap-2">
          {props.children}
        </div>
      );
    case "around":
      return (
        <div className="flex justify-around items-center gap-2">
          {props.children}
        </div>
      );
    case "evenly":
      return (
        <div className="flex justify-evenly items-center gap-2">
          {props.children}
        </div>
      );
    default:
      return (
        <div className="flex justify-start items-center gap-2">
          {props.children}
        </div>
      );
  }
};

export interface ModalTitleProps {
  children: ReactNode;
}

export const ModalTitle: React.FC<ModalTitleProps> = (props) => {
  return <p className="m-2 text-2xl">{props.children}</p>;
};

export interface ModalOptionsProps {
  children?: ReactNode;
  onClick?: () => any;
  className?: string;
}

export const ModalOptions: React.FC<ModalOptionsProps> = (props) => {
  return (
    <div
      onClick={() => props.onClick && props.onClick()}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export interface ModalContentProps {
  children: ReactNode;
}

export const ModalBody: React.FC<ModalContentProps> = (props) => {
  const { children } = props;

  return <div className="">{children}</div>;
};
