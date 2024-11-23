'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Footer } from "@/components/usable/Footer"
import { Header } from "@/components/usable/Header"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: `Welcome to ofunds ("Company," "we," "our," "us")! ofunds ("us," "we," or "our") operates this Service. 
        Our Privacy Policy explains how we collect, safeguard, and disclose information that results from your use of our Service. 
        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of 
        information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy 
        Policy have the same meanings as in our Terms and Conditions. Our Terms and Conditions ("Terms") govern all use of our Service 
        and, together with the Privacy Policy, constitute your agreement with us ("agreement").`
    },
    {
      title: "2. Definitions",
      content: [
        { term: "SERVICE", definition: "means the website or app operated by ofunds." },
        { term: "PERSONAL DATA", definition: "means data about a living individual who can be identified from that data (or from that and other information either in our possession or likely to come into our possession)." },
        { term: "USAGE DATA", definition: "is data collected automatically, either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit)." },
        { term: "COOKIES", definition: "are small files stored on your device (computer or mobile device)." },
        { term: "DATA CONTROLLER", definition: "means a natural or legal person who determines the purposes for which and the manner in which any personal data is to be processed." }
      ]
    },
    {
      title: "3. Information Collection and Use",
      content: "We collect several different types of information for various purposes to provide and improve our Service to you."
    },
    {
      title: "4. Types of Data Collected",
      content: `Personal Data: While using our Service, we may ask you to provide us with certain personally 
        identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information 
        may include, but is not limited to:
        
        - Email address
        - First name and last name
        - Phone number: +234 906 421 9645
        - Address, Country, State, Province, ZIP/Postal code, City
        - Cookies and Usage Data
        
        We may use your Personal Data to contact you with newsletters, marketing or promotional materials, and other information 
        that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following 
        the unsubscribe link.`
    },
    {
      title: "6. Use of Data",
      content: "ofunds uses the collected data for various purposes, such as to provide and maintain our Service and to notify you about changes to it."
    },
    {
      title: "7. Retention of Data",
      content: "We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy."
    },
    {
      title: "8. Transfer of Data",
      content: `Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your 
        state, province, country, or other governmental jurisdiction where the data protection laws may differ.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us by email:
        
        blordgroupmancity@gmail.com
        
        Phone: +234 906 421 9645`
    }
  ]

  return (
    <>
    <Header/>
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[70vh] pr-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-sm text-muted-foreground text-center">
                Last updated: 2023-01-09
              </motion.p>

              {sections.map((section, index) => (
                <Section key={index} title={section.title}>
                  {Array.isArray(section.content) ? (
                    section.content.map((item, i) => (
                      <DefinitionItem key={i} term={item.term} definition={item.definition} />
                    ))
                  ) : (
                    <p className="whitespace-pre-line">{section.content}</p>
                  )}
                </Section>
              ))}
            </motion.div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section variants={itemVariants} className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </motion.section>
  )
}

function DefinitionItem({ term, definition }: { term: string; definition: string }) {
  return (
    <motion.div variants={itemVariants} className="mt-2">
      <dt className="font-medium">{term}:</dt>
      <dd className="ml-4">{definition}</dd>
    </motion.div>
  )
}

