# Inconsistent result of pnpm install

> :warning: **This repo exists only for bug reproduction purpose**

#### In project root:

1. run `pnpm i && pnpm build --filter 'com.packages.common-package'`
1. run `git status` – shows nothing
1. run again `pnpm i && pnpm build --filter 'com.packages.common-package'`
1. run `git status` – shows changes in _packages/common-package/dist/bundle.js_

#### Temp Fix:

1. remove _pnpm-lock.yaml_
1. remove all _node_modules_ folders in project
1. run `pnpm i && pnpm build --filter 'com.packages.common-package'`
1. run `git status` – shows nothing, issue fixed til next `pnpm i`
