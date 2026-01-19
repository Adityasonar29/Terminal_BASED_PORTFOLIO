import BootScreen from "./boot/BootScreen";
import KernelLogPanel from "./kernel/KernelLogPanel";
import Shell from "./app/Shell";
import Login from "./system/Login";
import { useSystemStore } from "./store/systemStore";

export default function App() {
  const bootStage = useSystemStore((s) => s.bootStage);
  const user = useSystemStore((s) => s.user);

  // Boot screen is isolated
  if (bootStage === "boot") {
    return <BootScreen />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">

      {/* 🔹 FIXED BACKGROUND (never repeats, never scrolls) */}
         <div className="relative w-screen h-screen">

      {/* BACKGROUND — MUST ALWAYS RENDER */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "url(/illustration-rain-futuristic-city.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* 🔹 Blur + dark overlay */}
      {/* BLUR + DARK OVERLAY */}
    <div
      className="fixed inset-0 z-10"
      style={{
        backgroundColor: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(124px)",
        WebkitBackdropFilter: "blur(142px)",
      }}
    />


      {/* 🔹 UI Layer */}
      <div className="relative z-10 h-full w-full">
        <KernelLogPanel />
        {!user ? <Login /> : <Shell />}
      </div>

    </div>
    </div>
  )};
