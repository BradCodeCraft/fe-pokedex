import React from "react";

export default function FilterTable({ visibility }: { visibility: Boolean }) {
  return (
    <>
      {visibility ? (
        <div>
          <h1>Test</h1>
        </div>
      ) : null}
    </>
  );
}
