import type { Tweet } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  const tweets = await db.tweet.findMany();
  return json({ tweets });
};

type LoaderData = {
  tweets: Tweet[];
};

export default function () {
  const data = useLoaderData<LoaderData>();
  console.log(data);
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="?rmodal=new_tweet">New Tweet</a>
          </li>
          <li>
            <a href="?rmodal=edit_tweet">Edit Tweet</a>
          </li>
        </ul>
        <div>
          <h1>The Tweets</h1>
          <div>
            {data.tweets.map((tweet) => (
              <div key={tweet.id}>{tweet.content}</div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
