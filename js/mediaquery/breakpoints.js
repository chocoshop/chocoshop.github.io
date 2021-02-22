import { generateMedia } from "styled-media-query";

export const media = generateMedia({
    'xsmall': '340px',
    'sp' : '600px',
    'medium': '768px', //use this as usual
    'tablet' : '1024px',
    'laptop': '1880px',
});