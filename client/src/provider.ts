import * as OpenFin from "@openfin/core/src/OpenFin";

// declare const fin: OpenFin.Fin<"window">;
declare const fin: any;

await fin.Platform.init();

// new fin.desktop.Application(
//   {
//     uuid: "foo",
//     name: "foo",
//     url: 'http://localhost:5050/app.html"',
//     autoShow: true,
//     contentNavigation: {
//       whitelist: ["https://whitelisted.example/"],
//       blacklist: [],
//     },
//   },
//   function () {
//     console.log("app ran");
//   },
//   function (e) {
//     console.log("app did not run");
//   }
// );
