'use client';

import { FC, useState } from 'react';
import Button from './ui/Button';
import { signIn } from 'next-auth/react';
import { Play } from 'next/font/google';
import { toast } from '@/components/ui/toast';

interface SignInButtonProps {}

const play = Play({
  subsets: ['latin'],
  weight: '400',
});

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing In',
        message: 'Please Try Again',
        type: 'error',
      });
    }
  };
  return (
    <Button
      onClick={signInGoogle}
      isLoading={isLoading}
      className={`${play.className}`}
    >
      SignIn
    </Button>
  );
};

export default SignInButton;
