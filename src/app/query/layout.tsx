import { ReactQueryClientProvider } from '@/app/react-query-client-provider';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <div className="h-full w-full bg-orange-100">{children}</div>
    </ReactQueryClientProvider>
  );
}
