import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import Toasts from "./components/Toasts";
import ToasterContext from "./context";

const defaultState = { notifications: [] };

const toastReducer = (state, action) => {
  switch (action.type) {
    case "success":
    case "warning":
    case "danger": {
      return {
        notifications: [
          {
            type: action.type,
            message: action.payload.message,
            duration: action.payload.duration,
            id: uuidv4() // Assign unique id when creating a toast
          },
          ...state.notifications
        ]
      };
    }
    case "close": {
      return {
        notifications: state.notifications.filter((n) => {
          return n.id !== action.payload.id;
        })
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ToasterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, defaultState);

  const value = { state, dispatch };
  return (
    <ToasterContext.Provider value={value}>{children}</ToasterContext.Provider>
  );
};

const Toaster = ({ children }) => {
  return (
    <ToasterProvider>
      <Toasts />
      {children}
    </ToasterProvider>
  );
};

export default Toaster;
