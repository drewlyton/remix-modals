import { useSearchParams } from "@remix-run/react";
import React from "react";

type ModalRouterProps = {
  param?: string;
};

type KeyedRoutes = Record<string, JSX.Element>;

export const ModalRouter: React.FC<ModalRouterProps> = ({
  children,
  param = "rmodal",
}) => {
  const childProps =
    React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return;
      return child.props;
    }) || [];
  const keyedRoutes = childProps.reduce(
    (obj, item) => Object.assign(obj, { [item.path]: item.component }),
    {}
  ) as unknown as KeyedRoutes;

  const [searchParams] = useSearchParams();
  const modalParam = searchParams.get(param) || "";
  const Route = keyedRoutes[modalParam];

  return Route || <></>;
};
