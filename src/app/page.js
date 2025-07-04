import Logo from './config/logo.svg';
import './styles.scss';
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={Logo.src} style={{ width: 300 }}></img>
    </div>
  );
}
