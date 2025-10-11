import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section id="mission" className="min-h-screen py-20 px-4 bg-gray-50 flex items-center">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            MISSION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="space-y-10">
          {/* Question */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8">
              "나 자신에게 무엇을 해주어야 할까?"
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              결국 필요한 것은 누구나 인정할 수 있는<br className="hidden md:block" />
              나의 성장에 대한 명확한 증거입니다.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16"
          >
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl md:text-8xl text-primary/20 font-serif leading-none">
              "
            </div>

            <blockquote className="relative z-10 text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed italic">
                학원이 성공하고 원장이 성장하지 못하면<br className="hidden md:block" />
                학원은 결국 사라지지만,
                <br />
                <span className="text-secondary font-bold">
                  원장이 성공하면 학원이 어려움에 처하더라도<br className="hidden md:block" />
                  다시 일어설 수 있다
                </span>
              </p>
            </blockquote>

            {/* Bottom Quote Mark */}
            <div className="absolute bottom-6 right-6 text-6xl md:text-8xl text-primary/20 font-serif leading-none">
              "
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              교육산업 전공은 학원이나 교육 기관의 일시적 성공이 아닌,<br className="hidden md:block" />
              <span className="font-bold text-gray-900">
                교육 전문가로서 원장 자신의 지속적 성장과 전문성 확립
              </span>
              을 목표로 합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission
