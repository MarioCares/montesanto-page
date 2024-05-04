import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import Navbar from "~/components/ui/navbar/Navbar";
import { LinksFunction } from "@remix-run/cloudflare";
import React from "react";
import Footer from "~/components/ui/Footer";
import PageHeader from "~/components/ui/PageHeader";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "/css/bulma.min.css",
    },
    {
      rel: "stylesheet",
      href: "/css/styles.css",
    },
    {
      rel: "stylesheet",
      href: "/css/themify-icons.css",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <>
      <PageHeader title={"Algo pasó..."} page={"¿qué pasó?"} />
      <section className="section-sm">
        <div className="container content">
          <div className="columns is-align-items-center is-justify-content-center">
            <div className="column is-9-widescreen is-10-desktop">
              <div className="pl-4">
                {isRouteErrorResponse(error) ? (
                  <div>
                    <h1>
                      {error.status} {error.statusText}
                    </h1>
                    <p>{error.data}</p>
                  </div>
                ) : (
                  <>
                    {error instanceof Error ? (
                      <div>
                        <h1>Error</h1>
                        <p>{error.message}</p>
                        <p>The stack trace is:</p>
                        <pre>{error.stack}</pre>
                      </div>
                    ) : (
                      <h1>Unknown Error</h1>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return <Outlet />;
}
