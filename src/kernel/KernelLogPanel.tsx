import { useSystemStore } from "../store/systemStore";

export default function KernelLogPanel() {
  const logs = useSystemStore((s) => s.kernelLogs);

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-black/80 border-l border-green-500/30 text-green-400 font-mono text-xs p-4 overflow-y-auto">
      <div className="mb-2 text-green-300 font-semibold">
        KERNEL LOGS
      </div>

      {logs.length === 0 && (
        <div className="opacity-50">No system events</div>
      )}

      {logs.map((log, i) => (
        <div key={i} className="mb-1">
          <span className="opacity-50">[{log.time}]</span>{" "}
          {log.message}
        </div>
      ))}
    </div>
  );
}
