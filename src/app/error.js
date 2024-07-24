'use client';
import Link from 'next/link';
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className='absolute left-0 top-0 z-[200] flex h-screen w-screen flex-col items-center justify-center bg-honeydew'>
          <h2 className='p-5 text-6xl font-semibold'>Something Went Wrong</h2>
          <button className='button m-5' onClick={() => reset()}>
            Try again
          </button>
          <Link href='/' className='button m-5'>
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
