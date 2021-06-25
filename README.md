# Inconsistent result of pnpm install

> :warning: **This repo exists only for bug reproduction purpose**

#### In project root:

1. run `pnpm i && pnpm build --filter 'b-package-common'`
1. webpack outputs bundle size ~ _bundle.js (2.69 MiB)_

   this is because ag-grid-community imported **twice**

1. remove _pnpm-lock.yaml_
1. remove all _node_modules_ folders in project
1. run again `pnpm i && pnpm build --filter 'b-package-common'`
1. webpack outputs bundle size ~ _bundle.js (1.75 MiB)_

   it is good, ag-grid-community imported **once**
