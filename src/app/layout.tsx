import Providers from "@modules/providers"
import Script from "next/script"
import "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <Script src="https://sdk.mercadopago.com/js/v2" />
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
