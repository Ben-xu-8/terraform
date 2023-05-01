'use client';

import { FC, useState } from 'react';
import Button from './ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/components/ui/toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutGoogle = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing Out',
        message: 'Please Try Again',
        type: 'error',
      });
    }
  };
  return (
    <Button onClick={signOutGoogle} isLoading={isLoading}>
      SignOut
    </Button>
  );
};

export default SignOutButton;
