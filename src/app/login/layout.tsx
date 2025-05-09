export const metadata = {
  title: "Minible Login",
  description: "Admin & Dashboard Template Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`antialiased authentication-bg`}>{children}</body>;
}
