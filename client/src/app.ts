import OpenFin, { fin } from '@openfin/core';

if (fin.me.identity.name === 'process-affinity-child-window') {
    await fin.me.navigate('chrome://crash');
}

const wrapWin = async (id: OpenFin.Identity): Promise<OpenFin.Window> => {
    return fin.Window.wrap(id);
}

const createChildWin = async (options: OpenFin.WindowCreationOptions): Promise<OpenFin.Window> => {
    return fin.Window.create(options);
};

const crashWin = async (win: OpenFin.Window): Promise<void> => {
    return win.navigate('chrome://crash');
};

const setupCrashWinOnShown = (win: OpenFin.Window) => {
    return win.on('shown', async () => {
        await crashWin(win);
    })
}

const createCrossOriginChildWindow = async () => {
    await fin.Window.create({ name: 'cross-origin-child-window', url: 'http://example.com'});
}

document.addEventListener('DOMContentLoaded', async () => {
    const { name, uuid } = fin.me.identity;
    const childWinId = { uuid, name: 'child-window' }
    const childWinCreationOpts = { ...childWinId , url: 'http://localhost:5050/app.html' };
    const header = document.querySelector('#header1');
    
    header.innerHTML = name;
    // await createChildWindowAndCrashIt(uuid);
    
    if (name === uuid) {
        const mainDiv = document.querySelector('#main-div');
        const createChildWinBtn = document.createElement('button');
        const crashChildWinBtn = document.createElement('button');
        const createCrossOriginChildWinBtn = document.createElement('button');
        const crashCrossOriginChildWinOnShowBtn = document.createElement('button');
        const crashCrossOriginChildWinBtn = document.createElement('button');
        
        createChildWinBtn.innerHTML = 'Create Child Window';
        createChildWinBtn.onclick = async () => {
            return createChildWin(childWinCreationOpts);
        }

        crashChildWinBtn.innerHTML = 'Crash Child Window';
        crashChildWinBtn.onclick = async () => {
            const win = await wrapWin(childWinId)
            return crashWin(win);
        };

        createCrossOriginChildWinBtn.innerHTML = 'Create Cross Origin Child Window';
        createCrossOriginChildWinBtn.onclick = async () => {
            await createCrossOriginChildWindow();
        }

        crashCrossOriginChildWinOnShowBtn.innerHTML = 'Create cross origin child window and crash it';
        crashCrossOriginChildWinOnShowBtn.onclick = async () => {
            const w = fin.Window.wrapSync({ name: 'cross-origin-child-window', uuid: fin.me.identity.uuid });
            await w.on('url-changed', async (event) => {
                console.log('url changed', event);

                // if (event.url.endsWith('example.com/')) {
                //     console.log('window navigated!');
                //     await w.navigate('chrome://crash');
                //     console.log('navigated');
                // }
            })
            await fin.Window.create({ name: 'process-affinity-child-window', url: 'http://localhost:5050/app.html' });
        }

        crashCrossOriginChildWinBtn.innerHTML = 'Crash cross origin child window';
        crashCrossOriginChildWinBtn.onclick = async () => {
            const w = fin.Window.wrapSync({ name: 'cross-origin-child-window', uuid: fin.me.identity.uuid });
            w.navigate('chrome://crash');
        };
        
        mainDiv.appendChild(createChildWinBtn);
        mainDiv.appendChild(crashChildWinBtn);
        mainDiv.appendChild(createCrossOriginChildWinBtn)
        mainDiv.appendChild(crashCrossOriginChildWinBtn);
        mainDiv.appendChild(crashCrossOriginChildWinOnShowBtn);
    }
});
