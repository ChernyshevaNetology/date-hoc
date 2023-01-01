import React from "react";
import { handleDate } from "../utils";
import { TDate } from "../components/DateTime";

type TDateHoc = {
  date: string | Date;
};
function withDateTimePretty(WrappedComponent: React.FC<TDate>) {
  return ({ date }: TDateHoc) => {
    return <WrappedComponent date={handleDate(new Date(date))} />;
  };
}

export default withDateTimePretty;
