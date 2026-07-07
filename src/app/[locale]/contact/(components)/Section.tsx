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

    const sendEmail = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!form.current) return;

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast("Message envoye avec succes", {
                duration: 3000,
            });
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast("Erreur lors de l'envoi du message", {
                duration: 3000,
            });
        }
    };

    return (
        <main className='bg-blue20'>
            <section data-aos='slide-up' className='grid max-w-6xl mx-auto gap-5 p-6 mt-20'>
                <div className='flex items-center gap-5 flex-col'>
                    <h1 className='text-white text-nowrap'>{t('contact.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('contact.us')}</span></h1>
                    <p data-aos='zoom-in' className='md:text-[18px] '>{t('contact.text')}
                    </p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <form ref={form} onSubmit={sendEmail} data-aos='slide-right' action="" className='bg-white rounded-xl shadow p-6 flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'>
                            <FileText className='text-violet' />
                            <h2 className='text-blue'>{t('contact.devis')}</h2>
                        </div>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.name')}
                                <input type="text" className='input1' />
                            </label>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.email')}*
                                <input type="email" className='input1' required />
                            </label>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.phone')}
                                <input type="tel" className='input1' required />
                            </label>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.entreprise')}
                                <input type="text" className='input1' />
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2">

                            <label className="flex flex-col gap-2">
                                {t("contact.ville")}
                                <input type="text" className="input1" />
                            </label>

                            <label className="flex flex-col  gap-2">
                                {t("contact.service")}
                                <select defaultValue="" className="input1 p-2">
                                    <option value="" disabled>

                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.hygiene")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.netoyage")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.entretien")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.piscine")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.traitement")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.emballage")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.navire")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.audit")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        {t("service.qhse")}
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">{t('contact.message')}</label>
                            <textarea name="" className='resize-none w-full input1 h-24 p-5' placeholder={t('contact.describe')}></textarea>
                        </div>


                        <button type='submit' className='flex gap-2  items-center justify-center btn-devis'><Send />{t('contact.send')}</button>


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

                        <button type='submit' className='bg-green flex gap-2 justify-center items-center btn-devis'><a href={'https://wa.me/+237699949450'}><MessageCircle />{t('contact.whatsapp1')}</a></button>

                    </form>
                </div>

            </section>
        </main>
    )
}
