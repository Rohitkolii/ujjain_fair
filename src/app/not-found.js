import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-4xl w-full px-6">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col items-start justify-center gap-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-10 w-10 text-destructive" />
                <h1 className="text-4xl font-heading font-extrabold">404</h1>
              </div>

              <h2 className="text-2xl font-semibold text-foreground">
                Page not found
              </h2>

              <p className="text-muted-foreground">
                We couldn't find the page you're looking for. It may have been
                removed, had its name changed, or is temporarily unavailable.
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/">
                  <Button>Go to Home</Button>
                </Link>

                {/* <Link href="/products">
                  <Button variant="outline">Browse Products</Button>
                </Link> */}

                <Link href="/contact">
                  <Button variant="ghost">Contact Support</Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-6 flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/images/logo.jpeg"
                  alt="Herbal Fair Logo"
                  className="mx-auto h-32 w-auto mb-4"
                />
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  If you think this is an error, please reach out via our
                  contact page and we'll help you find what you're looking for.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
