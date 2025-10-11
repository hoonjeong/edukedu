import { motion } from 'framer-motion'

const Career = () => {
  const supportCards = [
    {
      id: 1,
      number: '#1',
      title: '논문 집필 지원',
      content:
        '석사과정에서는 논문 작성 능력을 갖추는 것이 매우 중요합니다. 연구논문 세미나, 논문 글쓰기 지원, 논문 통계 관련 교육 등 다양한 비교과 활동을 통해 학생들의 연구 역량을 강화합니다.',
      bgColor: 'from-orange-400 to-orange-500',
    },
    {
      id: 2,
      number: '#2',
      title: '다양한 전문가 활동 지원',
      content:
        '교육산업 분야의 연구활동, 집필활동, 기업 컨설팅에 이르기까지 실무 역량을 갖추기 위한 다양한 프로그램이 마련되어 있습니다.',
      bgColor: 'from-blue-400 to-blue-500',
    },
  ]

  const careerPaths = [
    {
      id: 1,
      icon: '🏢',
      title: '교육서비스 & 교육산업',
      description: '대한민국 교육서비스 및 교육산업 분야',
    },
    {
      id: 2,
      icon: '📖',
      title: '교수법 & 교육시스템',
      description: '교수법, 교육시스템 전문가',
    },
    {
      id: 3,
      icon: '📊',
      title: '마케팅 & 브랜딩',
      description: '교육 마케팅 및 브랜딩 전문가',
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI 교육 & 콘텐츠',
      description: 'AI 교육, 콘텐츠 개발',
    },
    {
      id: 5,
      icon: '💼',
      title: '교육 프로그램 개발',
      description: '교육 프로그램 기획 및 개발',
    },
  ]

  return (
    <section id="career" className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Career
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            교육산업 & 교육서비스분야 전문가 활동
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            교육산업을 전공한 후에는 교육경영 컨설턴트, 교육정보공학 등 다양한 분야에서<br className="hidden md:block" />
            전문가로 활동할 수 있으며, 박사과정으로 진학할 수 있습니다.
          </p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {supportCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-br ${card.bgColor} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-10 text-white`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-bold opacity-90">
                  {card.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {card.title}
                </h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed opacity-95">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            졸업생 진출 분야
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl mb-4 shadow-md">
                  {path.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {path.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  {path.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Career
