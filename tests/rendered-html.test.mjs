import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the portfolio homepage with semantic navigation and content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Building intelligent/);
  assert.match(html, /Skip to main content/);
  assert.match(html, /Primary navigation/);
  assert.match(html, /CivicSignal/);
  assert.match(html, /SpiralOS/);
  assert.match(html, /Contact/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the complete project index and every case-study route", async () => {
  const routes = ["civicsignal", "spiralos", "sagespire", "engineering-flight-recorder", "locallead-ai"];
  const indexResponse = await render("/projects");
  assert.equal(indexResponse.status, 200);
  const index = await indexResponse.text();
  for (const route of routes) {
    assert.match(index, new RegExp(`/projects/${route}`));
    const response = await render(`/projects/${route}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /The problem/);
    assert.match(html, /Security/);
    assert.match(html, /Accessibility/);
    assert.match(html, /Testing/);
    assert.match(html, /replace with project media/i);
  }
});

test("keeps contact validation, mobile navigation, and reduced motion in the product", async () => {
  const [form, navigation, css] = await Promise.all([
    readFile(new URL("../components/contact-form.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(form, /aria-invalid/);
  assert.match(form, /delivery is not connected/i);
  assert.match(form, /type="email"/);
  assert.match(navigation, /aria-expanded/);
  assert.match(navigation, /Escape/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@supports not \(backdrop-filter/);
});

test("renders the résumé fallback without claiming a download exists", async () => {
  const response = await render("/resume");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /final résumé file has not been supplied/i);
  assert.match(html, /PDF download/);
  assert.match(html, /Exact details needed/);
});

