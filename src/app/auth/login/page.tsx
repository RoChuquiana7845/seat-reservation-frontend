import Image from 'next/image';
import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
          <p className="text-white mt-1">The simplest app to use</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="/auth/signup"
              className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
              Get Started
            </a>
          </div>
          <Image
            src="/picture/login.svg"
            alt="Login Image"
            width={400}  // Ajusta el tamaño según tus necesidades
            height={400}
            className="mt-8"
          />
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <LoginForm />
      </div>
    </div>
  );
}
