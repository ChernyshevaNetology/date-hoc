import React from "react";
import DateTime from "./DateTime";
import { TData } from "../types/types";

function Video(props: TData) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <DateTime date={props.date} />
    </div>
  );
}

export default Video;
