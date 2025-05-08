import Script from "next/script";

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

      <Script src="/assets/libs/jquery/jquery.min.js"></Script>
      <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/libs/metismenu/metisMenu.min.js"></Script>
      <Script src="/assets/libs/simplebar/simplebar.min.js"></Script>
      <Script src="/assets/libs/node-waves/waves.min.js"></Script>
      <Script src="/assets/libs/waypoints/lib/jquery.waypoints.min.js"></Script>
      <Script src="/assets/libs/jquery.counterup/jquery.counterup.min.js"></Script>

      <Script src="/assets/js/app.js"></Script>
    </html>
  );
}
