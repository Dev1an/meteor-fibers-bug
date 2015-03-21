# Fibers bug
## How to reproduce

- clone this repository to your computer
- cd into the root directory of the cloned repository
- run `meteor`

## What is causing the error

line 2 of [packages/myfibers/myfibers.js](https://github.com/Dev1an/meteor-fibers-bug/blob/master/packages/myfibers/myfibers.js#L2)

### What is the `control-flow` module?
this is just a module that uses the [fibers](https://www.npmjs.com/package/fibers) module. You can replace it with any module that depends on `fibers` to reproduce this bug.
