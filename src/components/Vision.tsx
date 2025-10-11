import { motion } from 'framer-motion'

const Vision = () => {
  const features = [
    {
      id: 1,
      icon: '📚',
      title: '교육학과 배움학 기반',
      description: '전통적 교육 이론',
    },
    {
      id: 2,
      icon: '🤖',
      title: '최첨단 기술 연계',
      description: '인공지능, 인지과학, 뇌과학',
    },
    {
      id: 3,
      icon: '👥',
      title: '리더십 & 컨설팅',
      description: '교육 리더십, 컨설팅',
    },
    {
      id: 4,
      icon: '💡',
      title: '디지털 콘텐츠 개발',
      description: '디지털 교재, AI 교육 서비스',
    },
    {
      id: 5,
      icon: '🎓',
      title: '석·박사 과정',
      description: "Master's & PhD Program",
    },
  ]

  return (
    <section id="vision" className="min-h-screen py-20 px-4 bg-white flex items-center">
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
            VISION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              교육경영자에게는 경영 능력 외에<br />
              <span className="text-primary">또 다른 전문성 가치</span>가 필요합니다.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              우리는 종종 학원 규모가 크면 대단한 성공을 이루었다고 생각하는 경향이 있습니다.
              하지만 진정한 성공은 <span className="font-bold text-secondary">교육경영자 자신의 삶의 가치를 높이는 것</span>입니다.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                경기대학교 교육산업 전공과정은 이러한 시대적 요구를 기반으로<br className="hidden md:block" />
                <span className="text-primary font-bold">교육산업 전문가</span>를 양성합니다.
              </p>
            </div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl md:text-3xl shadow-md relative z-10">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Vision
