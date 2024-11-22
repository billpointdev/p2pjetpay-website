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
      className="flex flex-col items-center justify-center text-center px-4
      pt-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="max-w-4xl mx-auto" variants={itemVariants}>
        <span className="block text-3xl sm:text-5xl md:text-6xl font-semibold text-green-500 mb-4">
          Sell, Buy, Pay, Send
        </span>
        <span className="block text-3xl sm:text-5xl md:text-6xl font-semibold text-[#2D3648]">
          It's Easy With Ofunds.
        </span>
      </motion.h1>
      <motion.p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
        The highly recommended platform for gift cards, digital remittance, and bills payment. Join Ofunds today.
      </motion.p>
      <motion.div className="flex flex-wrap justify-center gap-4 mt-12" variants={itemVariants}>
        {["App Store", "Google Play"].map((platform, index) => (
          <motion.button
            key={platform}
            className="flex items-center gap-2 px-7 sm:px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={platform === 'App Store' ? '/apple.png': '/play.png'}
              alt={`${platform} Logo`}
              width={30}
              objectFit="cover"
              height={24}
              className=""
            />
            <div className="text-left">
              <div className="text-xs">{index === 0 ? "Download on the" : index === 1 ? "Get it on" : "Use it on"}</div>
              <div className="text-sm font-semibold">{platform}</div>
            </div>
          </motion.button>
        ))}
        
        <Image src="/IMG-20241122-WA0002-removebg.png" width={1500} height={1500} alt="hello"/>
      </motion.div>
    </motion.section>
  )
}

