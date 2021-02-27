import { registerApplication, start } from "single-spa";

// registerApplication({
//     name: "@mf/root-config",
//     app: () => System.import("@mf/root-config"),
//     activeWhen: ["/"],
// });

// registerApplication({
//     name: "@LogRocket/logrocket-single-spa-homepage",
//     app: () => System.import("@LogRocket/logrocket-single-spa-homepage"),
//     activeWhen: [(location) => location.pathname === "/"],
// });

// registerApplication({
//     name: "@LogRocket/logrocket-single-spa-aboutpage",
//     app: () => System.import("@LogRocket/logrocket-single-spa-aboutpage"),
//     activeWhen: ["/about"],
// });

registerApplication({
    name: "@mfarmer5102/subapp",
    app: () => System.import("@mfarmer5102/subapp"),
    activeWhen: ["/subapp"],
});

start();