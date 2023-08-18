import React from 'react'

const Privacypolicy = () => {
  return (
    <section className='w-full h-full flex flex-col gap-4 justify-center items-center mr-auto px-2 py-6 lg:px-6' >
        <p className="text-xl lg:text-3xl font-semibold capitalize text-gray-600 mb-4 relative before:absolute before:rounded-lg before:content before:w-[100%] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Privacy Policy
          </p>
        <div className='flex flex-col w-full lg:w-[70%] h-auto  gap-4 overflow-hidden'>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Introduction</h4>
            <p className='text-sm text-gray-600 text-justify'>Welcome to Yum Yield ("we," "our," or "us"). We value your privacy and are dedicated to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or use our services.</p>
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Information We Collect</h4>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Personal Information: We collect information you provide, such as your name, email address, phone number, and mailing address.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Payment Information: When you make a purchase, we collect payment details to process transactions securely.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Usage Data: We gather non-personal information about your interactions with our website, including IP address, browser type, and pages visited.</li>
            </ul>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Use of Your Information</h4>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>To provide and improve our services, including order processing and customer support.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>To communicate about your orders, account updates, and promotions.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>To personalize your experience on our website.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>To analyze usage patterns and enhance our website's functionality.</li>
            </ul>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Information Sharing</h4>
            <p className='text-sm text-gray-600 text-justify'>We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted third parties for shipping and payment processing.</p>
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Cookies and Tracking</h4>
            <p className='text-sm text-gray-600 text-justify'>We use cookies and similar technologies to collect usage data and enhance your browsing experience. You can manage cookies through browser settings.</p>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Security</h4>
            <p className='text-sm text-gray-600 text-justify'>We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Children's Privacy</h4>
            <p className='text-sm text-gray-600 text-justify'>Our services are not intended for children under 13. We do not knowingly collect information from children.</p>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Your Choices</h4>
            <p className='text-sm text-gray-600 text-justify'>You can update or delete personal information by contacting us. You can also opt out of receiving promotional materials.</p>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Changes to this Policy</h4>
            <p className='text-sm text-gray-600 text-justify'>We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated policy will be available on our website.</p>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Contact Us</h4>
            <p className='text-sm text-gray-600 text-justify'>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Website:</span> www.yumyield.com</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Email:</span> support@yumyield.com</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Address:</span> 2056 Stark Hollow Road, Centennial, Colorado 80112, United States</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Phone:</span> +1 970-761-8896</li>
            </ul>
        </div>
    </section>
  )
}

export default Privacypolicy