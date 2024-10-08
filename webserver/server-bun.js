import {serve} from 'bun'
// bun only works in mac linux or wsl
serve({
    fetch(request){
        const url = new URL (request.url);
        if(url.pathname === '/'){
            return new Response('Hello Ice tea' , {status:200})
        }
        else if(url.pathname === 'ice-tea/'){
            return new Response('ICE  tea is always a good option' , {status:200})
        }
        else{
            return new Resaponse('404 Not found' , {staus: 404})
        }
    },
    port: 3000,
    hostname : '127.0.0.1'
})