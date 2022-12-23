import { IconeLua, IconeSol } from '../icons';

interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.alternarTema}
      className={`
            hidden sm:flex items-center cursor-pointer  
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}
    >
      <div
        className={` 
                flex justify-center items-center
                bg-white text-yellow-600 rounded-full
                w-6 h-6  
            `}
      >
        {IconeSol(4)}
      </div>
      <div className={` hidden lg:flex items-center ml-3 text-white `}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={` 
            hidden sm:flex items-center cursor-pointer justify-end
            bg-gradient-to-l from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full   
            `}
    >
      <div className={` hidden lg:flex items-center mr-2 text-gray-100 `}>
        <span>Escuro</span>
      </div>

      <div
        className={` 
                flex justify-center items-center
                bg-black text-gray-100 rounded-full
                w-6 h-6
                `}
      >
        {IconeLua(4)}
      </div>
    </div>
  );
}
