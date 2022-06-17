import { Outlet, useSearchParams } from "@remix-run/react";
import { NewTweetModal } from "~/components/NewTweetModal";

import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request, params }) => {
  // return json({ hello: "hello" });
  return redirect("/tweets");
};

export default function () {
  const [searchParams] = useSearchParams();
  return (
    <>
      <div>
        Layout
        <div style={{ color: "blue", border: "1px solid blue" }}>
          <Outlet />
        </div>
      </div>
      {searchParams.get("compose_tweet") && <NewTweetModal />}
    </>
  );
}
