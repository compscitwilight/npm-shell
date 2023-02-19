# npm-shell
A small NPM package that allows you to run `.npm` files containing NPM command line code.

## Installation
Before installing, please make sure you have <a href="https://nodejs.org/en/">Node.js</a> installed on your system.

1. Open your terminal.
2. Paste the following command, and execute it..
`npm i -g https://github.com/devrusty/npm-shell --save-dev`

## Get Started
1. Create a file with a `.npm` extension. 
2. Run the command `npm-shell` with the path to the file as the second argument.

## Examples
`installer.npm`
NOTE: `npm` is not required in `.npm` files.
```
install express 
install @types/express --save-dev
install ts-node --save-dev
```