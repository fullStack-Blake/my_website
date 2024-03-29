// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      background: string;
      burger: string;
      button: string;
      iconBox: string;
      darkfont: string;
      taskBack: string;
    };
  }
}
