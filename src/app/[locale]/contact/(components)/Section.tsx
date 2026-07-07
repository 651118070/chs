"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import { toast } from "sonner"
import 'aos/dist/aos.css';
import { FileText, MessageCircle, Send } from 'lucide-react';
import location from "@/public/assets/location.png";
import phone from "@/public/assets/phone.png";
import mail from "@/public/assets/message.png";
import clock from "@/public/assets/clock.png";
import emailjs from "@emailjs/browser";
import Image from 'next/image';
export default function Contacts() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    const t = useI18n();
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success("Message envoyé avec succès !");
            form.current.reset();
        } catch  {
          

            toast.error(
                 "Une erreur est survenue lors de l'envoi."
            );
        }
    };

    return (
        <main className='bg-blue20'>
            <section data-aos='slide-up' className='grid max-w-6xl mx-auto gap-5 p-6 mt-20'>
                <div className='flex items-center gap-5 flex-col'>
                    <h1 className='text-blue text-nowrap'>{t('contact.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('contact.us')}</span></h1>
                    <p data-aos='zoom-in' className='md:text-[18px] '>{t('contact.text')}
                    </p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        data-aos="slide-right"
                        className="bg-white rounded-xl shadow p-6 flex flex-col gap-5"
                    >
                        <div className="flex gap-2 items-center">
                            <FileText className="text-violet" />
                            <h2 className="text-blue">{t("contact.devis")}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-2">
                                {t("contact.name")} *
                                <input
                                    type="text"
                                    name="name"
                                    className="input1"
                                    required
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                {t("contact.email")} *
                                <input
                                    type="email"
                                    name="email"
                                    className="input1"
                                    required
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                {t("contact.phone")} *
                                <input
                                    type="tel"
                                    name="phone"
                                    className="input1"
                                    required
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                {t("contact.entreprise")}
                                <input
                                    type="text"
                                    name="company"
                                    className="input1"
                                />
                            </label>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-2">
                                {t("contact.ville")}
                                <input
                                    type="text"
                                    name="city"
                                    className="input1"
                                />
                            </label>

                            <label className="flex flex-col gap-2">
                                {t("contact.service")}
                                <select
                                    name="service"
                                    defaultValue=""
                                    className="input1 p-2"
                                    required
                                >
                                    <option value="" disabled>
                                        {t("contact.service")}
                                    </option>

                                    <option value={t("service.hygiene")}>
                                        {t("service.hygiene")}
                                    </option>

                                    <option value={t("service.netoyage")}>
                                        {t("service.netoyage")}
                                    </option>

                                    <option value={t("service.entretien")}>
                                        {t("service.entretien")}
                                    </option>

                                    <option value={t("service.piscine")}>
                                        {t("service.piscine")}
                                    </option>

                                    <option value={t("service.traitement")}>
                                        {t("service.traitement")}
                                    </option>

                                    <option value={t("service.emballage")}>
                                        {t("service.emballage")}
                                    </option>

                                    <option value={t("service.navire")}>
                                        {t("service.navire")}
                                    </option>

                                    <option value={t("service.audit")}>
                                        {t("service.audit")}
                                    </option>

                                    <option value={t("service.qhse")}>
                                        {t("service.qhse")}
                                    </option>
                                </select>
                            </label>
                        </div>

                        <label className="flex flex-col gap-2">
                            {t("contact.message")}
                            <textarea
                                name="message"
                                className="resize-none w-full input1 h-32 p-4"
                                placeholder={t("contact.describe")}
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="btn-devis flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            {t("contact.send")}
                        </button>
                    </form>
                    <form data-aos='slide-left' action="" className='bg-white rounded-xl shadow p-6 flex flex-col justify-between gap-5'>
                        <h2 className='text-blue'>{t('contact.cordone')}</h2>
                        <div className='flex gap-5'>
                            <div className="rounded-xl flex items-center justify-center w-12 h-12 bg-red-100">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className='text-blue'>{t('contact.address')}</h4>
                                <span>Douala, Cameroun</span>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={phone} alt="phone" className="w-6 h-6" />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className="text-blue">{t("contact.phone")}</h4>
                                <span>+237 6 93 14 21 34</span>
                                <span>+237 6 99 94 94 50</span>
                                <span>+237 6 99 94 39 26</span>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={mail} alt="mail" className="w-6 h-6" />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className="text-blue">Email</h4>
                                <span>chs_cameroun@yahoo.fr</span>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={clock} alt="clock" className="w-6 h-6" />
                            </div>
                            <div className="className='font-base flex flex-col justify-center text-[14px]">
                                <h4 className="text-blue">{t("contact.hours")}</h4>
                                <span className='font-medium'>{t("contact.date")}</span>
                                <span className='font-medium'>{t("contact.date1")}</span>
                            </div>
                        </div>
   <button
                            type="submit"
                            className="btn-devis bg-green flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            <a href={'https://wa.me/+237699949450'}>{t('contact.whatsapp1')}</a>
                        </button>
                      

                    </form>
                </div>

            </section>
        </main>
    )
}
