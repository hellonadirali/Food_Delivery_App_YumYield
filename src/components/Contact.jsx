import React, { useState } from 'react'

const Contact = () => {

    const [formData , setformData] = useState({
        fullname: '',
        phone: '',
        email:'',
        message:'',
    });

    const [submited, setsubmittd] = useState(false)

    const handleInput = (event) => {
        const {name, value} = event.target;
        setformData((prevdata)=>({
            ...prevdata,
            [name]:value,
        }));

    const handlesubmit = (event) => {
        event.preventDefault();
        setsubmittd(true);
    };
    
    };

  return (
    <div>
        <section className='w-full h-full flex flex-col gap-4 justify-center items-center mr-auto py-6 px-6' >
        <p className="text-xl lg:text-3xl font-semibold capitalize text-gray-600 mb-4 relative before:absolute before:rounded-lg before:content before:w-[100%] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            contact us
          </p>
            <div className='flex flex-col w-full lg:w-[80%] h-auto  gap-4  justify-center items-center'>
                <form action="" className='flex flex-col gap-4 w-full md:w-[70%] lg:w-[60%] py-8 px-8 bg-[#e3e3e3] rounded-xl shadow-xl'>
                    <label htmlFor="" className="text-textColor">Name: 
                        <input 
                        name='fullname'
                        value={formData.fullname}
                        onChange={handleInput}
                        type="text" 
                        placeholder='Enter your name' 
                        className='w-full px-4 text-sm py-2 rounded-md border-none outline-none'/>
                    </label>
                    <label htmlFor="" className="text-textColor">Phone: 
                        <input 
                        name='phone'
                        value={formData.phone}
                        onChange={handleInput}
                        type="tel" 
                        placeholder='Enter your phone number' 
                        className='w-full px-4 text-sm py-2 rounded-md border-none outline-none'/>
                    </label>
                    <label htmlFor="" className="text-textColor">Email: 
                        <input 
                        name='email'
                        value={formData.email}
                        onChange={handleInput}
                        type="email" 
                        placeholder='Enter your email' 
                        className='w-full px-4 text-sm py-2 rounded-md border-none outline-none'/>
                    </label>
                    <label htmlFor="" className="text-textColor">Message: 
                        <textarea 
                        name='message'
                        value={formData.message}
                        onChange={handleInput}
                        rows="4" 
                        placeholder='Message' 
                        className='w-full px-4 text-sm py-2 rounded-md border-none outline-none'/>
                    </label>
                    <button type='submit' className=' text-sm text-gray-900 bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-2 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 mt-2'>Submit</button>
                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact