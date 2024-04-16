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
      className={"outline-none shadow rounded-md " + props.className}
    >
      {props.children}
    </dialog>
  );
};

export interface ModalTopProps {
  children: ReactNode;
}

export const ModalTopProps: React.FC<ModalTopProps> = (props) => {
  return <div className="flex gap-4 items-center">{props.children}</div>;
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
