import React, { useState } from "react";
import VideoList from "./components/VideoList";
import { data } from "./data/data";
import { TData } from "./types/types";

export default function App() {
  const [list, setList] = useState<TData[]>(data);

  return <VideoList list={list} />;
}
