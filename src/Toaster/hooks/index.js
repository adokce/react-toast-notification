import { useContext } from "react";
import ToasterContext from "../context";

const useToast = () => {
  const context = useContext(ToasterContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToasterProvider");
  }

  const triggerToast = ({ type, message, duration = 6000 }) => {
    context.dispatch({ type: type, payload: { message, duration } });
  };

  return { triggerToast };
};

// Only for internal Toaster use
const useToastInternal = () => {
  const context = useContext(ToasterContext);

  if (context === undefined) {
    throw new Error("useToastInternal must be used within a ToasterProvider");
  }

  const closeToast = (id) => {
    context.dispatch({ type: "close", payload: { id } });
  };

  const notifications = context.state.notifications;

  return { notifications, closeToast };
};

export { useToast, useToastInternal };
