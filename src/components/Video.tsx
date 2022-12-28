import React from "react";
import DateTime from "./DateTime";
import { TData } from "../types/types";

const Video = ({ url, date }: TData) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <DateTime date={date} />
    </div>
  );
};

export default Video;
