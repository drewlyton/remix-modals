import { ModalForm } from "@/remix-modals";

type Props = {};

export const NewTweetForm: React.FC<Props> = () => {
  return (
    <ModalForm method="post" action="/tweets">
      <button>Tweet</button>
    </ModalForm>
  );
};
