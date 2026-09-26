# Facets

Facets is a multimodal listening instrument that turns locally measured audio features into an image-generation brief, sends that brief through the Livepeer Agent API, and preserves a visible receipt of what was measured, directed, and generated.

Raw audio stays in the browser. Only labelled measures and the user's creative direction are sent to Livepeer Agent.

**[Try the public app](https://forgewrld711.github.io/facets-livepeer/) · [Watch the 39-second demo](https://forgewrld711.github.io/facets-livepeer/demo/facets-demo.mp4)**

## Hackathon track

**Livepeer Agent Builder**

Livepeer Agent is central to the working loop:

1. The browser measures pulse, density, brightness, and drift from a chosen audio file.
2. A person adds or edits a creative direction.
3. Facets quotes `flux-schnell` pricing through the required [Livepeer Creative MCP](https://agent.livepeer.org/api/mcp/creative), then calls `create_media` with a $0.02 per-image cap.
4. The generated image returns to the instrument with a provenance-style generation receipt.
5. The person can revise the direction and generate another facet.

## Run locally

Facets is a dependency-free static application.

```bash
python -m http.server 8000 -d dist
```

Then open `http://127.0.0.1:8000`.

## Demo

The 39-second [MP4 walkthrough](https://forgewrld711.github.io/facets-livepeer/demo/facets-demo.mp4) shows calibration measures, a Livepeer Creative MCP image-generation call with a price quote, and a second call refining the same sound into a different visual direction. A WebM copy is also included in `demo/`.

## Privacy and scope

- Audio analysis happens locally in the browser using the Web Audio API.
- Raw audio is not uploaded by Facets.
- The generated visual request contains labelled measurements and human direction.
- This hackathon build focuses on the complete sound-to-visual loop. The future Elsehow return path would translate the visual result back into spatial sound.

## Built by

Miranda Price / Forgewrld711, with Morrow.
