import { ThemePalette } from './createPalette';

/** @beta */
export interface ThemeComponents {
  /** Applies to normal buttons, inputs, radio buttons, etc */
  height: {
    sm: number;
    md: number;
    lg: number;
  };
  panel: {
    padding: number;
    headerHeight: number;
  };
  tooltip: {
    background: string;
  };
  menu: {
    background: string;
  };
  dropdown: {
    background: string;
  };
  scrollbar: {
    background: string;
  };
  form: {
    background: string;
    border: string;
    text: string;
  };
  card: {
    background: string;
  };
}

export function createComponents(palette: ThemePalette): ThemeComponents {
  return {
    height: {
      sm: 3,
      md: 4,
      lg: 6,
    },
    tooltip: {
      background: palette.layer2,
    },
    menu: {
      background: palette.layer2,
    },
    dropdown: {
      background: palette.layer2,
    },
    scrollbar: {
      background: palette.secondary.main,
    },
    card: {
      background: palette.layer2,
    },
    panel: {
      padding: 1,
      headerHeight: 4,
    },
    form:
      palette.mode === 'dark'
        ? {
            background: palette.layer0,
            border: 'rgba(255, 255, 255, 0.23)',
            text: palette.text.primary,
          }
        : {
            background: palette.layer1,
            border: 'rgba(0, 0, 0, 0.23)',
            text: palette.text.primary,
          },
  };
}
