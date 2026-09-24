# Facets

Facets is a multimodal listening instrument that turns locally measured audio features into an image-generation brief, sends that brief through the Livepeer Agent API, and preserves a visible receipt of what was measured, directed, and generated.

Raw audio stays in the browser. Only labelled measures and the user's creative direction are sent to Livepeer Agent.

## Hackathon track

**Livepeer Agent Builder**

Livepeer Agent is central to the working loop:

1. The browser measures pulse, density, brightness, and drift from a chosen audio file.
2. A person adds or edits a creative direction.
3. Facets calls Livepeer Agent's `flux-schnell` capability.
4. The generated image returns to the instrument with a provenance-style generation receipt.
5. The person can revise the direction and generate another facet.

## Run locally

Facets is a dependency-free static application.

```bash
python -m http.server 8000 -d dist
```

Then open `http://127.0.0.1:8000`.

## Demo

The repository includes a short visual walkthrough at `demo/facets-demo.webm`.

## Privacy and scope

- Audio analysis happens locally in the browser using the Web Audio API.
- Raw audio is not uploaded by Facets.
- The generated visual request contains labelled measurements and human direction.
- This hackathon build focuses on the complete sound-to-visual loop. The future Elsehow return path would translate the visual result back into spatial sound.

## Built by

Miranda Price / Forgewrld711, with Morrow.
