"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hygiene from '@/public/assets/hygiene-s.png'
import nettoyage from '@/public/assets/nettoyage-s.png'
import tree from '@/public/assets/tree.png'
import Image from 'next/image';
import {  ArrowRight, CircleCheck } from "lucide-react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  const t = useI18n();
  return (
    <main>
      <section data-aos='slide-up' className='bg-blue20'>
        <div className='flex items-center gap-5 flex-col max-w-6xl mx-auto p-6'>
          <h1 className='text-white'>{t('service.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('service.span')}</span></h1>
          <p className='md:text-[18px]'>{t('service.text')}
          </p>
        </div>
      </section>
      <section data-aos='slide-up'>
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
            <button className='flex btn-devis md:w-1/3 w-1/2 gap-2 items-center'>
              {t('navbar.devis')}
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
    <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-2 text-nowrap items-center max-md:pr-3'>
      <span className='flex-nowrap bg-blue-200/25 text-blue border   border-blue rounded-2xl py-1 px-4'>{t('service.hopitaux')}</span> 
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.resto')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.industry')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.hotel')}</span>
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
            <button className='flex btn-devis md:w-1/3 w-1/2 gap-2 items-center'>
              {t('navbar.devis')}
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
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-nowrap items-center'>
      <span className='flex-nowrap bg-blue-200/25 text-blue border   border-blue rounded-2xl py-1 px-4'>{t('service.usine')}</span> 
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.entrepots')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.atelier')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border text-nowrap border-blue rounded-2xl py-1 px-4'>{t('service.zone')}</span>
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
            <button className='flex btn-devis md:w-1/3 w-1/2 gap-2 items-center'>
              {t('navbar.devis')}
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
    <div className='grid grid-cols-2 text-center md:grid-cols-4 gap-2 text-nowrap items-center'>
      <span className='flex-nowrap bg-blue-200/25 text-blue border   border-blue rounded-2xl py-1 px-4'>{t('service.entreprises')}</span> 
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.hotel')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.residence')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border text-nowrap border-blue rounded-2xl py-1 px-4'>{t('service.espace')}</span>
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
            <button className='flex btn-devis md:w-1/3 w-1/2 gap-2 items-center'>
              {t('navbar.devis')}
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
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-center  items-center'>
      <span className='flex-nowrap bg-blue-200/25 text-blue border   border-blue rounded-2xl py-1 px-4'>{t('service.usine')}</span> 
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.entrepots')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border border-blue rounded-2xl py-1 px-4'>{t('service.atelier')}</span>
       <span className='flex-nowrap bg-blue-200/25 text-blue border text-nowrap border-blue rounded-2xl py-1 px-4'>{t('service.zone')}</span>
    </div>
    </div>
  </div> 
        </div>
      </section>
    </main>
  )
}
