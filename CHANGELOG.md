# Changelog

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
