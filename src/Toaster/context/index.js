import { createContext } from "react";

const defaultState = { notifications: [] };
const defaultContextValue = {
  state: defaultState,
  dispatch: () => {}
};

const ToasterContext = createContext(defaultContextValue);

export default ToasterContext;
