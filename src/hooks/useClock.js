import moment from "moment";
import { useState } from "react";

export const useClock = (formatParams = "hh:mm:ssA") => {
  const [clock, setClock] = useState("");

  const updateTime = () => {
    const now = moment();
    const humanReadable = now.format(formatParams);
    setClock(humanReadable);
  };

  return {
    clock,
    updateTime,
  };
};
