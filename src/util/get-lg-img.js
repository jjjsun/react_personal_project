import lg_emblem from './../assets/lg_emblem.jpg'


export function getLgImage(imgId){
    switch(imgId){
        case 1 : return lg_emblem;
        default : return null;
    }
}