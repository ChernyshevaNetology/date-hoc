import React from "react";
import withDateTimePretty from "../HOC/withDateTimePretty";
import { TData } from "../types/types";

function DateTime(props: any) {
  return <p className="date">{props.date}</p>;
}

export default withDateTimePretty(DateTime);
