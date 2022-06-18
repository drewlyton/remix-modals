import { useModalFetcher } from "@/remix-modals";

type Props = {};

export const NewTweetForm: React.FC<Props> = () => {
  const { Form, action, data } = useModalFetcher("/tweets");
  return (
    <Form method="post" action={action}>
      <div>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" style={{ display: "block" }} />
        {data?.errors.content ? (
          <p style={{ color: "red" }}>{data.errors.content}</p>
        ) : null}
      </div>
      <button>Tweet</button>
    </Form>
  );
};
