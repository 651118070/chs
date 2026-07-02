"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hygiene from '@/public/assets/hygiene-s.png'
import nettoyage from '@/public/assets/nettoyage-s.png'
import water from '@/public/assets/water.png'
import scarabee from '@/public/assets/scarabee.png'
import tree from '@/public/assets/tree.png'
import box from '@/public/assets/box.png'
import boat from '@/public/assets/boat.png'
import check from '@/public/assets/check.png'
import gap from '@/public/assets/gap.png'

import Image from 'next/image';

import { ArrowRight, CircleCheck } from "lucide-react";
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  const t = useI18n();
  const params = useParams();
  const locale = params?.locale || "fr";
  return (
    <main>
      <section  data-aos='slide-up' className='bg-blue20 mt-20'>
        <div className='flex items-center justify-center md:gap-5 gap-3 flex-col max-w-6xl mx-auto p-6'>
          <h1 className='text-white'>{t('service.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('service.span')}</span></h1>
          <p className='md:text-[18px] text-center'>{t('service.text')}
          </p>
        </div>
      </section>
      <section id='hygiene'  data-aos='slide-up'>
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={hygiene} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.hygiene')}
              </h2>
            </div>
            <p>{t('service.htext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.nuisibles")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.virus")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.complete")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.chimique")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li>
            </ul>
           <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.diagnostic')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.personalise')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.specialise')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.suivi')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>

              <div className="flex flex-wrap gap-2">
                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hopitaux')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.resto')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.industry')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hotel')}
                </span>
                  <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='netoyage' data-aos='slide-up' className='bg-blue20'>
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={nettoyage} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.netoyage')}
              </h2>
            </div>
            <p>{t('service.ntext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.carreaux")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.paquets")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.moquettes")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.marbres")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
             <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.site')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.choix')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.profondeur')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.rapport')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.usine')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.entrepots')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.atelier')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.zone')}
                </span>
                  <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='entretien' data-aos='slide-up' >
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={tree} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.entretien')}
              </h2>
            </div>
            <p>{t('service.etext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.plantation")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.fertilisation")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.gazon")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haie")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
              <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.conception')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.amenagement')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.planifie')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.saisoner')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.entreprises')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hotel')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.residence')}
                </span>

                <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.espace')}
                </span>
                  <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hotel')}
                </span>
                  <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='piscine' data-aos='slide-up' className='bg-blue20'>
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={water} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.piscine')}
              </h2>
            </div>
            <p>{t('service.ptext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.eau")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.complet")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.bassin")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.traitement")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
             <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.test')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.chimique')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.mecanique')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.qualite')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hotel')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.residence')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.club')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.touristique')}
                </span>
                   <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='traitement' data-aos='slide-up' >
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={scarabee} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.phytosanitaires')}
              </h2>
            </div>
            <p>{t('service.ttext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.cacao")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.fume")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.riz")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.farine")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
          <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
             
            
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.produit')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.traitement')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.application')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.certification')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.export')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.import')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.agricole')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.locale')}
                </span>
               <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos='slide-up' className='bg-blue20'>
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={box} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.emballage')}
              </h2>
            </div>
            <p>{t('service.emtext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.nmp15")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.marquage")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.thermique")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.exporte")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
             <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.palette')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.tcertifie')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.nmp15')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.documentation')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.export')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.logistique')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.industry')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.commerce')}
                </span>
                   <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos='slide-up' >
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={boat} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.navire')}
              </h2>
            </div>
            <p>{t('service.natext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.fumigation")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.cargaison")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.desinfection")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.sanitaire")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
             <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.inspection')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.planf')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.traitements')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.certification')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.maritime')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.port')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.maritimes')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.douane')}
                </span>
                   <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos='slide-up' className='bg-blue20'>
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={check} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.inspections')}
              </h2>
            </div>
            <p>{t('service.atext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.audit")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.detaille")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.evaluation")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.recommendation")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
           <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.planification')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.terrain')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.analyse')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.documentation')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.rapportsuivi')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.secteurs')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.industry')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.hotellerie')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.sante')}
                </span>
                   <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  data-aos='slide-up' id='qhse' >
        <div className='grid md:grid-cols-2 gap-5 max-w-6xl mx-auto p-6'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-100 rounded-xl p-3 shrink-0'>
                <Image src={gap} alt='hygiene-icon' className='w-5 h-5' />
              </div>
              <h2 className='text-blue font-header md:text-3xl text-xl font-extrabold'>
                {t('service.qhse')}
              </h2>
            </div>
            <p>{t('service.qtext')}</p>
            <h3 className='text-[16px] font-base font-semibold leading-6 text-blue'>{t('service.avantage')}</h3>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.formationscertifiantes")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.experts")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.sm")}
              </li>

              <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.sp")}
              </li>

              {/* <li className="flex items-center gap-2 text-blue">
                <CircleCheck className="text-pink-500 shrink-0" />
                {t("service.haute")}
              </li> */}
            </ul>
             <button className='flex btn-devis justify-center  gap-2 items-center'>
              <Link href={`/${locale}/contact`}>{t('navbar.devis')}</Link>
              <ArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-blue font-semibold font-base leading-6 text-[16px]">
              {t("service.processus")}
            </h3>
            <div className='flex flex-col gap-5 max-md:pr-3'>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  1
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.besoin')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  2
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.pp')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  3
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.formation')}</span>
              </div>
              <div className='flex gap-2 items-center bg-blue-200/25 border-blue border rounded-xl p-3'>
                <div className='rounded-xl bg-red-200 text-violet py-2 px-4 font-header font-extrabold leading-6 text-[14px]'>
                  4
                </div>
                <span className='text-blue text-[14px] font-base font-medium'>{t('service.ec')}</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-blue text-[16px] font-base leading-6'>{t('service.desservis')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.entreprises')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.industry')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.sante')}
                </span>

                <span className="w-fit whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.resto')}
                </span>
                   <span className="whitespace-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4">
                  {t('service.autres')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
