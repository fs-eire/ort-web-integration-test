# ORT-Web integration test

Note: please don't open multiple browser tabs at the same time, as they will occupy GPU resources and cause incorrect results.

## Web

### Visit GitHub Pages

- example based on Transformers.js:
  - [JSEP](https://fs-eire.github.io/ort-web-integration-test/?ort=1)
  - [WebGPU EP](https://fs-eire.github.io/ort-web-integration-test/?ort=2)

- example based on ort-web-perf:
  - [JSEP](https://fs-eire.github.io/ort-web-integration-test/ort-llm.html?local=0&max_tokens=100&ort=1)
  - [WebGPU EP](https://fs-eire.github.io/ort-web-integration-test/ort-llm.html?local=0&max_tokens=100&ort=2)

### Web (self-host)
In current directory, do `npx http-server .`, then

- example based on Transformers.js:
  - [JSEP](http://localhost:8080/?ort=1)
  - [WebGPU EP](http://localhost:8080/?ort=2)

- example based on ort-web-perf:
  - [JSEP](http://localhost:8080/ort-llm.html?local=0&max_tokens=100&ort=1)
  - [WebGPU EP](http://localhost:8080/ort-llm.html?local=0&max_tokens=100&ort=2)

### Node.js (WebGPU EP only):
  In current directory, do:
  ```
  npm ci
  node main.js
  ```
  