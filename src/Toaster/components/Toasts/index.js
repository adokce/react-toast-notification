import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useToastInternal } from "../../hooks";
import Toast from "../Toast";
import { ToastsWrapper } from "./styles";

const Toasts = () => {
  const { notifications, closeToast } = useToastInternal();

  return (
    <ToastsPortal>
      <ToastsWrapper>
        {notifications.map((n) => {
          return <Toast key={n.id} {...n} onClose={closeToast} />;
        })}
      </ToastsWrapper>
    </ToastsPortal>
  );
};

export default Toasts;

const ToastsPortal = ({ children }) => {
  const [elementCreated, setElementCreated] = useState(false);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = "react-toast-notification";
    div.style = "pointer-events: none; position:absolute; inset:0;"; // Make portal spread across screen
    document.getElementsByTagName("body")[0].prepend(div);
    setElementCreated(true);

    return () => document.getElementById("react-toast-notification").remove();
  }, []);

  return elementCreated ? (
    ReactDOM.createPortal(
      children,
      document.getElementById("react-toast-notification")
    )
  ) : (
    <></>
  );
};
