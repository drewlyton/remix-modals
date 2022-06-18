import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { db } from "~/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const content = formData.get("content");

  if (content === "poop") return json({ errors: { content: "No poop" } });
  await db.tweet.create({
    data: { content: formData.get("content")?.toString() },
  });
  return redirect("/tweets");
};

export default function () {
  return (
    <>
      <div>
        Layout
        <div style={{ color: "blue", border: "1px solid blue" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
