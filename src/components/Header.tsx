"use client"
import Link from 'next/link';
import logo from '@/public/assets/logo.jpg'
import Image from "next/image";
import { startTransition, useState } from "react";
import { useI18n } from "@/src/locales/client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Switch } from "./ui/switch";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';
export default function Header() {
    const toggleLanguage = () => {
      const newLocale = locale === "fr" ? "en" : "fr";
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPath = segments.join("/") || "/";
      startTransition(() => {
        router.push(newPath);
      });
    };
     const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const params = useParams();
    const t = useI18n();
    const locale = params?.locale || "fr";
    const router = useRouter();
   const navItems = [
    { href: `/${locale}`, label: t("navbar.home") },
    { href: `/${locale}/about`, label: t("navbar.about") },
    { href: `/${locale}/services`, label: t("navbar.service") },
    { href: `/${locale}/sanitary`, label: t("navbar.nettoyage") },
    { href: `/${locale}/contact`, label: t("navbar.contact") },
   
  ];
  return (
    <header>
      <div className='max-w-6xl mx-auto p-6 '>
        {/*------------------------------------- desktop menu -------------------------------- */}
        <nav className='hidden md:flex justify-between gap-5'>
         <Link href={`/${locale}`}>
           <Image
          src={logo}
          alt="CHS"
          priority
          width={63}
          height={33}
          />
         </Link>
            <ul className="flex text-gray  gap-5 text-sm ml-3">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 hover:text-violet ${
                    pathname === href ? "text-blue  px-2 py-1 rounded" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
     <div className='flex gap-2 items-center'>
           <button className='btn-devis'> <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link></button>
           <div
          aria-label="Changer la langue"
          className="flex  gap-4"
        >
          FR
          <Switch checked={locale === "en"} onCheckedChange={toggleLanguage} />
          EN
        </div>
     </div>
        </nav>
        <div className="md:hidden flex justify-between">
               <Link href={`/${locale}`}>
           <Image
          src={logo}
          alt="CHS"
          priority
          width={63}
          height={33}
          />
         </Link>
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger>
      <Menu />
    </SheetTrigger>
    <SheetContent className="p-6 z-1000 bg-white">
         <nav className='flex flex-col justify-center gap-5 mt-10'>
    
            <ul className="flex flex-col text-gray gap-5 text-sm ">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 hover:text-violet ${
                    pathname === href ? "text-blue  px-2 py-1 rounded" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
  
           <button className='btn-devis'> <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link></button>
           <div
          aria-label="Changer la langue"
          className="flex  gap-4"
        >
          FR
          <Switch checked={locale === "en"} onCheckedChange={toggleLanguage} />
          EN
        </div>
    
        </nav>
    </SheetContent>
  </Sheet>
</div>
      </div>
    </header>
  )
}
