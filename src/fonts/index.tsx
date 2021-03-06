import { createGlobalStyle } from "styled-components";

import MonumentExtendedUltraBold from "./MonumentExtended-Ultrabold.woff2";

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'MonumentExtended-Ultrabold';
        src: local('MonumentExtended-Ultrabold'),
        url(${MonumentExtendedUltraBold}) format('woff2');
    }
`;
