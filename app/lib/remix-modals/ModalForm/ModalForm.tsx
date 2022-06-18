/* eslint-disable react/display-name */
import type { FormProps } from "@remix-run/react";
import { Form, useLocation } from "@remix-run/react";
import { forwardRef } from "react";

type ModalFormProps = FormProps & React.RefAttributes<HTMLFormElement>;

export const ModalForm = forwardRef<HTMLFormElement, ModalFormProps>(
  ({ children, action, ...props }, ref) => {
    const location = useLocation();

    return (
      <Form
        ref={ref}
        action={`${action || location.pathname}${location.search}`}
        {...props}
      >
        {children}
      </Form>
    );
  }
);
