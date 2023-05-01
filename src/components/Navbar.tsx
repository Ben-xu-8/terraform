import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { FC } from 'react';
import { buttonVariants } from '@/ui/Button';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';
import ThemeToggle from '@/components/ThemeToggle';
import { Press_Start_2P, Play } from 'next/font/google';
import clsx from 'clsx';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

const play = Play({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700  shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link
          href='/'
          className={clsx(
            buttonVariants({ variant: 'link' }),
            `${pressStart2P.className}`
          )}
        >
          TerraForm
        </Link>
        <div className='md:hidden'>
          <ThemeToggle />
        </div>
        <div className='hidden md:flex gap-4'>
          <ThemeToggle />
          <Link
            href='/install'
            className={clsx(
              buttonVariants({ variant: 'ghost' }),
              `${play.className}`
            )}
          >
            Install
          </Link>
          {session ? (
            <>
              <Link
                className={clsx(
                  buttonVariants({ variant: 'ghost' }),
                  `${pressStart2P.className}`
                )}
                href='/dashboard'
              >
                Dashboard
              </Link>
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
