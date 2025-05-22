import PageTopBar from "@/layout/PageTopBar";
import VerticalMenu from "@/layout/VerticalMenu";

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
    <body>
      <div id="layout-wrapper">
        <div id="layout-wrapper">
          <PageTopBar />
          <VerticalMenu />
        </div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </body>
  );
}
