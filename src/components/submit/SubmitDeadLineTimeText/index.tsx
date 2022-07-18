/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { TimeResponse } from "src/api";
import { useFetchServerTime } from "src/hook/query";

export const SubmitDeadLineTimeText = () => {
  const { data: fetchTime } = useFetchServerTime();
  const timeZeroFill = (times: number) => `00${times}`.slice(-2);

  const getDateDiff = (today: Date, date: Date) => {
    const diff = new Date(date.getTime() - today.getTime());
    return {
      year: diff.getUTCFullYear() - 1970,
      month: diff.getUTCMonth(),
      day: diff.getUTCDate() - 1,
      hour: diff.getUTCHours(),
      minute: diff.getUTCMinutes(),
      second: diff.getUTCSeconds(),
    };
  };

  const ToDay = new Date();

  const todayDate = new Date(
    fetchTime?.result.year as number,
    fetchTime?.result.month as number,
    fetchTime?.result.day as number,
    fetchTime?.result.hour as number,
    fetchTime?.result.minute as number,
    fetchTime?.result.second as number,
  );

  // const sumbitDate = new Date(2022, 8, 15, 0, 0, 0);
  const sumbitDate = new Date(2022, 6, 21, 15, 0, 0);
  // const sumbitDate = new Date(2022, 6, 18, 11, 5, 0);
  const [time, setTime] = useState<TimeResponse>({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getDateDiff(ToDay, time.year === -1 ? todayDate : sumbitDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      {timeZeroFill(time.day)}:{timeZeroFill(time.hour)}:
      {timeZeroFill(time.minute)}:{timeZeroFill(time.second)}
    </div>
  );
};
