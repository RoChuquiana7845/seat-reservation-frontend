import Image from 'next/image';
import SignupForm from './signupForm';

export default function SignupPage() {
  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">Join Us</h1>
          <p className="text-white mt-1">Create your account</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="/auth/login"
              className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
              Already have an account?
            </a>
          </div>
          <Image
            src="/picture/login.svg"
            alt="Sign Up Image"
            width={400}
            height={400}
            className="mt-8"
          />
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <SignupForm />
      </div>
    </div>
  );
}
