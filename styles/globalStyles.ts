import {globalCss} from '@stitchesConfig';

export const globalStyles = globalCss({
  '@font-face ': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'optional',
    src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD',
  },

  html: {
    font: '100%/1.25 $fonts$primary',
    boxSizing: 'border-box',
  },

  '*, ::before, ::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    WebkitTapHighlightColor: 'transparent',
  },

  a: {
    textDecoration: 'none',
  },

  img: {
    maxWidth: '100%',
  },

  body: {
    lineHeight: 1.5,
  },

  'h1, h2, h3, h4,li,p': {
    overflowWrap: 'break-word',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
  },
});
