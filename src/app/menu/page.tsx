"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { Coffee, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuCategories = [
  { name: "Coffee", icon: Coffee },
  { name: "Tea", icon: Coffee },
  { name: "Pastries", icon: Coffee },
  { name: "Sandwiches", icon: Coffee },
]

const menuItems = [
  { name: "Espresso", price: "$2.50", category: "Coffee" },
  { name: "Cappuccino", price: "$3.50", category: "Coffee" },
  { name: "Latte", price: "$3.75", category: "Coffee" },
  { name: "Americano", price: "$3.00", category: "Coffee" },
  { name: "Green Tea", price: "$2.75", category: "Tea" },
  { name: "Earl Grey", price: "$2.75", category: "Tea" },
  { name: "Chamomile", price: "$2.75", category: "Tea" },
  { name: "Croissant", price: "$2.50", category: "Pastries" },
  { name: "Chocolate Muffin", price: "$3.00", category: "Pastries" },
  { name: "Blueberry Scone", price: "$3.25", category: "Pastries" },
  { name: "Turkey & Avocado", price: "$6.50", category: "Sandwiches" },
  { name: "Veggie Delight", price: "$6.00", category: "Sandwiches" },
  { name: "Chicken Pesto", price: "$7.00", category: "Sandwiches" },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Coffee")

  const fadeInUp: Variants = {
      initial: { opacity: 0, y: 20 },
      animate: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
      }
  }

  const staggerChildren: Variants = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#3c2a21]">
      <header className="bg-[#f9f5f0]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="text-xl font-bold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-[#d4a574]" />
            <span className="text-2xl font-bold">Café Aroma Menu</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {menuCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.name
                  ? "bg-[#d4a574] text-white"
                  : "bg-white text-[#3c2a21]"
              }`}
              onClick={() => setActiveCategory(category.name)}
              variants={fadeInUp}
            >
              <category.icon className="inline-block mr-2 h-5 w-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-[#d4a574] font-bold">{item.price}</p>
              </motion.div>
            ))}
        </motion.div>
      </main>

      <footer className="bg-[#2a1e17] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Café Aroma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}