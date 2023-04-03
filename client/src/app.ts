import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"view">;

const authNavBtn: HTMLButtonElement = document.querySelector('#authnav');

authNavBtn.onclick = async () => {
    const win = await fin.me.getCurrentWindow();
    fin.me.navigate('http://localhost:5051/auth.html');
}

// const win = await fin.me.getCurrentWindow();
// fin.me.navigate('http://localhost:5051/auth.html');
// win.close();