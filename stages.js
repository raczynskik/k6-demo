import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        {duration: '30s', target: 20},
        {duration: '1m40s',target: 50},
        {duration: '5s',target: 0},
        {duration: '20', target: 500}
    ]
}


export default function (){
    const req = http.get('https://httpbin.test.k6.io/');
    check (req, {'status was 200': (r)=> r.status == 200});
    sleep(1);
}