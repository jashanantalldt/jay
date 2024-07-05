"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin || !user?.isAdmin) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [router]);

  return loading;
};

export default useAuth;
