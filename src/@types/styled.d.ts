// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      blue100: string
      blue200: string
      blue500: string
      blue900: string
      orange500: string
      purple500: string
      red500: string
      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
    }
  }
}
