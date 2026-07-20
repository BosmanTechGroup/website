"use client";
import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function Calendly({ calendlyUrl }: { calendlyUrl: string }) {
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    const hasMounted = () => {
      setMounted(true);
    }
    hasMounted();
  }, []);

  return (
    <div className="w-full">
      {mounted && <InlineWidget
        url={`https://calendly.com/${calendlyUrl}`}
      />}
    </div>
  );
}
