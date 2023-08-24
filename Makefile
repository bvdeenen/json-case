
.PHONY: clean install dist-clean

build: dist/cli.js

dist/cli.js: src/cli.ts package.json
	npm run build

clean:
	rm -rf dist

dist-clean: clean
	rm -rf node_modules

install: build
	npm install -g



