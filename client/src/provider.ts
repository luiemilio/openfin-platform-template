import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"window">;

await fin.Platform.init({
    interopOverride: (InteropBroker: { new(): OpenFin.InteropBroker }): OpenFin.InteropBroker => {
        class Override extends InteropBroker {
            async handleFiredIntent(intent: OpenFin.Intent<OpenFin.IntentMetadata<any>>, clientIdentity: OpenFin.ClientIdentity): Promise<any> {
                await super.setIntentTarget(intent, { uuid: fin.me.identity.uuid, name: 'foo2' });
            }
        }

        return new Override();
    }
});