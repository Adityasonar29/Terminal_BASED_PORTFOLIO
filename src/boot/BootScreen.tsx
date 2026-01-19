// import { useEffect, useState } from "react";
// import { useSystemStore } from "../store/systemStore";

// const bootLines = [
//   "Initializing system core...",
//   "Loading kernel modules...",
//   "Mounting virtual filesystem...",
//   "Starting user services...",
//   "System check complete.",
// ];

// export default function BootScreen() {
//   const setBootStage = useSystemStore((s) => s.setBootStage);
//   const [lineIndex, setLineIndex] = useState(0);

//   useEffect(() => {
//     if (lineIndex < bootLines.length - 1) {
//       const t = setTimeout(() => setLineIndex(lineIndex + 1), 500);
//       return () => clearTimeout(t);
//     } else {
//       const t = setTimeout(() => setBootStage("ready"), 1000);
//       return () => clearTimeout(t);
//     }
//   }, [lineIndex, setBootStage]);

//   return (
//     <div className="fixed inset-0 bg-black text-green-400 font-mono p-8">
//       <div className="max-w-xl space-y-2">
//         {bootLines.slice(0, lineIndex + 1).map((line, i) => (
//           <div key={i} className="tracking-wide">
//             {"> "} {line}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useSystemStore } from "../store/systemStore";

export default function BootScreen() {
  const setBootStage = useSystemStore((s) => s.setBootStage);
  const pushKernelLog = useSystemStore((s) => s.pushKernelLog);

  useEffect(() => {
    const t = setTimeout(() => {
      pushKernelLog("Kernel initialized");
      pushKernelLog("Userland ready");
      setBootStage("ready");
    }, 2500);

    return () => clearTimeout(t);
  }, [setBootStage, pushKernelLog]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-green-400 font-mono">
      INITIALIZING SYSTEM
    </div>
  );
}
