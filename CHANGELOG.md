# Changelog

## v2.5.3-ts

	- release: template 2.5.x npm publish UNBLOCKED (PR 12+13: browser-safe publish:esbuild via iife + node/types externals — 0 eager node:/*/types top-level imports in the browser bundle; publish:web/webassembly/static gates green); version bump 2.5.2-ts -> 2.5.3-ts


## v2.5.3-ts

	- release: template publish unblocked (PR 12+13: browser-safe publish:esbuild via iife + node/'types' externals; 2.5.x template). npm version bump 2.5.2-ts -> 2.5.3-ts
	- fix: publish:web gate — npm run build passes end-to-end including publish:esbuild (iife browser-safe bundle: 0 eager node:/*types top-level imports; node ready-state + types stay lazy in browser)


## v2.5.2-ts

	- publish:static now sweeps macOS AppleDouble droppings cross-platform (clean:appledouble, pre-commit + postpublish:static)
	- Drop deprecated qcobjects-command-publish-static (built-in in cli publish:static)
	- Bump qcobjects >=2.5.142 / qcobjects-sdk >=2.5.105 to satisfy qcobjects-cli@2.6.1 peers
	- Override @types/qcobjects(-sdk) to HTTPS tarballs; CI npm install --legacy-peer-deps
	- Remove committed AppleDouble droppings from tree

## v2.5.1-ts

	- CI fixes: registry override + HTTPS types pins (unblocks npm install in publish)

## v2.5.0-ts

	- License migration LGPLv3 → MIT (LICENSE.txt, package.json, source headers)
	- Build scripts delegate to CLI (`build:ts`/`build:ts-types` via `qcobjects build:typescript`; new `build:esbuild`/`build:esb` passthroughs)
	- See product-specs 09-license and 15-unified-vision-v3 (Phase 1)
