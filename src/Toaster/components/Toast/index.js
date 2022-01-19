import "styled-components/macro";

import {
  getToastColors,
  getToastIcon,
  getToastTitle,
  useInterval
} from "./utils";
import {
  CloseIcon,
  Space,
  ToastButton,
  ToastButtonWrapper,
  ToastContent,
  ToastMessage,
  ToastTitle,
  ToastWrapper
} from "./styles";

function Toast({ type, message, id, duration, onClose }) {
  const handleClose = () => {
    onClose(id);
  };

  useInterval(() => {
    handleClose();
  }, duration);

  const colors = getToastColors(type);
  const title = getToastTitle(type);
  const Icon = getToastIcon(type);

  return (
    <ToastWrapper colors={colors}>
      <Icon />
      <Space width="12" />

      <ToastContent>
        <ToastTitle colors={colors}>{title}</ToastTitle>
        <ToastMessage colors={colors}>{message}</ToastMessage>
      </ToastContent>

      <ToastButtonWrapper>
        <ToastButton type="button" onClick={handleClose}>
          <CloseIcon colors={colors} />
        </ToastButton>
      </ToastButtonWrapper>
    </ToastWrapper>
  );
}

export default Toast;
