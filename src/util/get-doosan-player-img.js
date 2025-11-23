import anjaeseok_62 from './../assets/AN_JAE_SEOK_62.png'
import choijikang_42 from './../assets/CHOI_JI_KANG_42.png'
import choijunho_41 from './../assets/CHOI_JUN_HO_41.png'
import choiminseok_68 from './../assets/CHOI_MIN_SEOK_68.png'
import choiseungyong_28 from './../assets/CHOI_SEUNG_YONG_28.png'
import choiwonjoon_61 from './../assets/CHOI_WON_JOON_61.png'
import choojaehyun_36 from './../assets/CHOO_JAE_HYUN_36.png'
import coleirvin_57 from './../assets/COLE_IRVIN_57.png'
import gwakbeen_47 from './../assets/GWAK_BEEN_47.png'
import honggeonhui_17 from './../assets/HONG_GEON_HUI_17.png'
import hongmingyu_67 from './../assets/HONG_MIN_GYU_67.png'
import imjongsung_3 from './../assets/IM_JONG_SUNG_3.png'
import jakecave_8 from './../assets/JAKE_CAVE_8.png'
import jehwanyu_93 from './../assets/JE_HWAN_YU_93.png'
import josoohaeng_51 from './../assets/JO_SOO_HAENG_51.png'
import jungsoobin_31 from './../assets/JUNG_SOO_BIN_31.png'
import kangseungho_23 from './../assets/KANG_SEUNG_HO_23.png'
import kimdaehan_27 from './../assets/KIM_DAE_HAN_27.png'
import kimdongjun_48 from './../assets/KIM_DONG_JUN_48.png'
import kimintae_33 from './../assets/KIM_IN_TAE_33.png'
import kimjaehwan_32 from './../assets/KIM_JAE_HWAN_32.png'
import kimjeongwoo_30 from './../assets/KIM_JEONG_WOO_30.png'
import kimkiyeon_45 from './../assets/KIM_KI_YEON_45.png'
import kimmingyu_19 from './../assets/KIM_MIN_GYU_19.png'
import kimminsuk_2 from './../assets/KIM_MIN_SUK_2.png'
import kimmyungsin_46 from './../assets/KIM_MYUNG_SIN_46.png'
import kimtaekyeon_63 from './../assets/KIM_TAEK_YEON_63.png'
import kohyojun_35 from './../assets/KO_HYO_JUN_35.png'
import leebyeongheon_29 from './../assets/LEE_BYEONG_HEON_29.png'
import leekyohoon_7 from './../assets/LEE_KYO_HOON_7.png'
import leeyoungha_50 from './../assets/LEE_YOUNG_HA_50.png'
import leeyuchan_13 from './../assets/LEE_YU_CHAN_13.png'
import ohmyeongjin_6 from './../assets/OH_MYEONG_JIN_6.png'
import parkchiguk_1 from './../assets/PARK_CHI_GUK_1.png'
import parkgyebeom_14 from './../assets/PARK_GYE_BEOM_14.png'
import parkjiho_4 from './../assets/PARK_JI_HO_4.png'
import parkjunsoon_52 from './../assets/PARK_JUN_SOON_52.png'
import parkjunyoung_16 from './../assets/PARK_JUN_YOUNG_16.png'
import parkjungsoo_12 from './../assets/PARK_JUNG_SOO_12.png'
import parkshinzi_49 from './../assets/PARK_SHIN_ZI_49.png'
import ryuhyunjun_11 from './../assets/RYU_HYUN_JUN_11.png'
import yangeuiji_25 from './../assets/YANG_EUI_JI_25.png'
import yangjaehun_92 from './../assets/YANG_JAE_HUN_92.png'
import yangsukhwan_53 from './../assets/YANG_SUK_HWAN_53.png'
import yeotongkeon_5 from './../assets/YEO_TONG_KEON_5.png'
import yuntaeho_65 from './../assets/YUN_TAE_HO_65.png'
import zachlogue_39 from './../assets/ZACH_LOGUE_39.png'

export function getDoosanPlayerImage(imgid){
    switch(imgid){
        case 1 : return parkchiguk_1;
        case 2 : return kimminsuk_2;
        case 3 : return imjongsung_3;
        case 4 : return parkjiho_4;
        case 5 : return yeotongkeon_5;
        case 6 : return ohmyeongjin_6;
        case 7 : return leekyohoon_7;
        case 8 : return jakecave_8;
        case 11: return ryuhyunjun_11;
        case 12: return parkjungsoo_12;
        case 13: return leeyuchan_13;
        case 14: return parkgyebeom_14;
        case 16: return parkjunyoung_16;
        case 17: return honggeonhui_17;
        case 19: return kimmingyu_19;
        case 23: return kangseungho_23;
        case 25: return yangeuiji_25;
        case 27: return kimdaehan_27;
        case 28: return choiseungyong_28;
        case 29: return leebyeongheon_29;
        case 30: return kimjeongwoo_30;
        case 31: return jungsoobin_31;
        case 32: return kimjaehwan_32;
        case 33: return kimintae_33;
        case 35: return kohyojun_35;
        case 36: return choojaehyun_36;
        case 39: return zachlogue_39;
        case 41: return choijunho_41;
        case 42: return choijikang_42;
        case 45: return kimkiyeon_45;
        case 46: return kimmyungsin_46;
        case 47: return gwakbeen_47;
        case 48: return kimdongjun_48;
        case 49: return parkshinzi_49;
        case 50: return leeyoungha_50;
        case 51: return josoohaeng_51;
        case 52: return parkjunsoon_52;
        case 53: return yangsukhwan_53;
        case 57: return coleirvin_57;
        case 61: return choiwonjoon_61;
        case 62: return anjaeseok_62;
        case 63: return kimtaekyeon_63;
        case 65: return yuntaeho_65;
        case 67: return hongmingyu_67;
        case 68: return choiminseok_68;
        case 92: return yangjaehun_92;
        case 93: return jehwanyu_93;
        default: return null;
    }
}