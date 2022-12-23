import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  return (
    <aside
      className={` 
            flex flex-col bg-gray-300 dark:bg-gray-900 
            `}
    >
      <div
        className={` 
                flex flex-col items-center justify-center
                w-20 h-20 bg-gradient-to-r from-green-600 to-green-800
            `}
      >
        <Logo />
      </div>
      <ul className={` flex-grow `}>
        <MenuItem
          url={'/'}
          texto={'Inicio'}
          icone={IconeCasa}
        />
        <MenuItem
          url={'/ajustes'}
          texto={'Ajuste'}
          icone={IconeAjustes}
        />
        <MenuItem
          url={'/notificacoes'}
          texto={'Notificações'}
          icone={IconeSino}
        />
      </ul>
      <ul className={` `}>
        <MenuItem
          onClick={() => console.log('logout')}
          texto={'Sair'}
          icone={IconeSair}
          className={` 
                        text-red-700 dark:text-red-500
                        hover:text-white dark:hover:text-gray-900 
                        hover:bg-red-500 dark:hover:bg-red-500 
                    `}
        />
      </ul>
    </aside>
  );
}
