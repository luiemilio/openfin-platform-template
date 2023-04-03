import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"window">;

const p = fin.Platform.getCurrentSync();

// p.on('platform-api-ready', async () => {
//     const viewCreationPromises = [...Array(200).keys()].map(async (_, i) => {
//         const name = `view-${i}`;
//         const view = fin.View.wrapSync({ name, uuid: fin.me.uuid });
        
//         await view.on('destroyed', () => {
//             console.log(`destroyed: ${name}`);
//         });
    
//         const viewShownPromise: Promise<void> = new Promise((resolve) => {
//             view.on('shown', () => {
//                 resolve();
//             });
//         })
        
//         p.createView({ url: 'http://localhost:5050/app.html', name });
    
//         await viewShownPromise;
//     });

//     await Promise.all(viewCreationPromises);
// });



await fin.Platform.init();

// const a = fin.Application.getCurrentSync();

// await a.on('window-auth-requested', console.log);
