"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { Coffee, Menu as MenuIcon, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { p } from "framer-motion/client"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Visit", href: "#visit" },
    { name: "Menu", href: "/menu" }
  ]

  const fadeInUp: Variants = {
      initial: { opacity: 0, y: 20 },
      animate: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
      }
  }

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#3c2a21]">
      <header className="fixed w-full bg-[#f9f5f0]/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div className="flex items-center space-x-2" {...fadeInUp}>
            <Coffee className="h-8 w-8 text-[#d4a574]" />
            <span className="text-2xl font-bold">Café Aroma</span>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#d4a574] transition-colors relative group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#d4a574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-[#f9f5f0] z-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-2xl hover:text-[#d4a574] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}

      <main>
        <motion.section
          id="home"
          className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden"
          style={{ opacity, scale }}
        >
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/restaurante.jpg"
              alt="Coffee beans background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="flex flex-col md:flex-row items-center"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Bienvenido a <br />
                  <span className="text-[#d4a574]">Café Aroma</span>
                </motion.h1>
                <motion.p className="text-xl mb-8" variants={fadeInUp}>
                Donde cada sorbo cuenta una historia
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link href="/menu">
                    <Button className="bg-[#d4a574] text-white hover:bg-[#c08c5a]">VER MENU</Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <Image
                  src="/hero.jpeg"
                  alt="Cafe interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <section id="about" className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <Image
                  src="/cafe.png"
                  alt="Barista preparing coffee"
                  width={450} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra historia</h2>
                <p className="text-lg mb-6">
                  Café Aroma nació de una profunda pasión por ofrecer café de alta calidad y del deseo de crear un espacio cálido y acogedor para nuestra comunidad. Nuestros baristas expertos, junto con los granos cuidadosamente seleccionados, se unen para brindarte una experiencia de café verdaderamente inolvidable. Más que un simple lugar para disfrutar de una bebida, somos un punto de encuentro para amigos, familias y aquellos que buscan relajarse en un ambiente agradable.
                </p>
                <hr className="my-8 border-t-2 border-black opacity-50" />
                <p className="text-lg mb-6">
                  Nos enorgullece ser un lugar donde puedes desconectar y sumergirte en la riqueza de nuestros sabores. Ya sea que vengas a disfrutar de una charla tranquila, una reunión o un momento de reflexión, siempre te recibimos con una sonrisa y una bebida preparada con dedicación y amor por el café.
                </p>
              </motion.div>
            </motion.div>
          </div>          

        </section>

        <section id="contact" className="py-12 md:py-24 bg-[#f9f5f0]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contactanos!
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.form className="space-y-4" variants={fadeInUp}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-[#d4a574] rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-[#d4a574] rounded"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 border border-[#d4a574] rounded"
                ></textarea>
                <Button className="bg-[#d4a574] text-white hover:bg-[#c08c5a]">Send Message</Button>
              </motion.form>
              <motion.div variants={fadeInUp}>
                <Image
                  src="/restaurante.jpg"
                  alt="Coffee shop"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="visit" className="py-12 md:py-24 bg-[#3c2a21] text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Visitanos
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-2 text-[#d4a574]" />
                  <h3 className="text-2xl font-semibold">Horario</h3>
                </div>
                <p>Lunes - Viernes: 7am - 8pm</p>
                <p>Sábado - Domingo: 8am - 9pm</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-2 text-[#d4a574]" />
                  <h3 className="text-2xl font-semibold">Ubicacion</h3>
                </div>
                <p>Av. Universidad 2301, Col. Magisterial</p>
                <p>C.P. 31234, Chihuahua, Chihuahua, México</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-2 text-[#d4a574]" />
                  <h3 className="text-2xl font-semibold">Contacto</h3>
                </div>
                <p>Phone: (+52) 614-228-3958</p>
                <p>Email: ramonaguileradve@gmail.com</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2a1e17] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Café Aroma. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}