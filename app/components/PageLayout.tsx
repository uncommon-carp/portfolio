interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 md:pl-48">
      {children}
    </div>
  );
}
