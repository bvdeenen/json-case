#!/usr/bin/env node

import JSON_ from 'json_'
import YAML from 'yaml'

import * as fs from "fs";

let camelCase = process.argv.indexOf('-c') >= 0
let isYaml = process.argv.indexOf('-y') >= 0
let f = process.argv.find((a) => fs.existsSync(a) && (a.endsWith(".json") || a.endsWith(".yaml")))
let data = fs.readFileSync(f ? f : 0, 'utf-8')

let parsed: any
try
{
    parsed = JSON_.parse(data)
}
catch (e)
{
  try
  {
    parsed = JSON_.parse(JSON.stringify(YAML.parse(data)))
  }
  catch (e)
  {
    process.stderr.write(`Can't parse ${f?f:''} ${data}`)
    process.exit(1)
  }
}
// parsed is always camel-case

let output: string = camelCase ? JSON.stringify(parsed) : JSON_.stringify(parsed);
if (isYaml)
{
    // regular JSON parser
    parsed = JSON.parse(output)
    process.stdout.write(YAML.stringify(parsed));
}
else
{
    process.stdout.write(output + '\n')
}
