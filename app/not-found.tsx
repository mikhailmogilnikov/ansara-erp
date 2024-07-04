'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('navigate', '/');
    router.push('/');
  }, []);

  return null;
};

export default NotFoundPage;
