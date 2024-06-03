import facebook from '../../assets/facebooks.svg'
import behance from '../../assets/behance.svg'
import instagram from '../../assets/instragram.svg'
import linkedin from '../../assets/linked.svg'
import twitter from '../../assets/twitter.svg'
import './Footer-fq-FQ.css'
const Footer = () => {
    return (
        <footer className="bg-my-black px-[2.06rem] Footer-fq-FQ">
            {/* first part */}
            <div className='xl:flex'>
                <div className="xl:w-[33.08%] sm:pb-[2.5rem] pb-[2rem]">
                    {/* logo */}
                    <div className="pt-[2.5rem] flex items-end gap-[0.44rem] mb-[2.44rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="37" viewBox="0 0 144 37" fill="none">
                            <g clip-path="url(#clip0_553_96)">
                                <path d="M8.72087 0.0454132V1.9595C8.3673 1.91969 8.01171 1.9006 7.65592 1.90231C3.89085 1.90231 1.90182 4.43536 1.90182 9.22729V14.0932H5.39017V15.8879H1.89511V36.8907H0V9.01032C0 5.92895 0.796618 3.50018 2.30264 1.98809C3.61748 0.672788 5.41532 0 7.64921 0C8.03829 0 8.38545 0.0151377 8.72087 0.0454132Z" fill="white" />
                                <path d="M99.9462 0.119141H98.0511V36.9745H99.9462V0.119141Z" fill="white" />
                                <path d="M114.644 4.95543C114.399 4.64885 114.216 4.29635 114.108 3.91842C113.999 3.54048 113.966 3.14467 114.012 2.754C114.057 2.36333 114.179 1.98559 114.372 1.64276C114.564 1.29992 114.822 0.998835 115.131 0.757004C115.441 0.515174 115.795 0.337427 116.173 0.2341C116.551 0.130774 116.947 0.10393 117.335 0.155131C117.724 0.206331 118.099 0.334554 118.438 0.532341C118.777 0.730129 119.073 0.993535 119.31 1.30724L127.695 12.0719C127.759 12.1543 127.831 12.2401 127.902 12.3157C126.875 12.4838 125.906 12.9082 125.086 13.5498C124.265 14.1914 123.619 15.0297 123.206 15.9875C123.153 15.8946 123.093 15.8058 123.026 15.7217L114.644 4.95543Z" fill="white" />
                                <path d="M143.369 32.1912C143.616 32.4973 143.8 32.8496 143.91 33.2275C144.019 33.6055 144.053 34.0015 144.009 34.3927C143.964 34.7838 143.843 35.1622 143.651 35.5057C143.459 35.8492 143.202 36.1511 142.893 36.3937C142.583 36.6363 142.229 36.8148 141.851 36.9188C141.472 37.0228 141.077 37.0501 140.687 36.9993C140.298 36.9485 139.923 36.8206 139.584 36.6229C139.244 36.4252 138.947 36.1617 138.71 35.8479L130.325 25.0832C130.187 24.9031 130.027 24.7419 129.847 24.6039C130.898 24.4426 131.89 24.0133 132.728 23.3571C133.565 22.7009 134.221 21.8398 134.632 20.8564C134.727 21.0584 134.844 21.2491 134.981 21.425L143.369 32.1912Z" fill="white" />
                                <path d="M128.116 24.6447C127.962 24.7731 127.823 24.9181 127.7 25.077L119.315 35.8416C118.831 36.4621 118.122 36.8646 117.343 36.9605C116.563 37.0564 115.778 36.8378 115.159 36.3529C114.54 35.868 114.139 35.1565 114.043 34.3749C113.948 33.5932 114.166 32.8055 114.649 32.185L123.035 21.4204C123.117 21.3136 123.191 21.2012 123.258 21.084C123.701 22.0417 124.38 22.8704 125.231 23.4917C126.082 24.113 127.077 24.5063 128.121 24.6346" fill="white" />
                                <path d="M130.052 12.3724C130.149 12.2807 130.239 12.1817 130.322 12.0764L138.707 1.31179C138.946 1.0051 139.243 0.748615 139.581 0.556981C139.918 0.365347 140.291 0.242316 140.676 0.194914C141.061 0.147512 141.452 0.176666 141.826 0.280712C142.2 0.384758 142.55 0.561659 142.855 0.801313C143.161 1.04097 143.417 1.33868 143.608 1.67746C143.799 2.01624 143.922 2.38944 143.969 2.77577C144.016 3.16209 143.987 3.55397 143.883 3.92903C143.78 4.30409 143.603 4.65498 143.364 4.96167L134.979 15.7263C134.857 15.883 134.752 16.0521 134.665 16.2309C134.284 15.249 133.661 14.3802 132.854 13.706C132.046 13.0317 131.082 12.574 130.05 12.3758" fill="white" />
                                <path d="M132.909 18.5737C132.91 19.3475 132.681 20.1041 132.253 20.7477C131.824 21.3913 131.215 21.893 130.502 22.1893C129.79 22.4857 129.005 22.5634 128.248 22.4126C127.492 22.2619 126.796 21.8894 126.251 21.3423C125.705 20.7953 125.333 20.0982 125.183 19.3392C125.032 18.5803 125.109 17.7936 125.404 17.0786C125.7 16.3636 126.2 15.7525 126.841 15.3225C127.483 14.8926 128.237 14.6631 129.008 14.6631C130.043 14.6631 131.035 15.075 131.766 15.8084C132.498 16.5417 132.909 17.5364 132.909 18.5737Z" fill="#FF8500" />
                                <path d="M21.9397 13.9482C15.4359 13.9482 10.5355 18.9033 10.5355 25.4748V25.5589C10.5355 32.0816 15.4393 36.9963 21.9397 36.9963C28.4401 36.9963 33.3439 32.0429 33.3439 25.4714V25.3974C33.3439 18.8747 28.4384 13.96 21.9397 13.96V13.9482ZM31.5293 25.4327V25.5168C31.5293 31.0673 27.4255 35.2571 21.985 35.2571C16.5864 35.2571 12.3568 30.9782 12.3568 25.5168V25.4327C12.3568 19.8822 16.459 15.6924 21.8994 15.6924C27.2997 15.6924 31.5293 19.9714 31.5293 25.4327Z" fill="white" />
                                <path d="M87.15 16.4501C85.5182 14.8136 83.1334 13.9844 80.0626 13.9844C77.4916 13.9844 75.1471 14.5747 72.4604 15.8985L72.0763 16.0885L72.7773 17.6696L73.1916 17.4694C75.6837 16.2668 77.7902 15.7303 80.0207 15.7303C84.9597 15.7303 87.5676 18.1876 87.5676 22.8366V23.9921C85.1353 23.2396 82.6046 22.8558 80.0593 22.8534C74.0569 22.8534 70.1762 25.6791 70.1762 30.0489V30.1347C70.1762 34.8173 74.5098 36.9483 78.5365 36.9483C83.0093 36.9483 86.0834 34.8442 87.5676 32.7669V37.0038H89.3503V22.7929C89.3503 20.0899 88.5889 17.8966 87.1466 16.4501H87.15ZM87.5676 25.8221V28.2256C87.5676 31.5812 84.1312 35.2024 78.5784 35.2024C75.5445 35.2024 72.0025 33.8653 72.0025 30.0926V30.0068C72.0025 26.0206 76.1869 24.601 80.1029 24.601C82.8868 24.601 85.2616 24.9895 87.5676 25.8221Z" fill="white" />
                                <path d="M53.2275 15.7265C55.2065 15.7056 57.1396 16.3249 58.7401 17.4925L58.7703 17.5144H61.4838L61.2809 17.3243C59.8034 15.893 57.3632 13.9873 53.2677 13.9873C47.0809 13.9873 42.0446 19.1308 42.0446 25.4516V25.5324C42.0446 31.8582 47.0625 37.0034 53.2275 37.0034C56.3452 37.0034 58.9782 35.8967 61.2775 33.6193L61.4737 33.4242H58.777L58.7468 33.446C57.1699 34.6397 55.2433 35.2761 53.2677 35.2558C48.0855 35.2558 43.876 30.8827 43.876 25.492V25.4113C43.876 19.9818 47.9866 15.7298 53.2342 15.7298" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_553_96">
                                    <rect width="144" height="37" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-white font-my-secound-font text-xl not-italic font-light leading-normal">.agency</p>
                    </div>
                    <p className="text-white font-my-secound-font text-[1.5625rem] not-italic font-medium leading-normal">Head Office</p>
                    <p className="text-white font-my-secound-font text-xl not-italic font-light leading-normal">Syria - Latakia - GRH2+HJX
                        35.5199518</p>
                </div>
                {/* secound part */}
                <div className="xl:w-[66.9%] flex flex-wrap gap-5 justify-between ">
                    <div className="xl:pt-[3.81rem]">
                        <div className="mb-[1.06rem]">
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Sales</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">contact@focal-x.com
                                +963 953 666 056</p>
                        </div>
                        <div>
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Public Relations</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">pr@focal-x.com
                                +963 953 666 052</p>
                        </div>
                    </div>

                    <div className="xl:pt-[3.81rem] ">
                        <div className="mb-[1.06rem]">
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Customer Support</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">info@focal-x.com
                                +963 953 666 054</p>
                        </div>
                        <div>
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Human Resources</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">hr@focal-x.com</p>
                        </div>
                    </div>

                    <div className="xl:pt-[3.81rem] ">
                        <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Useful Links</h2>
                        <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">Clients & Partners
                            Check Certificat ID
                            Check for employee
                            Our Brand ID guidlines</p>
                    </div>

                    <div className="xl:pt-[5.38rem]">
                        <h2 className="text-white font-my-secound-font not-italic leading-normal font-medium text-[1.5625rem]">Keep In Touch</h2>
                        <div className='flex gap-[0.57rem]'>
                            <img src={facebook} alt="this is icon" />
                            <img src={behance} alt="this is icon" />
                            <img src={instagram} alt="this is icon" />
                            <img src={twitter} alt="this is icon" />
                            <img src={linkedin} alt="this is icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[1.06rem] pb-[1.44rem] flex flex-wrap lg:gap-0 gap-4 justify-between items-center'>
                 <p className='text-white'>&copy; <span className='pl-[0.38rem]'>2021 - 2023 focal X L.L.C All Right Reserved</span></p>
                 <hr className='text-white w-[66.9%]' />
            </div>
        </footer>
    )
}

export default Footer
