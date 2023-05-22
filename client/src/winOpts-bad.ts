export const winOpts = {
    alwaysOnTop: false,
    accelerator: {
        devtools: true,
        zoom: false,
        reload: false,
        reloadIgnoringCache: false
    },
    uuid: "bridge-local-platform",
    api: {
        iframe: {
            crossOriginInjection: false,
            sameOriginInjection: true,
            enableDeprecatedSharedName: false
        }
    },
    autoShow: true,
    backgroundThrottling: true,
    closeOnLastViewRemoved: true,
    defaultCentered: false,
    defaultHeight: 500,
    defaultLeft: 10,
    defaultTop: 10,
    defaultWidth: 800,
    name: 'test-window',
    resizable: true,
    resize: true,
    saveWindowState: false,
    showTaskbarIcon: true,
    webSecurity: false,
    title: "workspace-window-4ae29a9b-44ac-4740-b895-0cad5a9b98fa",
    height: 500,
    width: 800,
    center: false,
    layout: {
        content: [
            {
                content: [
                    {
                        type: "component",
                        componentName: "view",
                        componentState: {
                            contextMenu: true,
                            detachOnClose: false,
                            isClosable: true,
                            preventDragOut: false,
                            bridge: "bridge-local-platform",
                            name: 'test-view',
                            permissions: {
                                ExternalWindow: {
                                    wrap: true
                                },
                                System: {
                                    downloadAsset: true,
                                    getAllExternalWindows: true,
                                    launchExternalProcess: true,
                                    readRegistryValue: false,
                                    terminateExternalProcess: true
                                },
                                webAPIs: [
                                    'clipboard-write',
                                    'clipboard-sanitized-write',
                                    'openExternal'
                                ]
                            },

                            url: "https://app.powerbi.com/groups/me/reports/00e7ac1a-e3be-459d-a62e-bcf5aedd9563/ReportSectiond4d6d28f100a05d02bb1",
                            webSecurity: false,
                            preloadScripts: [],
                            enableBeforeUnload: false,
                        },
                    }
                ],
                type: "stack"
            }
        ],
    },
    settings: {
        hasHeaders: true,
        reorderEnabled: true,
        showPopoutIcon: true,
        showCloseIcon: true,
        showMaximiseIcon: true,
        popoutWholeStack: false,
        constrainDragToHeaders: false,
        preventDragOut: false,
        preventDragIn: false,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        constrainDragToContainer: true,
        selectionEnabled: false
    },
};