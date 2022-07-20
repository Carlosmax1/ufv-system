import type { AppProps } from 'next/app';
import GlobalStyle from '../../styles/global';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderUI } from '@mui/system';
import { theme, themeUI} from '../../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeProviderUI theme={themeUI}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProviderUI>
      </ThemeProvider>
    </>
  )
}

export default MyApp
