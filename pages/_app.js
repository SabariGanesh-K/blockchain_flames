import { FlamesProvider } from '../context/FlamesContext';
import '../styles/globals.css'
export const thisIsAnUnusedExport = "this export only exists to disable fast refresh for this file";

function MyApp({ Component, pageProps }) {
  return(
    <FlamesProvider>

<Component {...pageProps} />
    </FlamesProvider>
  )
}

export default MyApp
