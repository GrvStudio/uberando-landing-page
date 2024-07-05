import Box from "../box/box";

const EmailForm = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 text-center">
                <Box className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">
                    <p className="text-lg md:text-xl mb-8 col-span-1 md:col-span-2 hanken-grotesk-legendary-500">
                        We specialize in custom software development, delivering tailored products, IT services, and comprehensive end-to-end solutions for our enterprise clients.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-end h-14 col-span-1 md:col-span-3">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="p-2 rounded-lg mb-4 md:mb-0 md:mr-6 border bg-[#2C2C2C] bg-opacity-80 w-full md:w-[27%]"
                        />
                        <button className="bg-gradient-to-r w-full md:w-[20%] from-[#2670F6] to-[#00F0C5] text-white p-2 rounded-lg hover:bg-blue-600">Get Started</button>
                    </div>
                </div>
                <Box className="mt-12" />
            </div>
        </div>
    );
};

export default EmailForm;
