import bears_emblem1 from './../assets/bears_emblem_navy.jpeg'
import bears_emblem2 from './../assets/bears_emblem_white.png'
import bears_logo1 from './../assets/bears_logo_1.jpeg'
import bears_logo2 from './../assets/bears_logo_2.jpeg'
import bears_logo3 from './../assets/bears_logo_3.jpeg'
import bears_logo4 from './../assets/bears_logo_4.jpeg'
import bears_symbol1 from './../assets/bears_symbol_1.jpeg'
import bears_symbol2 from './../assets/bears_symbol_2.jpeg'
import bears_symbol3 from './../assets/bears_symbol_3.jpeg'
import bears_symbol4 from './../assets/bears_symbol_4.jpeg'


export function getDoosanImage(imgId) {
    switch(imgId){
        case 1 : return bears_emblem1;
        case 2 : return bears_emblem2;
        case 3 : return bears_logo1;
        case 4 : return bears_logo2;
        case 5 : return bears_logo3;
        case 6 : return bears_logo4;
        case 7 : return bears_symbol1;
        case 8 : return bears_symbol2;
        case 9 : return bears_symbol3;
        case 10 : return bears_symbol4;
        default : return null;
    }
}