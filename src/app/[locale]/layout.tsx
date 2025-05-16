import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Script from "next/script";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/icons.min.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
        <link
          href="/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>

      <>
        <NextIntlClientProvider>
          {/* <Navigation /> */}
          {children}
        </NextIntlClientProvider>
      </>

      <>
        <Script src="/assets/libs/jquery/jquery.min.js"></Script>
        <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/libs/metismenu/metisMenu.min.js"></Script>
        <Script src="/assets/libs/simplebar/simplebar.min.js"></Script>
        <Script src="/assets/libs/node-waves/waves.min.js"></Script>
        <Script src="/assets/libs/waypoints/lib/jquery.waypoints.min.js"></Script>
        <Script src="/assets/libs/jquery.counterup/jquery.counterup.min.js"></Script>
        <Script src="/assets/js/app.js"></Script>
        <Script src="/assets/libs/datatables.net/js/jquery.dataTables.min.js"></Script>
        <Script src="/assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></Script>
        <Script src="/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></Script>
        <Script src="/assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></Script>
        <Script src="/assets/libs/jszip/jszip.min.js"></Script>
        <Script src="/assets/libs/pdfmake/build/pdfmake.min.js"></Script>
        <Script src="/assets/libs/pdfmake/build/vfs_fonts.js"></Script>
        <Script src="/assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></Script>
        <Script src="/assets/libs/datatables.net-buttons/js/buttons.print.min.js"></Script>
        <Script src="/assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></Script>
        <Script src="/assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></Script>
        <Script src="/assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></Script>
        <Script src="/assets/js/pages/datatables.init.js"></Script>
      </>
    </html>
  );
}
