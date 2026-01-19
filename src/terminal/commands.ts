import { type CommandHandler } from "./types";
import { useSystemStore } from "../store/systemStore";

export const commandRegistry: Record<string, CommandHandler> = {
  help: ({ print }) => {
    print("Available commands:");
    print("help        - show this help");
    print("cd <path>   - change directory");
    print("projects    - list projects");
    print("clear       - clear terminal");
  },

  cd: ({ args, print }) => {
    const setPath = useSystemStore.getState().setPath;
    const pushKernelLog = useSystemStore.getState().pushKernelLog;

    if (!args[0]) {
      print("cd: missing operand");
      return;
    }

    setPath(args[0] as any);
    pushKernelLog(`cd to ${args[0]}`);
  },

  projects: ({ print }) => {
    print("Loading projects...");
    print("- JARVIS");
    print("- Terminal Portfolio");
  },
};
