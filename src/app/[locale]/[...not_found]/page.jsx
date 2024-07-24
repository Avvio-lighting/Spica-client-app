import Link from 'next/link';
export default function NotFound() {
  return (
    <html>
      <body>
        <div className='absolute left-0 top-0 z-[200] flex h-screen w-screen flex-col items-center justify-center bg-honeydew'>
          <h2 className='p-5 text-6xl font-semibold'>404 | Page Not Found</h2>
          <p className='p-5 text-lg text-dolphine'>
            Page you are searching for is not found
          </p>
          <Link href='/' className='button'>
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
