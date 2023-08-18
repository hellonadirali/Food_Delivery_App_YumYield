import React from 'react'

const Refund = () => {
  return (
    <section className='w-full h-full flex flex-col gap-4 justify-center items-center mr-auto px-2 py-6 lg:px-6' >
        <p className="text-xl lg:text-3xl font-semibold capitalize text-gray-600 mb-4 relative before:absolute before:rounded-lg before:content before:w-[100%] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Refund & Return Policy
          </p>
        <div className='flex flex-col w-full lg:w-[70%] h-auto  gap-4 overflow-hidden'>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Refund Policy</h4>
            <p className='text-sm text-gray-600 text-justify'>We at Yum Yield are committed to your satisfaction. If you are not satisfied with your purchase, we offer a refund under the following conditions:</p>
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Eligibility</h4>
            <p className='text-sm text-gray-600 text-justify'>To be eligible for a refund, you must meet the following criteria:</p>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>The item(s) must be unused and in the same condition as received.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>The return must be initiated within 14 days from the date of purchase.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Proof of purchase is required.</li>
            </ul>

            <h4 className='text-textColor font-semibold text-base md:text-lg'> Refund Process</h4>
            <p className='text-sm text-gray-600 text-justify'>To request a refund, please follow these steps:</p>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Contact our customer support at support@yumyield.com or +1970-761-8896 to initiate the return process.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Provide your order details and reasons for the refund request.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Once approved, you will receive instructions on how to return the item.</li>
            </ul>

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Refund Amount</h4>
            <p className='text-sm text-gray-600 text-justify'>Upon receiving the returned item and verifying its condition, we will process the refund. The refund amount will be the original purchase price minus any applicable shipping charges or restocking fees. Refunds will be issued using the original payment method.</p>
            
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Return Policy</h4>
            <p className='text-sm text-gray-600 text-justify'>We also offer returns for eligible items if you are not completely satisfied:</p>
            

            <h4 className='text-textColor font-semibold text-base md:text-lg'>Eligibility</h4>
            <p className='text-sm text-gray-600 text-justify'>To be eligible for a return, the item(s) must meet the following criteria:</p>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>The item(s) must be unused and in the same condition as received..</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>The return must be initiated within 14 days from the date of purchase.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Proof of purchase is required.</li>
            </ul>
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Return Process</h4>
            <p className='text-sm text-gray-600 text-justify'>To initiate a return, please follow these steps:</p>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Contact our customer support at support@yumyield.com or +1970-761-8896 to request a return.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Provide your order details and reasons for the return.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'>Once approved, you will receive instructions on how to return the item.</li>
            </ul>

            <h4 className='text-textColor font-semibold text-base md:text-lg'> Return Shipping</h4>
            <p className='text-sm text-gray-600 text-justify'>Customers are responsible for return shipping costs unless the return is due to an error on our part. We recommend using a trackable shipping method to ensure the return reaches us.</p>
            
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Return Inspection and Approval</h4>
            <p className='text-sm text-gray-600 text-justify'>Upon receiving the returned item, we will inspect it to ensure it meets the eligibility criteria. If the item passes inspection, we will process the return.</p>

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

export default Refund