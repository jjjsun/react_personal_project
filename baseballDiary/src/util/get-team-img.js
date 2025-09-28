import { getDoosanImage } from "./get-doosan-img";
import hanwha_emblem from './../assets/hanwha_emblem.png';
import lg_emblem from './../assets/lg_emblem.png';
import kiwoom_emblem from './../assets/kiwoom_emblem.png';
import ssg_emblem from './../assets/ssg_emblem.png';
import kt_emblem from './../assets/kt_emblem.png';
import kia_emblem from './../assets/kia_emblem.png';
import nc_emblem from './../assets/nc_emblem.png';
import lotte_emblem from './../assets/lotte_emblem.png';
import samsung_emblem from './../assets/samsung_emblem.png';
const teamImgMap = {
    "두산베어스" : getDoosanImage(1),
    "한화이글스" : hanwha_emblem,
    "키움히어로즈" : kiwoom_emblem,
    "엘지트윈스" : lg_emblem,
    "SSG랜더스" : ssg_emblem,
    "KT위즈" : kt_emblem,
    "기아타이거즈" : kia_emblem,
    "NC다이노스" : nc_emblem,
    "롯데자이언츠" : lotte_emblem,
    "삼성라이온즈" : samsung_emblem,
}



export default teamImgMap;