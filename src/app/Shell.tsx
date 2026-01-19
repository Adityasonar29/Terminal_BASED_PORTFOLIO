import { useEffect } from "react";
import { useSystemStore } from "../store/systemStore";
import Terminal from "../terminal/Terminal";

export default function Shell() {
  const path = useSystemStore((s) => s.currentPath);
  const pushKernelLog = useSystemStore((s) => s.pushKernelLog);

  useEffect(() => {
    pushKernelLog(`Shell entered ${path}`);
  }, [path, pushKernelLog]);

  return (
    <div className="relative h-screen w-screen bg-black text-green-400 font-mono">
      {/* Main workspace */}
      <div className="absolute inset-0 p-6 pr-96">
        <Terminal />
      </div>
    </div>
  );
}
