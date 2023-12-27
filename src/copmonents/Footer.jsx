import { Command, Moon, Sun, Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-solid m-4">
      <div className="container h-14 flex flex-col sm:flex-row items-center space-between">
        <p className="text-sm flex items-center gap-1 sm:mr-auto">
          <Command className="h-5 w-5 shrink-0 mr-2" /> Built by&nbsp;
          <a
            href="https://github.com/JitendraKumar1092"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            @jeet
          </a>
          &nbsp; with &nbsp; <Heart /> &nbsp; Hosted on&nbsp;
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
        </p>
        . The source code is available on&nbsp;
        <a
          href="https://github.com/JitendraKumar1092/Imaginary-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
        <button className="hidden sm:inline-block">
          <Sun className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
