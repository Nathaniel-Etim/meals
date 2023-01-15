import LayoutWrap from "../component/UI/LayoutWrap";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrap>
      <Component {...pageProps} />
    </LayoutWrap>
  );
}
