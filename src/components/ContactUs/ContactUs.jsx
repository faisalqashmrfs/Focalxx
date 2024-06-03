import './ContactUs.css'

const ContactUS = () => {
    return (
            <div className="os-footer mt-10">
                <div className='py-[6.81rem] sm:w-[71.30%] w-[90%] mx-auto'>
                    <h1 className='text-white font-my-secound-font text-[3.47169rem] not-italic font-bold leading-normal mb-[2.19rem]'>Wherever you are, focal X reach you</h1>
                    <p className='text-white font-my-secound-font text-[1.5625rem] not-italic font-normal leading-normal mb-[0.75rem]'>Subscribe to the newsletter to stay in latest news</p>
                    <div className='flex flex-col md:flex-row  items-center'>
                        <input
                            type="email"
                            placeholder='Enter your E-mail'
                            className='py-[0.88rem] pl-[0.94rem] placeholder:not-italic placeholder:font-light placeholder:leading-normal placeholder:text-[1.25rem] placeholder:text-my-black placeholder:font-my-secound-font md:w-[68.68%] w-[100%] bg-input-color rounded-[1.25rem]'
                        />
                        <button className='md:ml-[4.44rem] md:mt-0 mt-5 py-[0.5rem] px-[3.5rem] rounded-[1.25rem] bg-my-orange text-white text-[1.5625rem] not-italic font-medium leading-normal'>Subscribe</button>
                    </div>
                </div>
            </div>
    )
}

export default ContactUS
