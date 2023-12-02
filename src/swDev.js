export default function swDev() {
  function determineAppServerKey() {
    var vapidPublicKey =
      'BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE';
    return urlBase64Unit6Array(vapidPublicKey);
  }

  function urlBase64Unit6Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  navigator.serviceWorker.register(swUrl).then((res) => {
    console.warn('res', res);
    return res.pushManager.getSubscription().then((subscription) => {
      if (subscription === null) {
        return res.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey(),
        });
      } else {
        console.log('User is already subscribed.');
        return subscription;
      }
    });
  });
}
