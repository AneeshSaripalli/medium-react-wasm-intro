# WASM Source Directory
## What is this?
This folder is the Rust source for the Webassembly code we use in the React client. 

## Build instructions
Running `chmod +x BUILD && ./BUILD` (Linux) will enable execution & execute the [`BUILD`](/wasm/BUILD) file, which runs `wasm-pack` to generate the [`wasm-build`](/wasm-build) directory / package.