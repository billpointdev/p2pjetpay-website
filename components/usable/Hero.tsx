'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function Hero() {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center text-center px-4 pt-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="max-w-4xl mx-auto" variants={itemVariants}>
        <span className="block text-3xl sm:text-5xl md:text-6xl font-semibold text-orange-500 mb-4">
          Buy, Sell & Swap
        </span>
        <span className="block text-3xl sm:text-5xl md:text-6xl font-semibold text-[#2D3648]">
          It's Easy With Jetpay.
        </span>
      </motion.h1>
      <motion.p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
        Your ultimate hub for seamless connections. With our streamlined and comprehensive app, effortlessly engage
        with others and enjoy convenient interactions, making every transaction a breeze.
      </motion.p>
      
      {/* Buttons & Image Container */}
      <motion.div className="flex flex-col items-center gap-8 mt-12" variants={itemVariants}>
        {/* Button Container */}
        <div className="flex flex-row gap-4">
          {["App Store", "Google Play"].map((platform, index) => (
            <motion.button
              key={platform}
              className="flex items-center gap-2 px-7 sm:px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={platform === 'App Store' ? '/apple.png' : '/play.png'}
                alt={`${platform} Logo`}
                width={30}
                height={24}
              />
              <div className="text-left">
                <div className="text-xs">{index === 0 ? "Download on the" : "Get it on"}</div>
                <div className="text-sm font-semibold">{platform}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Image */}
        <Image src="/image.png" width={300} height={300} alt="App Preview" className="rounded-lg shadow-lg"/>
      </motion.div>
    </motion.section>
  )
}
