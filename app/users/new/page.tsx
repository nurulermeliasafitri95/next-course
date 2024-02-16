'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

function NewUsersPage() {

  const router = useRouter ();
  return (
    <button 
    className='btn btn-primary'
    onClick={() => router.push('/users')}>Create</button>
  )
}

export default NewUsersPage