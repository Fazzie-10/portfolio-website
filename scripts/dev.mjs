// Starts all four Astro dev servers without going through npm/cmd,
// so paths with spaces (e.g. "C:\Users\Joshua Akintayo") work on Windows.
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const astroBin = path.join(root, "node_modules", "astro", "bin", "astro.mjs");

const apps = [
  ["hub", 4321],
  ["analystfemi", 4322],
  ["automation", 4323],
  ["insightshub", 4324],
];

const only = process.argv[2];
const children = apps
  .filter(([name]) => !only || name === only)
  .map(([name, port]) => {
    const child = spawn(process.execPath, [astroBin, "dev", "--port", String(port)], {
      cwd: path.join(root, "apps", name),
      stdio: ["ignore", "pipe", "pipe"],
    });
    const prefix = `[${name}] `;
    const pipe = (stream, out) =>
      stream.on("data", (buf) => {
        for (const line of buf.toString().split(/\r?\n/)) if (line.trim()) out.write(prefix + line + "\n");
      });
    pipe(child.stdout, process.stdout);
    pipe(child.stderr, process.stderr);
    child.on("exit", (code) => console.log(`${prefix}exited with code ${code}`));
    return child;
  });

const stop = () => {
  for (const c of children) c.kill();
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
