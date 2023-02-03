import { mount, StartClient } from "solid-start/entry-client";

import "../assets/styles/client.scss";

(async () => {
  document.querySelector("main")?.removeAttribute("loading");
})();

mount(() => <StartClient />, document);
