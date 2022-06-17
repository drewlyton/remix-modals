import { Outlet } from "@remix-run/react";

import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request, params }) => {
  // return json({ hello: "hello" });
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
