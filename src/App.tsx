import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';


export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>

      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla neque
        placeat quod aliquid facilis quo iste impedit ducimus laboriosam
        laudantium beatae eligendi, fugiat aut distinctio? Accusantium illum
        animi debitis autem.
      </p>
    </>
  );
}
