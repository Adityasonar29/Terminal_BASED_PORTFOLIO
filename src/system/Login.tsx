import { useEffect } from "react";
import { useSystemStore } from "../store/systemStore";

export default function Login() {
  const setUser = useSystemStore((s) => s.setUser);
  const visitors = useSystemStore((s) => s.visitors);
  const setVisitors = useSystemStore((s) => s.setVisitors);
  const pushKernelLog = useSystemStore((s) => s.pushKernelLog);
 const Owner = useSystemStore((s) => s.owner);

  useEffect(() => {
    const hasCounted = sessionStorage.getItem("counted");

    if (!hasCounted) {
        const count = Number(localStorage.getItem("visitors") || 0) + 1;
        localStorage.setItem("visitors", String(count));
        sessionStorage.setItem("counted", "true");
        setVisitors(count);
    } else {
        setVisitors(Number(localStorage.getItem("visitors") || 0));
    }
}, [setVisitors]);

  return (
    <div className="h-screen w-screen bg-black text-green-400 font-mono flex flex-col justify-center items-center">
      <div className="text-lg mb-2">Welcome to PortfolioOS</div>

      <div className="text-xs opacity-60 mb-4">
        Visitors since boot: {visitors}
      </div>


      <button
        onClick={() => {
        setUser(Owner);
        pushKernelLog("User logged in");
        }}
            className="border px-4 py-2 hover:bg-green-400 hover:text-black"
        >
        Login To PorfolioOS
      </button>
    </div>
  );
}
