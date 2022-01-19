import { useEffect, useRef } from "react";

import { ReactComponent as Success } from "../../icons/icon_success.svg";
import { ReactComponent as Warning } from "../../icons/icon_warning.svg";
import { ReactComponent as Danger } from "../../icons/icon_danger.svg";

const COLORS = {
  success_bg: "#6FCF97",
  success_primary: "#0F552C",
  success_accent: "#135E32",
  success_shadow: "0px 2px 26px rgba(82, 215, 0, 0.1)",

  warning_bg: "#F2C94C",
  warning_primary: "#6E5404",
  warning_accent: "#866912",
  warning_shadow: "0px 2px 26px rgba(215, 0, 0, 0.1);",

  danger_bg: "#EB5757",
  danger_primary: "#FFFFFF",
  danger_accent: "#FFE8E8",
  danger_shadow: "0px 2px 26px rgba(215, 0, 0, 0.1);"
};

export const getToastColors = (type) => {
  switch (type) {
    case "success": {
      return {
        background: COLORS.success_bg,
        primary: COLORS.success_primary,
        accent: COLORS.success_accent,
        shadow: COLORS.success_shadow
      };
    }
    case "warning": {
      return {
        background: COLORS.warning_bg,
        primary: COLORS.warning_primary,
        accent: COLORS.warning_accent,
        shadow: COLORS.warning_shadow
      };
    }
    case "danger": {
      return {
        background: COLORS.danger_bg,
        primary: COLORS.danger_primary,
        accent: COLORS.danger_accent,
        shadow: COLORS.danger_shadow
      };
    }
    default: {
      throw new Error(`Can't get colors. Invalid type: ${type}`);
    }
  }
};

export const getToastTitle = (type) => {
  switch (type) {
    case "success": {
      return "Success";
    }
    case "warning": {
      return "Warning";
    }
    case "danger": {
      return "Danger";
    }
    default: {
      throw new Error(`Can't get background color. Invalid type: ${type}`);
    }
  }
};

export const getToastIcon = (type) => {
  switch (type) {
    case "success": {
      return Success;
    }
    case "warning": {
      return Warning;
    }
    case "danger": {
      return Danger;
    }
    default: {
      throw new Error(`Can't get icon. Invalid type: ${type}`);
    }
  }
};

// Stolen from Dan Abramov's https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
