import type React from "react";

type ModalRouteProps = {
  path: string;
  component: JSX.Element;
  conditional?: boolean;
};

export const ModalRoute: React.FC<ModalRouteProps> = ({
  component,
  conditional = true,
}) => {
  return conditional ? component : null;
};
