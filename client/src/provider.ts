import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"window">;

await fin.Platform.init();

// const win = await fin.Window.create({
//     name: 'foo',
//     url: 'https://app.powerbi.com/groups/me/reports/00e7ac1a-e3be-459d-a62e-bcf5aedd9563/ReportSectiond4d6d28f100a05d02bb1'
// });