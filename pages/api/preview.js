//Preview Mode:
//https://nextjs.org/docs/advanced-features/preview-mode

// If this is located at pages/api/preview.js, then
// open http://localhost:3000/api/preview from your browser.
export default function handler(req, res) {
  res.setPreviewData({});
  res.end("Preview mode enabled");
}

//If you use your browser’s developer tools, you’ll notice that the __prerender_bypass and __next_preview_data cookies will be set on this request.
