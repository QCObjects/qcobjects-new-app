# Changelog

## v2.5.6-ts

	- fix: repository.url QuickCorp -> QCObjects (+type file -> git). Sigstore provenance (OIDC) hard-requires package.json repo to match the true repo QCObjects/qcobjects-new-app (E422 on v2.5.5-ts: attestation vs QuickCorp URL). URL set to exactly https://github.com/QCObjects/qcobjects-new-app.
	- version: 2.5.5-ts -> 2.5.6-ts (v2.5.5-ts tag points at the pre-URL-fix main; tags immutable -> new number)


## v2.5.5-ts

	- fix: npmpublish workflow now passes explicit --tag latest on the default branch (modern npm refuses bare npm publish for prerelease versions: You must specify a tag using --tag when publishing a prerelease version — killed the v2.5.4-ts publish after build went green; the npm@latest upgrade for OIDC is what enforces it).
	- version: 2.5.4-ts -> 2.5.5-ts (v2.5.4-ts tag points at the pre-workflow-fix main; tags immutable -> new number)


## v2.5.4-ts

	- fix: neutralize inherited tsconfig paths wildcard ("*": ["src/*"] from qcobjects/tsconfig.json hijacked bare imports into node_modules/qcobjects/src/<lowercase> — hard Cannot-read-file error on case-sensitive CI runners; invisible on case-insensitive dev mounts). Template now sets baseUrl+explicit paths (keeps case-correct types mapping). Verified in case-sensitive clean-room sim: rc=1+exact CI error before -> rc=0+zero warnings after; iife bundle browser-safe (0 eager node:/types imports).
	- version: 2.5.3-ts -> 2.5.4-ts (v2.5.3-ts tag points at the unpublishable pre-fix commit; tags immutable -> new number)


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
