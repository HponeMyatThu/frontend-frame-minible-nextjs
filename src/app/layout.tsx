export const metadata = {
  title: "Minible Login",
  description: "Admin & Dashboard Template Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/icons.min.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
      </head>
      <>{children}</>
    </html>
  );
}
