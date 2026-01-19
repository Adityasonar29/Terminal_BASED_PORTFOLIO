// import { create } from "zustand";

// type SystemState = {
//   bootStage: "boot" | "ready";
//   setBootStage: (stage: "boot" | "ready") => void;
// };

// export const useSystemStore = create<SystemState>((set) => ({
//   bootStage: "boot",
//   setBootStage: (stage) => set({ bootStage: stage }),
// }));
import { create } from "zustand";

type BootStage = "boot" | "ready";
type SystemPath = "/" | "/projects" | "/resume" | "/certificates";

interface KernelLog {
  time: string;
  message: string;  
}



interface SystemState {
  bootStage: BootStage;
  currentPath: SystemPath;
  kernelLogs: KernelLog[];

  owner: string;
  hostname: string;

  user: string | null;
  visitors: number;
  setUser: (u: string) => void;
  setVisitors: (v: number) => void;

  

  setBootStage: (stage: BootStage) => void;
  setPath: (path: SystemPath) => void;
  pushKernelLog: (message: string) => void;
}




export const useSystemStore = create<SystemState>((set) => ({
  bootStage: "boot",
  currentPath: "/",
  kernelLogs: [],

  owner: "Aditya_Vispute",
  hostname: "portfolioOS",


  user: null,
  visitors: 0,

  setUser: (u) => set({ user: u }),
  setVisitors: (v) => set({ visitors: v }),


  setBootStage: (stage) =>
    set(() => ({
      bootStage: stage,
    })),

  setPath: (path) =>
    set(() => ({
      currentPath: path,
    })),

  pushKernelLog: (message) =>
    set((state) => ({
      kernelLogs: [
        ...state.kernelLogs,
        {
          time: new Date().toLocaleTimeString(),
          message,
        },
      ],
    })),
}));
