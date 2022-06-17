import { Form, useSearchParams } from "@remix-run/react";

type Props = {};

export const NewTweetForm: React.FC<Props> = () => {
  const [searchParams] = useSearchParams();
  return (
    <Form method="post" action={`/tweets?${searchParams.toString()}`}>
      <div>I'm a modal!</div>
      <button>Tweet</button>
    </Form>
  );
};
