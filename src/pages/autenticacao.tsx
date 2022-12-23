import { useState } from 'react';
import AuthInput from '../components/auth/authInput';

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function submeter() {
    if (modo === 'login') {
    } else {
    }
  }

  return (
    <div className={` flex h-screen items-center justify-center `}>
      <div className={'hidden sm:block sm:w-1/2 lg:w-2/3'}>
        <img
          src="imagen-login.jpg"
          alt="Imagem da Tela de Autinticação"
          className={' h-screen w-full object-cover'}
        />
      </div>
      <div className={'sm:w-1/2 lg:w-1/3 w-full m-10'}>
        <h1
          className={` 
                    text-xl font-bold mb-5
                ]`}
        >
          {modo === 'login'
            ? 'Entre Com Sua Conta'
            : 'Casdastre-se Na Plataforma'}
        </h1>
        <AuthInput
          tipo={'email'}
          label={'Email'}
          valor={email}
          obrigatorio
          valorMudou={setEmail}
        />

        <AuthInput
          tipo={'password'}
          label={'Senha'}
          valor={senha}
          obrigatorio
          valorMudou={setSenha}
        />

        <button
          onClick={submeter}
          className={` font-bold
                    w-full rounded-lg px-4 py-3 mt-6    
                    bg-indigo-500 hover:bg-indigo-400 text-white 
                `}
        >
          {modo === 'login' ? 'Entrar' : 'Casdastrar'}
        </button>
        <hr className={'my-6 border-gray-300 w-full'} />

        <button
          onClick={submeter}
          className={` font-bold
                    w-full rounded-lg px-4 py-3 
                    bg-red-500 hover:bg-red-400 text-white 
                `}
        >
          Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className={'mt-5'}>
            Novo Por Aqui?
            <a
              onClick={() => setModo('cadastro')}
              className={` 
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer 
                        `}
            >
              {' '}
              Crie Uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className={'mt-5'}>
            Já Faz Parte Da Nossa Comunidade?
            <a
              onClick={() => setModo('login')}
              className={` 
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer 
                        `}
            >
              {' '}
              Entre Com Suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
