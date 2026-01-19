export interface CommandContext {
  args: string[];
  print: (line: string) => void;
}

export type CommandHandler = (ctx: CommandContext) => void;
