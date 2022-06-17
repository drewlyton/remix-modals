import { useSearchParams } from "@remix-run/react";
import React from "react";

type ModalRouterProps = {
  routes: ModalRouteProps[];
};

type ModalRouteProps = {
  key: string;
  component: JSX.Element;
};

type KeyedRoutes = Record<string, JSX.Element>;

export const ModalRouter: React.FC<ModalRouterProps> = ({ routes }) => {
  const keyedRoutes = routes.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.component }),
    {}
  ) as unknown as KeyedRoutes;

  const [searchParams] = useSearchParams();
  const modalParam = searchParams.get("rmodal") || "";
  const Route = keyedRoutes[modalParam];

  return Route || <></>;
};
