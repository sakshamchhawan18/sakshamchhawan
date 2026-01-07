import { RssIcon } from "lucide-react";
import Link from "next/link";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/sakshamchhawan"
            target="_blank"
            rel="noopener"
          >
            Saksham
          </a>
        
          .
        </p>

        <div className="screen-line-before flex justify-center gap-2 py-3 font-mono text-xs text-muted-foreground sm:hidden">
          <Link className="font-medium" href="/sponsors">
            Sponsors
          </Link>

          <span className="opacity-50">•</span>

          <a
            className="font-medium"
            href={`${SITE_INFO.url}/llms.txt`}
            target="_blank"
            rel="noopener noreferrer"
          >
            llms.txt
          </a>
        </div>
      </div>
    </footer>
  );
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />;
}
