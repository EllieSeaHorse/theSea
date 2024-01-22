import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

      <Main />
        <NextScript />
        <Analytics />

      <script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>

      </body>
    </Html>
  )
}
