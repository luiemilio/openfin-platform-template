import { useEffect } from "react";
import { fin } from "@openfin/core";

function App() {
    useEffect(() => {
        const f = async () => {
            fin.me.showDeveloperTools();

            console.log('foo')

            await fin.Platform.init({});

            fin.Platform.getCurrentSync().on('platform-api-ready', async () => {
                console.log("platform-api-ready-1");
            })

            fin.Platform.getCurrentSync().on('platform-api-ready', async () => {
                console.log("platform-api-ready-2");
            })

            fin.Platform.getCurrentSync().on('platform-api-ready', async () => {
                console.log("platform-api-ready-3");
            })
        };
        f();
    }, []);
    return <div>Playground</div>;
}

export default App;
