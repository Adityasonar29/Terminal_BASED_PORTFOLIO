import { useState } from "react";
import { commandRegistry } from "./commands";
import { useSystemStore } from "../store/systemStore";

export default function Terminal() {
  const path = useSystemStore((s) => s.currentPath);
  const hostname = useSystemStore((s) => s.hostname);

  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const print = (line: string) =>
    setLines((prev) => [...prev, line]);

  const runCommand = (raw: string) => {
    const [cmd, ...args] = raw.trim().split(" ");
    const handler = commandRegistry[cmd];

    print(`user@portfolio:${path}$ ${raw}`);

    if (!handler) {
      print(`command not found: ${cmd}`);
      return;
    }

    handler({ args, print });
  };
  const user = useSystemStore((s) => s.user);

  return (
    <div>
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}

      <div className="flex">
        <label className="flex">

        <span>{user}@${hostname}~{path}$</span>

        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              runCommand(input);
              setInput("");
            }
          }}
          className="ml-2 bg-transparent outline-none flex-1"
        />
        </label>
      </div>
    </div>
  );
}
