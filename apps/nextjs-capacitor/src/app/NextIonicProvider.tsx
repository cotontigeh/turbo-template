"use client";
import { setupIonicReact } from "@ionic/react";
import { useEffect, useState } from "react";

interface NextIonicProviderProps {
  children: React.ReactNode;
}

setupIonicReact({});

export function NextIonicProvider({ children }: NextIonicProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div />;

  return children;
}
