import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const container = document.querySelector('#root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
