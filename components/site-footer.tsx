import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image 
              src="/images/logo.png" 
              alt="ECEC Workforce Solutions" 
              width={180} 
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-primary-foreground/80">
              Educators Educate. Cleaners Clean.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md">
              Australia&apos;s first published, evidence-based infection prevention governance framework for ECEC.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/for-centres" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  For Centres
                </Link>
              </li>
              <li>
                <Link href="/for-cleaning-companies" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  For Cleaning Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:ececworkforcesolutions@outlook.com" className="hover:text-primary-foreground transition-colors">
                  ececworkforcesolutions@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:0432355396" className="hover:text-primary-foreground transition-colors">
                  0432 355 396
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Western Sydney, NSW, Australia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-primary-foreground/70">
            &copy; 2026 ECEC Workforce Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
