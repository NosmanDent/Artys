import React from "react";

function Loader() {
  return (
    <div className="h-screen fixed top-0 bg-black/[0.3] w-full flex items-center justify-center">
      <section class="dots-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </section>
    </div>
  );
}

export default Loader;
