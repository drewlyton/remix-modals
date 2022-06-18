import { useEffect, useRef } from "react";
import { Modal } from "@/remix-modals";
import { NewTweetForm } from "../NewTweetForm";

type Props = { title?: string };

export const NewTweetModal: React.FC<Props> = ({ title = "I'm a modal" }) => {
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
    <Modal>
      <div>{title}</div>
      <NewTweetForm />
    </Modal>
  );
};
