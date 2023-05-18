import * as OpenFin from "@openfin/core/src/OpenFin";

// declare const fin: OpenFin.Fin<"window">;
declare const fin: OpenFin.Fin<"window" | "view">;

const nameP = document.querySelector('#name');
const entityName = fin.me.identity.name; 
nameP.innerHTML = entityName; 

if (entityName === 'foo') {
    const foo2 = await fin.Application.start({ 
        uuid: 'foo2', 
        name: 'foo2',
        url: "http://localhost:5050/app.html",
        contentNavigation: {
            whitelist: ["http://localhost:5050/app.html", "https://snapple.com/products"],
            blacklist: ["https://example.org/foo/bar.html"]
        }
    });
}

if (entityName === 'foo2') {
    const foo3 = await fin.Application.start({ 
        uuid: 'foo3', 
        name: 'foo3',
        url: "https://snapple.com/products"
    });
}

