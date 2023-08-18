import React from 'react'

const Aboutus = () => {
  return (
    <section className='w-full h-full flex flex-col gap-4 justify-center items-center mr-auto px-2 py-6 lg:px-6' >
        <p className="text-xl lg:text-3xl font-semibold capitalize text-gray-600 mb-4 relative before:absolute before:rounded-lg before:content before:w-[100%] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            About us
          </p>
        <div className='flex flex-col w-full lg:w-[70%] h-auto  gap-4 overflow-hidden'>
            <p className='text-sm text-gray-600 text-justify'>Welcome to Yum Yield, your one-stop destination for all things delicious and delightful! We are an online ecommerce store that caters to your cravings for fresh fruits, mouthwatering rice dishes, delectable chicken dishes, refreshing cold drinks, and indulgent ice creams. Our mission is to bring the finest culinary experiences right to your doorstep, making every mealtime a memorable and flavorful event.</p>
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Our Story</h4>
            <p className='text-sm text-gray-600 text-justify'>At Yum Yield, we believe that great food has the power to create joy, connect people, and enrich lives. Our journey began with a passion for culinary excellence and a deep appreciation for quality ingredients. We recognized the need for a convenient platform where food enthusiasts like you can explore a wide variety of delectable options and enjoy a hassle-free shopping experience.</p>
            <h4 className='text-textColor font-semibold text-base md:text-lg'>What We Offer</h4>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'> <span className="font-semibold">1. Fresh Fruits:</span> Dive into a world of succulent, juicy fruits that burst with natural flavors and nutrients. Our carefully sourced selection includes seasonal delights that will tantalize your taste buds and contribute to your well-being.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">2. Rice Dishes:</span> From aromatic biryanis to comforting risottos, our assortment of rice dishes spans the globe, bringing you diverse tastes and textures that cater to every palate.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">3. Chicken Dishes:</span> Indulge in the savory goodness of our chicken dishes. Whether you prefer a sizzling stir-fry, a hearty curry, or a mouthwatering grilled option, we have something to satisfy every chicken lover's craving.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">4. Cold Drinks:</span> Quench your thirst with our range of refreshing cold drinks. From artisanal sodas to revitalizing juices, we offer a spectrum of beverages that elevate your dining experience.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">5. Ice Creams:</span> Treat yourself to the ultimate indulgence with our collection of premium ice creams. Creamy, decadent, and available in a myriad of flavors, our ice creams are a celebration of life's sweet moments.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'></li>
            </ul>
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Contact us</h4>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Website:</span> www.yumyield.com</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Email:</span> support@yumyield.com</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Address:</span> 2056 Stark Hollow Road, Centennial, Colorado 80112, United States</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Phone:</span> +1 970-761-8896</li>
            </ul>
            <h4 className='text-textColor font-semibold text-base md:text-lg'>Why Choose Yum Yield?</h4>
            <ul className='flex flex-col gap-2'>
                <li className='text-sm list-decimal text-gray-600 text-justify'> <span className="font-semibold">Quality:</span> We are committed to sourcing the finest ingredients to create culinary masterpieces that delight your senses.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Convenience:</span> With our user-friendly online store, you can explore and order your favorite dishes from the comfort of your home.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Variety:</span> Our extensive menu ensures that there's something for everyone, from health-conscious eaters to those seeking indulgence.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Delivery:</span> We bring the goodness to your doorstep, ensuring that your meals arrive fresh and ready to be savored.</li>
                <li className='text-sm list-decimal text-gray-600 text-justify'><span className="font-semibold">Customer Care:</span> Our dedicated support team is here to assist you with any queries or concerns you may have.</li>
            </ul>
            <p className='text-sm text-gray-600 text-justify'>At Yum Yield, we're not just an ecommerce store; we're your partners in creating memorable dining experiences. Join us on this flavorful journey, and let your taste buds rejoice in the symphony of flavors we have to offer. Thank you for choosing Yum Yield, where every bite is a celebration of taste and togetherness!</p>
        </div>
    </section>
  )
}

export default Aboutus