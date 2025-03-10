export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen max-w-7xl flex flex-col items-center justify-center mx-auto p-auto ">{children}</div>
  );
}
