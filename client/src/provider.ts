import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"window">;

await fin.Platform.init();

console.log('platform has been initialized...');