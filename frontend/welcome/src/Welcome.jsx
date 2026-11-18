import React, { useEffect, useState } from "react";
import { WovenCloth } from "@designcodeio/threeui/components/WovenCloth";

export default function Welcome() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    const redirect = window.setTimeout(() => window.location.assign("/app"), 6200);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(redirect);
    };
  }, []);

  return (
    <main className={`welcome-shell${ready ? " is-ready" : ""}`}>
      <div className="stage" aria-label="VibeCheck Cinema is opening">
        <div className="flag-pole" aria-hidden="true" />
        <div className="flag">
          <WovenCloth
            variant="washi"
            hue={-6}
            saturation={0.88}
            brightness={0.72}
            className="stage__cloth"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
          <div className="flag__shade" aria-hidden="true" />
          <div className="flag__copy">
            <span className="flag__eyebrow">A living movie shelf</span>
            <h1>VibeCheck<br /><em>Cinema</em></h1>
            <span className="flag__status">Opening your collection</span>
          </div>
        </div>
      </div>

      <div className="opening-curtain" aria-hidden="true">
        <span className="opening-curtain__panel" />
        <span className="opening-curtain__panel" />
        <span className="opening-curtain__panel" />
      </div>

      <p className="auto-progress">Loading your private shelf <span aria-hidden="true">···</span></p>
    </main>
  );
}
