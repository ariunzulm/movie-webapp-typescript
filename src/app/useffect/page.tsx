"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <span>{count}</span>
    </div>
  );
}
