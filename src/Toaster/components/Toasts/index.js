import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import { useToastInternal } from "../../hooks";
import Toast from "../Toast";

const Toasts = () => {
  const { notifications, closeToast } = useToastInternal();

  return (
    <ToastsPortal>
      <Temp>
        {notifications.map((n) => {
          return <Toast key={n.id} {...n} onClose={closeToast} />;
        })}
      </Temp>
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

const Temp = styled.div`
  > * {
    margin-top: 25px;
  }

  > *:first-child {
    margin-top: 0px;
  }

  overflow: hidden; // Prevent horizontal scrollbar from appearing
  inset: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;

  /* mobile */
  justify-content: center;
  align-items: center;

  /* desktop */
  @media (min-width: 630px) {
    padding: 68px 0px;

    justify-content: flex-end;
  }
`;
