import '../styles/globals.css'
import '../styles/CanvasCursor/styles.css'
import '../styles/CanvasCursor/TitlePresentation.css'
import '../styles/fonts.css'
import '../styles/PortafolioSection/PresentationStyles.css'
import '../styles/General/Layout/MainLayout.css'
import '../styles/CanvasSphere/CanvasSphere.css'
import '../styles/CanvasSphere/Skills.css'
import '../styles/errors/styles.css'
import type { AppProps } from 'next/app'
import { ThemeConfig } from '../config/theme.config'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType | any;
  };
};



export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div>
      <ThemeConfig>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeConfig>
    </div>
  )
}
