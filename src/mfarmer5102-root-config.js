import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfarmer5102/platform",
  app: () => System.import("@mfarmer5102/platform"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mfarmer5102/appContent",
  app: () => System.import("@mfarmer5102/appContent"),
  activeWhen: ["/appContent"],
});

start();
