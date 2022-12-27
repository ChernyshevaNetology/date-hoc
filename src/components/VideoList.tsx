import React from "react";
import Video from "./Video";
import { TList, TData } from "../types/types";

function VideoList(props: any) {
  console.log("list", props);
  return props.list.map(({ url, date }: TData) => (
    <Video key={url} url={url} date={date} />
  ));
}

export default VideoList;
