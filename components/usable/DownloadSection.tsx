"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section className="bg-[#EBF7FF] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3648]">
              Download <span className="text-[#7CC5FF]">NOSH App</span>
            </h2>
            <p className="text-lg md:text-xl text-[#2D3648] max-w-lg">
              Get the APP today to start enjoying amazing deals on gift cards, payments, and bills with{" "}
              <span className="text-[#6B21A8]">#TopNOSHExperience</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-14 px-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-full"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Apple logo"
                    width={24}
                    height={24}
                    className="mr-2 h-6 w-6"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-semibold text-[#2D3648]">App Store</div>
                  </div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-14 px-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-full"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Google Play logo"
                    width={24}
                    height={24}
                    className="mr-2 h-6 w-6"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-semibold text-[#2D3648]">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <motion.div
              initial={{ x: 40, y: 20 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <Image
                src="/placeholder.svg"
                alt="NOSH App Screenshot 3"
                width={280}
                height={560}
                className="w-full h-auto rounded-[32px] shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20, y: 10 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute right-[80px] md:right-[100px] lg:right-[120px] top-1/2 -translate-y-1/2 w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <Image
                src="/placeholder.svg"
                alt="NOSH App Screenshot 2"
                width={280}
                height={560}
                className="w-full h-auto rounded-[32px] shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute right-[160px] md:right-[200px] lg:right-[240px] top-1/2 -translate-y-1/2 w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <Image
                src="/placeholder.svg"
                alt="NOSH App Screenshot 1"
                width={280}
                height={560}
                className="w-full h-auto rounded-[32px] shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

