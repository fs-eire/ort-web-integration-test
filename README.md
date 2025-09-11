# ORT-Web integration test

usage:

- Web:
  - visit https://fs-eire.github.io/ort-web-integration-test/?ort=1 for JSEP
  - visit https://fs-eire.github.io/ort-web-integration-test/?ort=2 for WebGPU EP

- Web (self-host):
  In current directory, do `npx http-server .`, then
  - visit http://localhost:8080/?ort=1 for JSEP
  - visit http://localhost:8080/?ort=2 for WebGPU EP

- Node.js:
  In current directory, do:
  ```
  npm ci
  node main.js
  ```
  