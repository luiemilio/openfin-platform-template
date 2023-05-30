import * as OpenFin from "@openfin/core/src/OpenFin";
import * as fdc3v1 from  'fdc3v1';
import * as fdc3v2 from  'fdc3v2';

type DesktopAgent<T> = T extends '1.2' ? fdc3v1.DesktopAgent : fdc3v2.DesktopAgent;

declare const fin: OpenFin.Fin<"view">;
declare const fdc3: fdc3v1.DesktopAgent | fdc3v2.DesktopAgent;

let fdc3Version;

const getFdc3Version = async () => {
    if (fdc3Version) {
        return fdc3Version;
    }
    
    const fdc3Info = await fdc3.getInfo();
    return fdc3Info.fdc3Version;
}

const init = async () => {
    const header = document.querySelector('#header');
    const fdc3Version = await getFdc3Version();
    header.innerHTML = fdc3Version;

    if (fdc3Version === '1.2') {
        await (fdc3 as DesktopAgent<'1.2'>).addIntentListener('foo', (context)  => {
            console.log(`intent foo handled with content: ${context}`);
        });
    }
    
    if (fdc3Version === '2.0') {
        const intentResolution = await (fdc3 as DesktopAgent<'2.0'>).raiseIntent('foo', { type: 'foo-ctx' });
        console.log(intentResolution);
        const result = await intentResolution.getResult();
        console.log(result);
    }
};

await init();
