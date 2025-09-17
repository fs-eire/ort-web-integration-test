const IS_WEB = typeof document !== "undefined";

// workaround for nodejs
if (!IS_WEB) {
  global.Float16Array = undefined;
}

const log = IS_WEB
  ? (msg) => {
      document.getElementById("output").value += msg + "\n";
    }
  : (msg) => {
      console.log(msg);
    };

let pipeline, TextStreamer, max_new_tokens;

if (IS_WEB) {
  // Get param "ort" from URL
  const urlParams = new URLSearchParams(window.location.search);
  const ort = urlParams.get("ort");
  max_new_tokens = Number.parseInt(urlParams.get("max_new_tokens"));
  if (Number.isNaN(max_new_tokens)) {
    max_new_tokens = 100;
  }

  // param "ort" can be:
  // 0: use ORT from CDN
  // 1: use local "onnxruntime-web"
  // 2: use local "onnxruntime-web/webgpu"
  // 3: use local "onnxruntime-web/jspi"
  if (ort == "1") {
    log("importing from /dist_jsep/transformers.js");
    const t = await import("./dist_jsep/transformers.js");
    pipeline = t.pipeline;
    TextStreamer = t.TextStreamer;
  } else if (ort == "2") {
    log("importing from /dist_asyncify/transformers.js");
    const t = await import("./dist_asyncify/transformers.js");
    pipeline = t.pipeline;
    TextStreamer = t.TextStreamer;
  } else if (ort == "3") {
    log("importing from /dist_jspi/transformers.js");
    const t = await import("./dist_jspi/transformers.js");
    pipeline = t.pipeline;
    TextStreamer = t.TextStreamer;
  } else {
    // default: use ORT from CDN
    log("importing from CDN");
    const t = await import(
      "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2"
    );
    pipeline = t.pipeline;
    TextStreamer = t.TextStreamer;
  }
} else {
  const t = await import("./dist_asyncify/transformers.node.mjs");
  pipeline = t.pipeline;
  TextStreamer = t.TextStreamer;
  max_new_tokens = 100;
}

// Create a text generation pipeline
const generator = await pipeline(
  "text-generation",
  "onnx-community/Qwen3-0.6B-ONNX",
  {
    dtype: "q4f16",
    device: "webgpu",
  }
);

// Define the list of messages
const messages = [
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "Tell me a joke." },
];

// Generate a response
let tokenCount = 0;
const start = performance.now();
const output = await generator(messages, {
  max_new_tokens,
  do_sample: false,
  streamer: new TextStreamer(generator.tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    token_callback_function: (token) => {
      tokenCount++;
    },
    callback_function: () => {},
  }),
});
const end = performance.now();
log(`Generated ${tokenCount} tokens.\n`);
log(output[0].generated_text.at(-1).content);
log(`\nGeneration took ${end - start} milliseconds.\n`);
log(`Tokens per second: ${(tokenCount / (end - start)) * 1000}.`);
