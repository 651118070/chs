"use client"
import { useI18n } from "@/src/locales/client";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import Image from "next/image";
import lavabo from '@/public/assets/lavabo.png'
import lavabo1 from '@/public/assets/toilette.png'
import lavabo2 from '@/public/assets/toilette2.png'
import desinfect from '@/public/assets/deinfecte.png'
import detract from '@/public/assets/detract.png'
import odeur from '@/public/assets/odeur.png'
import hygiene from '@/public/assets/hygiene.png'
import maintenance from '@/public/assets/maintenance.png'
import consomable from '@/public/assets/consomable.png'
import qualite from '@/public/assets/qualite.png'
import site from '@/public/assets/site.png'
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"
export default function Sanitary() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  const params = useParams();
  const t = useI18n();
  const locale = params?.locale || "fr";
  return (
    <main>
      <section className='bg-blue20'>
        <div className='max-w-6xl mx-auto gap-5 p-6'>
          <div className="flex flex-col gap-5 justify-center max-md:items-center">
            <h1 className="max-md:text-center">{t("netoyage.sanitaire")}</h1>
            <p className="md:text-[18px] max-md:text-center">{t("netoyage.ntext")}</p>
            <div className="flex gap-5 p-6">
              <button className='flex btn-devis bg-violet  gap-2 items-center'>
                <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
                <ArrowRight />
              </button>

              <button className='flex btn-devis bg-green  gap-2 items-center' type='submit'> <MessageCircle /><a href="">{t('contact.whatsapp1')}</a></button>


            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto p-6 gap-5">
          <div className="flex flex-col gap-5">
            <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border font-semibold  border-blue rounded-2xl py-1 px-4">
              {t('netoyage.before')}
            </span>
            <h2>{t('netoyage.btext')}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-xl flex flex-col gap-2 shadow  group  hover:scale-105 transition-transform duration-300">
                <Image src={lavabo} alt='lavabo' className='rounded-t-xl w-full' />
                <span className="px-3 pt-3  font-base text-[14px] font-semibold group-hover:text-blue">{t("netoyage.cas")} 1</span>
                <span className="px-3 text-gray pb-3 font-normal font-base text-[14px]">{t("netoyage.resto")}</span>
              </div>
              <div className="rounded-xl flex flex-col gap-2 shadow  group  hover:scale-105 transition-transform duration-300">
                <Image src={lavabo1} alt='lavabo' className='rounded-t-xl w-full' />
                <span className="px-3 pt-3  font-base text-[14px] font-semibold group-hover:text-blue">{t("netoyage.cas")} 2</span>
                <span className="px-3 text-gray pb-3 font-normal font-base text-[14px]">{t("netoyage.resto")}</span>
              </div>
              <div className="rounded-xl flex flex-col gap-2 shadow  group  hover:scale-105 transition-transform duration-300">
                <Image src={lavabo2} alt='lavabo' className='rounded-t-xl w-full' />
                <span className="px-3 pt-3  font-base text-[14px] font-semibold group-hover:text-blue">{t("netoyage.cas")} 3</span>
                <span className="px-3 text-gray pb-3 font-normal font-base text-[14px]">{t("netoyage.resto")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-blue20'>
        <div className="max-w-6xl mx-auto gap-5 p-6 flex flex-col ">
          <h2>{t('netoyage.protocol')}</h2>
          <div className="grid  md:grid-cols-5 gap-5">
            <div className="bg-white border rounded-2xl border-transparent shadow hover:scale-105 transition-transform duration-300 flex flex-col gap-2 justify-center p-2">
              <div className='rounded-full w-10 bg-violet text-white py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                1
              </div>
              <span className=" text-gray  font-semibold font-base text-[14px]">
                {t('netoyage.audit')}
              </span>
            </div>
            <div className="bg-white border rounded-2xl border-transparent shadow hover:scale-105 transition-transform duration-300 flex flex-col gap-2 justify-center p-2">
              <div className='rounded-full w-10 bg-violet text-white py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                2
              </div>
              <span className=" text-gray  font-semibold font-base text-[14px]">
                {t('netoyage.hygiene')}
              </span>
            </div>
            <div className="bg-white border rounded-2xl border-transparent shadow hover:scale-105 transition-transform duration-300 flex flex-col gap-2 justify-center p-2">
              <div className='rounded-full w-10 bg-violet text-white py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                3
              </div>
              <span className=" text-gray  font-semibold font-base text-[14px]">
                {t('netoyage.oeuvres')}
              </span>
            </div>
            <div className="bg-white border rounded-2xl border-transparent shadow hover:scale-105 transition-transform duration-300 flex flex-col gap-2 justify-center p-2">
              <div className='rounded-full w-10 bg-violet text-white py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                4
              </div>
              <span className=" text-gray  font-semibold font-base text-[14px]">
                {t('netoyage.control')}
              </span>
            </div>
            <div className="bg-white border rounded-2xl border-transparent shadow hover:scale-105 transition-transform duration-300 flex flex-col gap-2 justify-center p-2">
              <div className='rounded-full w-10 bg-violet text-white py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                5
              </div>
              <span className=" text-gray  font-semibold font-base text-[14px]">
                {t('netoyage.reporting')}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="max-w-6xl mx-auto gap-5 p-6 flex flex-col ">
          <h2>{t('netoyage.intervention')}</h2>
          <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={desinfect} alt="icon" className="w-5" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.profonde')}
              </h2>
              <p>
                {t('netoyage.ptext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={detract} alt="icon" className="w-5" />
              <h2 className=" text-gray  leading-tight font-header text-[16px]">
                {t('netoyage.detratage')}
              </h2>
              <p>
                {t('netoyage.dtext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={odeur} alt="icon" className="w-5" />
              <h2 className=" text-gray  leading-tight font-header text-[16px]">
                {t('netoyage.anti')}
              </h2>
              <p>
                {t('netoyage.atext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={hygiene} alt="icon" className="w-5" />
              <h2 className=" text-gray leading-tight  font-header text-[16px]">
                {t('netoyage.point')}
              </h2>
              <p>
                {t('netoyage.pointtext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={maintenance} alt="icon" className="w-5" />
              <h2 className=" text-gray  leading-tight font-header text-[16px]">
                {t('netoyage.maintenance')}
              </h2>
              <p>
                {t('netoyage.mtext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={consomable} alt="icon" className="w-5" />
              <h2 className=" text-gray leading-tight text-wrap font-header text-[14px]">
                {t('netoyage.consomables')}
              </h2>
              <p>
                {t('netoyage.context')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={qualite} alt="icon" className="w-5" />
              <h2 className=" text-gray leading-tight  font-header text-[16px]">
                {t('netoyage.controlqualite')}
              </h2>
              <p>
                {t('netoyage.controlqualite')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Image src={site} alt="icon" className="w-5" />
              <h2 className=" text-gray leading-tight  font-header text-[16px]">
                {t('netoyage.formationpersonel')}
              </h2>
              <p>
                {t('netoyage.personel')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-blue'>
        <div className="max-w-6xl mx-auto gap-5 p-6 grid md:grid-cols-2">
          <div className="flex flex-col  gap-5 text-white">
            <h2 className="font-syne md:text-4xl text-white text-2xl leading-10 tracking-tight font-extrabold">{t('netoyage.produit')}</h2>
            <p className="text-[16px] font-base font-normal leading-6">{t('netoyage.produitext')}</p>
            <ul className="text-white flex flex-col gap-2 ">
              <li className="flex gap-2 font-base font-normal text-[14px]">
                <Check className="text-violet w-5" />
                {t('netoyage.alcalin')}
              </li>
              <li className="flex gap-2 font-base font-normal text-[14px]">
                <Check className="text-violet w-5" />
                {t('netoyage.spectre')}
              </li>
              <li className="flex gap-2 font-base font-normal text-[14px]">
                <Check className="text-violet w-5" />
                {t('netoyage.odeur')}
              </li>
              <li className="flex gap-2 font-base font-normal text-[14px]">
                <Check className="text-violet w-5" />
                {t('netoyage.consommables')}
              </li>
            </ul>
          </div>

        </div>
      </section>
      <section >
        <div className="max-w-6xl mx-auto gap-5 p-6 flex flex-col ">
          <h2>{t('netoyage.gagnez')}</h2>
          <div className="grid  md:grid-cols-3  gap-5">
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.image')}
              </h2>
              <p>
                {t('netoyage.itext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.preserve')}
              </h2>
              <p>
                {t('netoyage.prouvee')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.conformite')}
              </h2>
              <p>
                {t('netoyage.context')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.tranquilite')}
              </h2>
              <p>
                {t('netoyage.ttext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.maitrise')}
              </h2>
              <p>
                {t('netoyage.mtext')}
              </p>
            </div>
            <div data-aos='zoom-in' className=" bg-white border rounded-2xl border-transparent shadow  hover:scale-105 transition-transform duration-300 flex flex-col gap-2 p-2">
              <Check className="w-5 text-violet" />
              <h2 className=" text-gray leading-tight font-header text-[16px]">
                {t('netoyage.24h')}
              </h2>
              <p>
                {t('netoyage.24text')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="max-w-6xl mx-auto gap-5 p-6 flex flex-col ">
          <h2>{t('netoyage.faq')}</h2>
          <div className="grid gap-2">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="0">
                <AccordionTrigger>{t('netoyage.obtenir')}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="1">
                <AccordionTrigger>{t('netoyage.desservis')}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="2">
                <AccordionTrigger>{t('netoyage.desservis')}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="3">
                <AccordionTrigger>{t('netoyage.weekend')}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="4">
                <AccordionTrigger>{t('netoyage.produitutilise')}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="mb-3 bg-blue max-w-6xl mx-auto flex flex-col gap-2 p-6 rounded-2xl items-center justify-center text-white">
        <h2 className="md:text-4xl text-2xl font-header font-extrabold leading-10 tracking-tight ">{t('netoyage.pret')}</h2>
        <div className="flex gap-5 p-6">
          <button className='flex btn-devis bg-violet  gap-2 items-center'>
            <Link href={`/${locale}/contact`}>{t('netoyage.devisgratuit')}</Link>
            <ArrowRight />
          </button>

          <button className='flex btn-devis bg-green  gap-2 items-center' type='submit'> <MessageCircle /><a href="">{t('contact.whatsapp1')}</a></button>


        </div>
      </section>
    </main>
  )
}
