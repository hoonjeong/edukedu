import { motion } from 'framer-motion'

const Recommendation = () => {
  return (
    <section id="recommendation" className="min-h-screen py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Letter of RECOMMENDATION
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            경기대학교 교육산업 전공 2기 모집 추천사
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Text Content (65%) */}
            <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 relative z-10">
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  저는 현재 <span className="font-bold text-gray-900">ⓒ자유자재교육의 대표</span>이자 이지수능교육의 전문경영인으로,
                  인지과학 박사로서 경영학, 심리학, 인공지능(AI) 분야를 가르치고 연구하고 있습니다.
                  과거 훈장마을의 사외이사로 교육 사업에 참여했으며, 현재도 여러 교육 과정에서
                  학원 경영과 교육 노하우를 강의하고 있습니다. 많은 학원 원장님, 선생님, 교사들을 만나면서
                  그들이 미래에 더 나은 가치를 지닌 전문가가 되고 싶어 한다는 것을 느낍니다.
                  하지만 구체적으로 무엇을 해야 할지 명확하지 않아 고민하는 경우가 많고,
                  이미 전문가로 활동하고 계신 분들도 다음 단계로 나아가는 방법을 찾고 있습니다.
                </p>

                <p>
                  저의 경험에 비추어 볼 때, <span className="font-bold text-primary">전문가 활동의 영역을 더 넓히고
                  질적으로 성장하는 가장 확실한 방법은 학위 과정을 받는 것</span>입니다.
                  석사 및 박사 과정의 길이 멀고 어렵게 느껴질 수 있지만,
                  실제로 도전하여 진행하면 그 시간은 생각보다 빠르게 흘러갑니다.
                </p>

                <p className="text-lg md:text-xl font-semibold text-secondary">
                  저 역시 현재 대학에서 강의하고 다양한 연구를 진행하면서,
                  학위 과정을 거치기 전과는 비교할 수 없는 질적으로 다른 삶을 살고 있다고 확신합니다.
                </p>

                <p>
                  현재 <span className="font-bold text-gray-900">경기대학교 교육산업 전공은 2기를 모집</span>하고 있습니다.
                </p>

                <p>
                  <span className="font-bold text-gray-900">대학원 전공의 초기 기수는 매우 의미가 있습니다.</span><br />
                  많은 투자와 관심을 집중하여 이분들을 성공시키고자 하는 의지가 있는 시기이며,
                  교수진은 이들이 교육산업의 지형을 바꿀 수 있는 선구자가 되리라 기대하고 있습니다.
                  교육산업 전공에서 석사 과정을 공부한다면, 시간이 지난 후&nbsp;
                  <span className="font-bold text-primary">가장 잘한 선택 중 하나였다고 생각하시게 될 것</span>입니다.
                </p>

                <p>
                  이번에 교육산업 전공에 진학하여 공부하신다면, <span className="font-bold text-gray-900">석사 과정부터
                  박사 과정까지 빠르게 진행할 수 있는 체계적인 시스템</span>이 갖춰져 있어
                  전문가로서 활동하고, 더 나아가 교수로서 활동할 수 있는 미래를 준비할 수 있습니다.
                  또한 함께 공부하는 동료들이 서로의 인맥이 되어 교육 분야에서 큰 힘을 발휘할 수 있는&nbsp;
                  <span className="font-bold text-secondary">네트워크를 구축</span>할 수 있습니다.
                  이 전공은 <span className="font-bold text-gray-900">자신의 교육적 삶의 인프라를 만들고 싶은 분들</span>에게
                  가장 적합한 선택이 될 것입니다.
                </p>
              </div>
            </div>

            {/* Right: Professor Image (35%) */}
            <motion.div
              className="lg:col-span-4 relative flex items-center justify-center p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

              <div className="relative z-10 w-full max-w-sm">
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>

                {/* Professor Photo with gradient border */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img
                      src="/images/1.png"
                      alt="교수님"
                      className="w-full h-auto rounded-xl object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image not found
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback Placeholder */}
                    <div className="hidden w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center">
                      <svg
                        className="w-32 h-32 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Professor Info Card */}
                <motion.div
                  className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="text-center space-y-2">
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-2">
                      <p className="text-sm font-semibold text-primary">추천인</p>
                    </div>
                    <p className="text-base md:text-lg font-bold text-gray-800">박중희 교수님</p>
                    <p className="text-sm md:text-base text-gray-700">ⓒ자유자재교육 대표</p>
                    <p className="text-sm md:text-base text-gray-600">인지과학 박사</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Recommendation
