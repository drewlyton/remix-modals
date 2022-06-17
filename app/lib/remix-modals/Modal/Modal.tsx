import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";

type ModalProps = React.RefAttributes<HTMLFormElement>;

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let current = ref.current;
    if (current) {
      current.showModal();
    }
    return () => {
      if (current) current.close();
    };
  }, []);
  return (
    <dialog {...props} ref={ref} onClick={clickHandler}>
      {children}
    </dialog>
  );
};

const clickHandler = (e: MouseEvent<HTMLDialogElement>) => {
  const target = e.target as HTMLDialogElement;
  if (target.tagName !== "DIALOG") return;
  const rect = target.getBoundingClientRect();

  const clickedInDialog =
    rect.top - 25 <= e.clientY &&
    e.clientY <= rect.top + rect.height + 25 &&
    rect.left <= e.clientX + 25 &&
    e.clientX - 25 <= rect.left + rect.width;

  if (clickedInDialog === false && window) {
    window.location.href = window.location.href.replace(location.search, "");
  }
};
