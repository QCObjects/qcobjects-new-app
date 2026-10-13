#!/usr/bin/env node
/*
publish:static copies build/ into public/ but never deletes, so a template that
was renamed or removed from src/ survives in build/ and is republished on every
subsequent build. Renaming card-image.svg through placeholder.svg and
svg-component.svg left both names in public/templates/components/ forever.

Usage: node scripts/clean-stale-templates.js <dir> [<dir> ...]

Pass the DESTINATION of the copy that is about to run, never its source:
  build:static    src/    -> build/       clean build/templates
  publish:static  build/  -> public/      clean public/templates

Cleaning a source instead would delete the files the copy is meant to publish,
and the build would silently ship no templates at all.
*/
const fs = require('node:fs');

const targets = process.argv.slice(2);

if (targets.length === 0) {
  console.error('usage: node scripts/clean-stale-templates.js <dir> [<dir> ...]');
  process.exit(1);
}

let removed = 0;

for (const target of targets) {
  if (!fs.existsSync(target)) {
    continue;
  }
  fs.rmSync(target, { recursive: true, force: true });
  removed += 1;
}

console.log('stale template dirs removed:', removed);