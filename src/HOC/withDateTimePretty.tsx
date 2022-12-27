import React, { Component, ComponentType } from "react";
import { handleDate } from "../utils";

type TDate = {
  date: string;
};

function withDateTimePretty(WrappedComponent: any) {
  return ({ ...props }) => {
    console.log("props", props);
    return <WrappedComponent date={handleDate(new Date(props.date))} />;
  };
}

export default withDateTimePretty;
