import * as OpenFin from "@openfin/core/src/OpenFin";
import { winOpts as winOptsGood } from './winOpts-good'
import { winOpts as winOptsBad } from './winOpts-bad'

declare const fin: OpenFin.Fin<"window">;

const p = document.querySelector('#name');
p.innerHTML = `uuid: ${fin.me.identity.uuid}`;

if (fin.me.identity.uuid === 'test-manifest') {
    // await fin.Application.startFromManifest('http://localhost:5555/bridge.json');
}

const createPlatfomrWindow = async () => {
    const platform = await fin.Platform.start({ 
        uuid: `${fin.Application.me.uuid}-platform`, 
        name: `${fin.Application.me.uuid}-platform`,
        autoShow: true
    });

    await platform.createWindow(winOptsGood as any);
};

function createPlatfomrWindow2() {
    fin.Platform.start({ uuid: `${fin.Application.me.uuid}-platform`, autoShow: true } as any).then(platform => {
        platform.createWindow(winOptsBad as any)
    })

    // fin.Window.create({
    //     name: 'foo',
    //     webSecurity: true,
    //     url: 'https://app.powerbi.com/groups/me/reports/00e7ac1a-e3be-459d-a62e-bcf5aedd9563/ReportSectiond4d6d28f100a05d02bb1'
    // } as any);
}

const createWinBtn: HTMLButtonElement = document.querySelector('#create-win');

createWinBtn.onclick = createPlatfomrWindow;

const createWinBtn2: HTMLButtonElement = document.querySelector('#create-win2');

createWinBtn2.onclick = createPlatfomrWindow2;