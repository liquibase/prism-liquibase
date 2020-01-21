# prism-liquibase
Uses Prism's easy to consume extension API to tokenize Liquibase CLI command keywords. Extends the `bash` language component to further enhance syntax highlighting. Exported as an IIFE for backwards compatibility.

## Overview
![Example of syntax highlighting language extension for Liquibase support.](https://i.imgur.com/sa6NUVA.png)

## How To Use
### Requirements
PrismJS is provided in the 'global' scope. 

- Import Prism main module.
- Import [Bash](https://prismjs.com/#supported-languages) language component.
- Import `prism-liquibase` language extension.
- Follow normal [Prism](https://prismjs.com/#basic-usage) usage.

### Example
See [index.html](./examples/index.html) in `/examples`
