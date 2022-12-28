import React from "react";
import Video from "./Video";
import { TList, TData } from "../types/types";

const VideoList = ({ list }: TList) => {
  return (
    <>
      {list.map(({ url, date }: TData) => (
        <Video key={url} url={url} date={date} />
      ))}
    </>
  );
};

export default VideoList;
