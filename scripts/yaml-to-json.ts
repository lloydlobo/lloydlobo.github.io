#!/usr/bin/env node

import fs from "fs"
import yaml from "js-yaml"
import { sync as globSync } from "glob"

function convertFile(input: string, output?: string, pretty = false): string {
  const data = yaml.load(fs.readFileSync(input, "utf8"))
  const json = JSON.stringify(data, null, pretty ? 2 : 0)
  const outputPath = output || input.replace(/\.(yaml|yml)$/, ".json")
  fs.writeFileSync(outputPath, json)
  console.log(`✅ ${input} → ${outputPath}`)
  return outputPath
}

function convertGlob(pattern: string, pretty = false): void {
  const files = globSync(pattern)
  if (files.length === 0) {
    console.log(`No files found: ${pattern}`)
    return
  }
  console.log(`Found ${files.length} files...`)
  files.forEach((file) => convertFile(file, undefined, pretty))
}

function showHelp(): void {
  console.log(`
Usage:
  npm run yaml2json <input> [output]     # Convert single file
  npm run yaml2json -- --glob <pattern> # Convert multiple files
  npm run yaml2json -- --help           # Show help

Options:
  --pretty    Pretty-print JSON
  --help      Show help

Examples:
  npm run yaml2json file.yaml
  npm run yaml2json file.yaml out.json --pretty
  npm run yaml2json -- --glob "*.yaml" --pretty
  `)
}

function main(): void {
  const args = process.argv.slice(2)
  const pretty = args.includes("--pretty")
  const cleanArgs = args.filter((arg) => !arg.startsWith("--"))

  if (args.includes("--help") || args.length === 0) {
    showHelp()
    return
  }

  if (args.includes("--glob")) {
    const pattern = args[args.indexOf("--glob") + 1]
    if (!pattern) {
      console.error("Error: --glob needs a pattern")
      process.exit(1)
    }
    convertGlob(pattern, pretty)
  } else {
    const [input, output] = cleanArgs
    if (!input) {
      console.error("Error: Input file required")
      process.exit(1)
    }
    if (!fs.existsSync(input)) {
      console.error(`Error: File not found: ${input}`)
      process.exit(1)
    }
    convertFile(input, output, pretty)
  }
}

export { convertFile, convertGlob }

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
