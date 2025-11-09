// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import SuccessModel from '../../components/SuccessModel';
import { useTheme } from '../../context/ThemeContext';
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Input/TextInput";

const ContactSection = () => {

    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert("Please fill out all fields before sending the message.");
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_k24efdi',   //  replace with your EmailJS Service ID
                'template_dcjqj7m',   //  replace with your Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'hFWhYukgbcL_L8SId' //  replace with your Public Key
            );

            setShowSuccess(true);
            setFormData({ name: "", email: "", message: "" });

            // Auto-hide after 3s
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
            console.error("Email sending failed:", error);
            alert("Oops! Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section
            id='contact'
            ref={sectionRef}
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                } relative overflow-hidden`}
        >
            {/* Background Elements  */}
            <motion.div style={{ y }} className='absolute inset-0 overflow-hidden'>
                <div
                    className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                        }`}
                />

                <div
                    className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
                        }`}
                />
            </motion.div>

            <div className='max-w-6xl mx-auto relative z-10'>
                {/* Section Header  */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className='text-center mb-2'
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                            } mb-4`}
                    >
                        Let's Connect
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className='text-3xl md:text-5xl font-light mb-6'
                    >
                        Get In{" "}
                        <span className='text-blue-500 font-medium'>Touch</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        Ready to start your next project? Let's discuss how we can bring
                        your ideas to life.
                    </motion.p>
                </motion.div>

                <div className='grid lg:grid-cols-2 gap-16 items-start'>
                    {/* Contact form  */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={itemVariants}
                            className={`p-8 rounded-2xl border ${isDarkMode
                                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                                }`}
                        >
                            <h3 className='text-2xl font-medium mb-8'>Send me a message</h3>

                            <div className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <TextInput
                                        isDarkMode={isDarkMode}
                                        value={formData.name}
                                        handleInputChange={(text) =>
                                            handleInputChange('name', text)
                                        }
                                        label='Your Name'
                                    />

                                    <TextInput
                                        isDarkMode={isDarkMode}
                                        label='Email Address'
                                        value={formData.email}
                                        handleInputChange={(text) =>
                                            handleInputChange('email', text)
                                        }
                                    />
                                </div>
                                <TextInput
                                    isDarkMode={isDarkMode}
                                    label='Your Message'
                                    value={formData.message}
                                    textarea
                                    handleInputChange={(text) =>
                                        handleInputChange('message', text)
                                    }
                                />

                                <motion.button
                                    disabled={
                                        isSubmitting ||
                                        !formData.name.trim() ||
                                        !formData.email.trim() ||
                                        !formData.message.trim() ||
                                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                                    }
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full ${isSubmitting ||
                                        !formData.name.trim() ||
                                        !formData.email.trim() ||
                                        !formData.message.trim() ||
                                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                                        ? "bg-blue-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-600"
                                        } text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2`}
                                    onClick={handleSubmit}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact info & Social links */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className='space-y-8'
                    >
                        {/* Contact Information  */}
                        <motion.div variants={itemVariants}>
                            <h3 className='text-2xl font-medium mb-6'>Contact Information</h3>
                            <div className='space-y-4'>
                                {CONTACT_INFO.map((info) => (
                                    <motion.div
                                        key={info.label}
                                        variants={itemVariants}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode
                                            ? "bg-gray-800/30 hover:bg-gray-800/50"
                                            : "bg-gray-50/50 hover:bg-gray-100/50"
                                            } transition-all duration-300`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg ${isDarkMode
                                                ? "bg-gray-700"
                                                : "bg-white"
                                                }`}
                                        >
                                            <info.icon size={20} className='text-blue-500' />
                                        </div>
                                        <div>
                                            <div
                                                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                                    }`}
                                            >
                                                {info.label}
                                            </div>
                                            <div className='font-medium'>{info.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links  */}
                        <motion.div variants={itemVariants}>
                            <h3 className='text-xl font-medium mb-6'>Follow Me</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {SOCIAL_LINKS.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.05, y: 0 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${isDarkMode
                                            ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                            : "bg-white/80 border-gray-200 hover:border-gray-300"
                                            } ${social.bgColor} ${social.name}`}
                                    >
                                        <social.icon size={20} />
                                        <span className='font-medium'>{social.name} </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div
                            variants={itemVariants}
                            className={`p-6 rounded-xl border ${isDarkMode
                                ? "bg-gray-500/10 border-gray-500/20"
                                : "bg-green-50 border-green-200"
                                }`}
                        >
                            <div className='flex items-center space-x-3 mb-2'>
                                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                                <span className='font-medium text-gray-500'>
                                    Available for work
                                </span>
                            </div>
                            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                            >
                                I'm currently available for freelance projects and full-time
                                opportunities.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom CAT  */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className='text-center mt-20'
                >
                    <motion.div
                        variants={itemVariants}
                        className={`max-w-2xl mx-auto p-8 rounded-2xl border ${isDarkMode
                            ? "bg-gray-800/30 border-gray-700"
                            : "bg-gray-50/50 border-gray-200"
                            }`}
                    >
                        <h3 className='text-xl font-medium mb-4'>Prefer a quick call?</h3>
                        <p className={`${isDarkMode
                            ? "text-gray-400" : "text-gray-600"
                            } mb-6`}
                        >
                            Sometimes a conversation is worth a thousand messages.Feel free
                            to schedule a call to discuss your project.
                        </p>
                        <motion.button
                            whileHover={{ y: 2, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 ${isDarkMode
                                ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                                : "border-gray-300 hover:border-blue-400 hover:text-blue-600"
                                }`}
                        >
                            Schedule a Call
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <SuccessModel
                showSuccess={showSuccess}
                setShowSuccess={setShowSuccess}
                isDarkMode={isDarkMode}
            />
        </section >
    )
}

export default ContactSection;