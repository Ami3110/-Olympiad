/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // A per-request-nonce CSP (via proxy/middleware) was tried first, but
    // Next's App Router emits its own inline RSC/hydration <script> tags
    // with no nonce on statically generated pages — the nonce mechanism
    // only applies once a route opts into dynamic (per-request) rendering,
    // which would give up static generation for the whole site. Since this
    // is a fully static, no-backend, no-user-input site (nothing ever
    // reflects untrusted input into the page), 'unsafe-inline' on
    // script-src is the pragmatic tradeoff here — everything else in the
    // original policy (object-src, base-uri, form-action, img-src,
    // connect-src) stays as strict as before.
    // Next's dev server (HMR, React's dev-mode callstack reconstruction)
    // uses eval() and breaks under a CSP without 'unsafe-eval' — dev-only,
    // production never needs it, so it's added conditionally rather than
    // loosening the policy that actually ships.
    const isDev = process.env.NODE_ENV === "development";
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
