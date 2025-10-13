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

        {/* 최항석 교수님 추천사 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-visible mb-8 p-8 md:p-12 lg:p-16"
        >
          {/* Floating Professor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:float-right lg:ml-6 lg:mb-6 mb-8 mx-auto w-64 md:w-72 lg:w-80 shape-outside"
          >
            <div className="relative">
              {/* Decorative blur circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>

              <img
                src="/images/최항석교수님.png"
                alt="최항석 교수님"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Professor Info Badge */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100 relative z-10">
                <div className="text-center space-y-1">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-2">
                    <p className="text-xs font-semibold text-primary">추천인</p>
                  </div>
                  <p className="text-sm md:text-base font-bold text-gray-800">최항석 주임교수</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              We Cordially<br />
              <span className="text-secondary text-3xl md:text-4xl">INVITE YOU</span>
            </p>

            <p>
              경기대학교 교육대학원 교육산업전공의 주임교수를 맡고 있는 최항석입니다.
              저는 1989년부터 경기대학교 교직과부에서
              학생들과 배움에 동행하여 연구하고 있습니다.
            </p>

            <p>
              재가 경기대학교 교육대학원에 교육산업전공을 개설한 이유는
              교육 당사자인 교육졸업 발치된 교육산업이 미래 우리 교육에
              새로운 생명을 불어넣을 출제에이자 기폐가 될 것이기 때문입니다.
            </p>

            <p>
              교육산업이란 좁아에서 이르느에 이르기까지
              모든 이들에게 필요한 배움의 자원을 제공하는 평생교육산업을 의미합니다.
              교육산업은 학령산업부터 교육컨설산업,
              교육인프라(Edutainment)학습산업, 온-오프 학습산업 등
              배움을 위한 모든 프로그램과 자원을 지원하는 비즈니스이 교육을 의미합니다.
            </p>

            <p>
              그 누구든 이 시회에서 배우고 살면, 배우고 싶은 그것을 배울 수 있도록
              디깊만 서비스를 제공하는 것이 교육산업의 의의(意義)입니다.
            </p>

            <p>
              교육산업의 교육적 철학은 니무나 실용적이며 미제자형적입니다.
              지금과 같은 학교교육이나 학습방법이 지궈발형적으로 아기하는
              교육 문제를 해결할 기폐적이 교육산업에 있습니다.
              교육산업은 교육을 민주컵율 인간컵율 자유적이고도 진정성 있는
              배움의 미래가 교육산업에 있습니다. 특히 학령산업은 학교교육이
              동반시킬 배움의 책빚과 몸짚 권리를 실현하게 줄 수 있는
              거번의 책무인 교육산업니다. 경기대학교 교육대학원 교육산업전공은
              영리를 추구하는 산업인(人)을 넘어, 교육이 무엇인지,
              배움이 될 필요한지, 이렇게 그것을 실현할 수 있는지를 먼 구하고
              김동(感動)하는 교육철학을 지난 교육 전문인을 육상하여
              미래 우리의 교육 현장에서 활동하실 분들을 찾고 있습니다.
              즉, 전문 비즈니스인(人)을 넘어, 교육이 미래를 책입질
              교육전문가를의 인물을 추도할 배육전문인(人)을
              양성하고자 합니다.
            </p>

            <p>
              2026년도 경기대학교 교육대학원 교육산업전공에
              여러분들을 초대합니다.
              부디 미래 교육 전문가이자 교육산업의 탑구와 비전을
              위한 연구자가 되기 위한 활륜에 동행해 주시기 바랍니다.
            </p>
          </div>
        </motion.div>

        {/* 박중희 교수 추천사 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-visible p-8 md:p-12 lg:p-16"
        >
          {/* Floating Professor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:float-right lg:ml-6 lg:mb-6 mb-8 mx-auto w-64 md:w-72 lg:w-80 shape-outside"
          >
            <div className="relative">
              {/* Decorative blur circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>

              <img
                src="/images/박중희교수님.png"
                alt="박중희 교수"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Professor Info Badge */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100 relative z-10">
                <div className="text-center space-y-1">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-2">
                    <p className="text-xs font-semibold text-primary">추천인</p>
                  </div>
                  <p className="text-sm md:text-base font-bold text-gray-800">박중희 교수</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              We Cordially<br />
              <span className="text-secondary text-3xl md:text-4xl">INVITE YOU</span>
            </p>

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
              <span className="font-bold text-gray-900">대학원 전공의 초기 기수는 매우 의미가 있습니다.</span>
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
        </motion.div>
      </div>
    </section>
  )
}

export default Recommendation
