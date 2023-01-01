import React from "react";
import withDateTimePretty from "../HOC/withDateTimePretty";

export type TDate = {
  date: string;
};

const DateTime = ({ date }: TDate) => {
  return <p className="date">{date}</p>;
};

export default withDateTimePretty(DateTime);
