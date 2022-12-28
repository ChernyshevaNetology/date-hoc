import React, { useState } from "react";
import VideoList from "./components/VideoList";
import { data } from "./data/data";
import { TData } from "./types/types";

const App = () => {
  const [list, setList] = useState<TData[]>(data);

  return <VideoList list={list} />;
};

export default App;
