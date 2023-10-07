import { AppProps } from "$fresh/server.ts";
import Navbar from "../components/Navrbar.tsx";
import Sidebar from "../islands/Sidebar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html class={'bg-[#18181b]'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@3.7.7/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="./input.css" />
        <title>UiTaskFresh</title>
      </head>
      <body className="">
        <Sidebar />
        <Navbar />

        <Component/>
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
