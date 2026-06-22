"use client";
import Image from "next/image";
import { startTransition, useEffect } from "react";
import { useI18n } from "@/src/locales/client";
import Link from "next/link";
import logo from "@/public/assets/logo.jpg";
import whatsapp from "@/public/assets/Link - WhatsApp.png";
import facebook from "@/public/assets/Link - Facebook.png";
import linkedln from "@/public/assets/LinkedIn.png";
import instagram from "@/public/assets/Link - Instagram.png";
import youtube from "@/public/assets/Link - YouTube.png";
import location from "@/public/assets/location.png";
import phone from "@/public/assets/phone.png";
import mail from "@/public/assets/message.png";
import arrow from "@/public/assets/arrow.png";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Switch } from "./ui/switch";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    startTransition(() => {
      router.push(newPath);
    });
  };
  const pathname = usePathname();
  const params = useParams();
  const t = useI18n();
  const locale = params?.locale || "fr";
  const router = useRouter();
  const serviceItems = [
    { href: `/${locale}/services/#sanitary`, label: t("footer.sanitary") },
    { href: `/${locale}/services/#hygiene`, label: t("footer.hygiene") },
    { href: `/${locale}/services/#traitement`, label: t("footer.traitement") },
    { href: `/${locale}/services/#netoyage`, label: t("footer.netoyage") },
    { href: `/${locale}/services/#entretien`, label: t("footer.entretien") },
    { href: `/${locale}/services/#piscine`, label: t("footer.piscine") },
    { href: `/${locale}/services/#qhse`, label: t("footer.qhse") },
  ];
   const resourceItems = [
    { href: `/${locale}/resources/#faq`, label: t("footer.faq") },
    { href: `/${locale}/resources/#realisation`, label: t("footer.realisation") },
    { href: `/${locale}/resources/#about`, label: t("footer.about") },
    { href: `/${locale}/resources/#contact`, label: t("footer.contact") },
   
  ];
  return (
    <footer  className="bg-blue text-white lg:py-10 max-lg:p-10">
      <div className="grid gap-5 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
  {/* Logo & Socials */}
  <div data-aos="fade-up" className="flex flex-col gap-5">
    <Link href={`/${locale}`}><Image src={logo} height={33} width={63} alt="logo" priority /></Link>
  
    <p>{t("footer.div1text")}</p>

    <div className="flex items-center gap-3 flex-wrap">
      <a href="#">
        <Image src={whatsapp} className="w-10 h-10" alt="whatsapp" />
      </a>

      <a href="#">
        <Image src={facebook} className="w-10 h-10" alt="facebook" />
      </a>

      <a href="#">
        <Image src={linkedln} className="w-10 h-10" alt="linkedin" />
      </a>

      <a href="#">
        <Image src={instagram} className="w-10 h-10" alt="instagram" />
      </a>

      <a href="#">
        <Image src={youtube} className="w-10 h-10" alt="youtube" />
      </a>
    </div>
  </div>

  {/* Services */}
  <div data-aos="fade-up" className="flex flex-col gap-5">
    <h3 className="font-semibold">SERVICES</h3>

    <ul className="flex flex-col gap-2 text-sm">
      {serviceItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`transition-colors duration-300 hover:text-violet ${
              pathname === href
                ? "bg-violet text-white hover:text-white px-2 py-1 rounded"
                : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Resources */}
  <div data-aos="fade-up" className="flex flex-col gap-5">
    <h3 className="font-semibold">RESSOURCES</h3>

    <ul className="flex flex-col gap-2 text-sm">
      {resourceItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`transition-colors duration-300 hover:text-violet ${
              pathname === href
                ? "bg-violet text-white hover:text-white px-2 py-1 rounded"
                : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Contact & Newsletter */}
  <div data-aos="fade-up" className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{t("footer.contact")}</h3>

      <div className="flex items-center gap-3">
        <Image src={location} className="w-5 h-5 shrink-0" alt="location" />
        <span>Douala, Cameroun</span>
      </div>

      <div className="flex items-center gap-3">
        <Image src={phone} className="w-5 h-5 shrink-0" alt="phone" />
        <span>+237 6 XXX XXX XXX</span>
      </div>

      <div className="flex items-center gap-3">
        <Image src={mail} className="w-5 h-5 shrink-0" alt="mail" />
        <span>contact@votreentreprise.com</span>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h4 className="font-semibold">Newsletter</h4>

      <div className="flex items-center gap-2">
        <input
          type="email"
          className="input flex-1"
          placeholder={t("footer.email")}
        />

        <button
          type="button"
          className="bg-violet rounded-full p-3 shrink-0"
        >
          <Image src={arrow} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</div>
        <div data-aos='slide-up'
          aria-label="Changer la langue"
          className="flex  gap-4"
        >
          FR
          <Switch checked={locale === "en"} onCheckedChange={toggleLanguage} />
          EN
        </div>
        <hr className="border-white/30 my-8" />

        <div className="flex gap-x-4 justify-center">
          <p className="text-center">{t("footer.copyright")} </p>
        </div>
      </div>
    </footer>
  );
}
