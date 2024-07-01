import type { } from '@mui/material/themeCssVarsAugmentation';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface Palette {
    custom: PaletteColorOptions;
  }

  interface PaletteOptions {
    custom: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}
