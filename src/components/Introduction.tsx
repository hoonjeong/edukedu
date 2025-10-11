import { motion } from 'framer-motion'

const Introduction = () => {
  const cards = [
    {
      id: 1,
      content:
        '교육산업 전공은 급변하는 교육 환경 속에서 미래 교육 산업의 전문가로 성장하고자 하는 이들에게 필요한 비전을 제시하는 학문 분야입니다.',
    },
    {
      id: 2,
      content:
        '교육산업 전공이 등장하게 된 배경에는 급변하는 사회와 기술 환경 속에서 기존 교육학의 한계를 넘어서려는 필요성이 있었습니다.',
    },
    {
      id: 3,
      content:
        '교육산업 전공의 핵심은 다학제적 접근에 있습니다. 전통적인 교육학 지식뿐 아니라 뇌과학, 인지과학, 인공지능(AI), 교육학을 통합적으로 다룹니다.',
    },
    {
      id: 4,
      content:
        '교육산업 전공의 목표는 급변하는 산업 구조 속에서 변화를 주도하고, 새로운 교육 패러다임을 제시할 수 있는 인재를 길러내는 데 있습니다.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="intro" className="min-h-screen py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            About the DEPARTMENT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 md:p-10 transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {card.id}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {card.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
