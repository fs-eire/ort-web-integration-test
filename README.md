# ORT-Web integration test

Note: please don't open multiple browser tabs at the same time, as they will occupy GPU resources and cause incorrect results.

## Web

### Visit GitHub Pages

- example based on Transformers.js:
  - [JSEP](https://fs-eire.github.io/ort-web-integration-test/?max_tokens=300&ort=1)
  - [WebGPU EP](https://fs-eire.github.io/ort-web-integration-test/?max_tokens=300&ort=2)
  - [WebGPU EP (JSPI)](https://fs-eire.github.io/ort-web-integration-test/?max_tokens=300&ort=3)

- example based on ort-web-perf:
  - [JSEP](https://fs-eire.github.io/ort-web-integration-test/ort-llm.html?local=0&max_tokens=300&ort=1)
  - [WebGPU EP](https://fs-eire.github.io/ort-web-integration-test/ort-llm.html?local=0&max_tokens=300&ort=2)
  - [WebGPU EP (JSPI)](https://fs-eire.github.io/ort-web-integration-test/ort-llm.html?local=0&max_tokens=300&ort=3)

### Web (self-host)
In current directory, do `npx http-server .`, then

- example based on Transformers.js:
  - [JSEP](http://localhost:8080/?max_tokens=300&ort=1)
  - [WebGPU EP](http://localhost:8080/?max_tokens=300&ort=2)
  - [WebGPU EP (JSPI)](http://localhost:8080/?max_tokens=300&ort=3)

- example based on ort-web-perf:
  - [JSEP](http://localhost:8080/ort-llm.html?local=0&max_tokens=300&ort=1)
  - [WebGPU EP](http://localhost:8080/ort-llm.html?local=0&max_tokens=300&ort=2)
  - [WebGPU EP (JSPI)](http://localhost:8080/ort-llm.html?local=0&max_tokens=300&ort=3)

### Node.js (WebGPU EP only):
  In current directory, do:
  ```
  npm ci
  node main.js
  ```

## WebGPU EP Diagnosis (local)

### Base version

- 505b135cfa89445b760a0a5efda84ec78a6e777e
  [web] fix IO binding for WebGPU EP (#25190)

- http://localhost:8080/ort-llm.html?local=0&max_tokens=300&ort=2&ort_import=./ort-dist_base/

### version 0906

- ecb26fb7754d7c9edf24b1844ea807180a2e3e23

- http://localhost:8080/ort-llm.html?local=0&max_tokens=300&ort=2&ort_import=./node_modules/onnxruntime-web/dist/
