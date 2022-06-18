import { ModalForm } from "@/remix-modals";

type Props = {};

export const NewTweetForm: React.FC<Props> = () => {
  return (
    <ModalForm method="post" action="/tweets">
      <div>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" style={{ display: "block" }} />
      </div>
      <button>Tweet</button>
    </ModalForm>
  );
};
