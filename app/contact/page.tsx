"use client";

import ContactForm from '@/components/contactForm';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">

            <button 
          onClick={() => router.back()}
          className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
        >
          Retour
        </button>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
                            alt="Contact Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Form Section */}
                    <div className="bg-card rounded-2xl p-8 shadow-lg">
                  
                        <h1 className="text-3xl font-bold mb-8 text-center">Formulaire de contact</h1>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
