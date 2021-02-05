export default function swDev()
{
  let swUrl=  `${process.env.PUBLIC_URL}/sw.js`
  if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swUrl)
        .then((reg) => console.log('Success: Service Worker Registered :: ', reg.scope))
        .catch((err) => console.log('Failure: Service Worker Registeration Failed :: ', err));
    })
  } 
}