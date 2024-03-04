"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  initialTimeLeft?: TimeLeft; // Add optional initialTimeLeft prop
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  initialTimeLeft,
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as TimeLeft; // Cast timeLeft as TimeLeft
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    initialTimeLeft || calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className=" mt-5 flex items-start space-x-2 text-3xl font-bold lg:space-x-6">
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Days</p>
        <p className="min-w-[66px]  rounded bg-black p-3 text-white">{`${timeLeft?.days}`}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Hours</p>
        <p className="min-w-[66px]  rounded bg-black p-3 text-white">{`${addLeadingZero(
          timeLeft?.hours as number
        )}`}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Minutes</p>
        <p className="min-w-[66px]  rounded bg-black p-3 text-white">{`${addLeadingZero(
          timeLeft?.minutes as number
        )}`}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Seconds</p>
        <p className="min-w-[66px]  rounded bg-black p-3 text-white">{`${addLeadingZero(
          timeLeft?.seconds as number
        )}`}</p>
      </div>
    </div>
    // <div className="gradientTitle mt-5 flex items-center justify-center space-x-2 text-3xl font-bold">
    //   <div className="flex">
    //     <p>Days</p>
    //     <p>Hours</p>
    //     <p>Minute</p>
    //     <p>Seconds</p>
    //   </div>
    //   <p className="min-w-[60px]">{`${timeLeft?.days}`}</p>
    //   <p className="h-['100px'] w-['113px']  rounded bg-black p-3 text-white">
    //     {`${addLeadingZero(timeLeft?.hours as number)}`}
    //   </p>
    //   <p className="min-w-[60px]">{`${addLeadingZero(
    //     timeLeft?.minutes as number
    //   )}`}</p>
    //   <p className="min-w-[60px]">{`${addLeadingZero(
    //     timeLeft?.seconds as number
    //   )}`}</p>
    // </div>
  );
};

export default Countdown;
