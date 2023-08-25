(async () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const preApprovedDevices = await (navigator as any).hid.getDevices();
        console.log('pre approved devices', preApprovedDevices);

        const btn = document.querySelector('#request-devices');
        
        btn.addEventListener('click', async () => {
            const connectedDevice = await (navigator as any).hid.requestDevice({
                filters: []
            });
            
            console.log('connected device', connectedDevice);
            const devices = await (navigator as any).hid.getDevices();
            console.log('all devices', devices);
        });
    })
})()