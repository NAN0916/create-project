#!/usr/bin/env node

import { Plop, run } from "plop";
import minimist from "minimist";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const argv = minimist(args);
Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.resolve(__dirname, "../plopfile.cjs"),
  },
  (env) => Plop.execute(env, (evn) => {
    const options = {
      ...env,
      dest: process.cwd()
    }
    return run(options)
  })
);