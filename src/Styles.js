import { StyleSheet } from 'react-native';
import { ratio, whiteColor ,blackColor} from './constent';


export const Styles = StyleSheet.create({
  //  H1: { fontSize: 10 * ratio, fontWeight: 'bold' },
    H2: { fontSize: 12 * ratio, fontWeight: 'bold' },
    H3: { fontSize: 14 * ratio, fontWeight: 'bold' },
    H4: { fontSize: 16 * ratio, fontWeight: 'bold' },
    H5: { fontSize: 18 * ratio, fontWeight: 'bold' },
    H6: { fontSize: 20 * ratio, fontWeight: 'bold' },
    H7: { fontSize: 22 * ratio, fontWeight: 'bold' },
    H1: { fontSize: 16 * ratio, fontWeight: 'bold',color: whiteColor },

    T01: { fontSize: 4 * ratio },
    T02: { fontSize: 6 * ratio },
    T03: { fontSize: 8 * ratio },
    T1: { fontSize: 10 * ratio },
    T2: { fontSize: 12 * ratio },
    T3: { fontSize: 14 * ratio },
    T4: { fontSize: 16 * ratio },
    T5: { fontSize: 18 * ratio },
    T6: { fontSize: 20 * ratio },
    T7: { fontSize: 22 * ratio },
    T8: { fontSize: 24 * ratio },

    Textwhite12:{ fontSize: 14 * ratio ,color: whiteColor},
    Text14: { fontSize: 14 * ratio ,color: blackColor},
    Text12: { fontSize: 14 * ratio ,color: blackColor},
    Text11: { fontSize: 13 * ratio ,color: blackColor},
    Text10: { fontSize: 12 * ratio ,color: blackColor},
    Text9: { fontSize: 11 * ratio ,color: blackColor},
    Text8: { fontSize: 10 * ratio ,color: blackColor},

    TextRegular: { fontWeight: 'normal' },
    TextBold: { fontWeight: 'bold' },

    B1: { fontWeight: '100' },
    B2: { fontWeight: '300' },
    B3: { fontWeight: '500' },
    B4: { fontWeight: '700' },
    B5: { fontWeight: '900' },

    ButtonText: { color: whiteColor },
    ButtonTextblack: { color: blackColor },

    ApplyShadow: { shadowOffset: { height: 2, width: 0 }, shadowOpacity: 0.5, elevation: 3 },
    ApplyShadow1: { shadowOffset: { height: 1, width: 0 }, shadowOpacity: 0.5, elevation: 1 }

})