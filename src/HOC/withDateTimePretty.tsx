import React from "react";
import { handleDate } from "../utils";

type TDate = {
  date: string | Date;
};

const withDateTimePretty = (WrappedComponent: any) => {
  return ({ date }: TDate) => {
    return <WrappedComponent date={handleDate(new Date(date))} />;
  };
};

export default withDateTimePretty;
