import type { FormProps } from "@remix-run/react";
import { Form, useLocation } from "@remix-run/react";

type ModalFormProps = FormProps & React.RefAttributes<HTMLFormElement>;

export const ModalForm: React.FC<ModalFormProps> = ({
  children,
  action,
  ...props
}) => {
  const location = useLocation();

  return (
    <Form
      action={`${action || location.pathname}${location.search}`}
      {...props}
    >
      {children}
    </Form>
  );
};
