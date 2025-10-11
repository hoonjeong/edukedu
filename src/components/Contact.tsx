import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col">
      <div className="container mx-auto max-w-5xl flex-1 flex flex-col justify-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            문의
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 text-center"
        >
          {/* Phone Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              입학처
            </h3>
            <a
              href="tel:031-249-9114"
              className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300"
            >
              031-249-9114
            </a>
            <p className="text-lg md:text-xl text-gray-600">
              궁금하신 사항은 언제든지 문의해주세요
            </p>
          </div>

          {/* KGU Logo Text */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              KGU
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-2">
              경기대학교 교육산업학과
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-gray-300 text-center"
      >
        <p className="text-sm md:text-base text-gray-600">
          © 2025 경기대학교 교육산업학과. All rights reserved.
        </p>
      </motion.footer>
    </section>
  )
}

export default Contact
