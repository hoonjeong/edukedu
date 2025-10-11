import { motion } from 'framer-motion'

const Schedule = () => {
  return (
    <section id="schedule" className="min-h-screen py-20 px-4 bg-gray-50 flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Class Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            현재는 기본적으로 <span className="font-bold text-primary">화요일, 목요일</span> 오후부터 저녁까지 수업이 운영되고 있습니다.<br />
            1,2교시는 전공필수, 교직선택, 선수과목이 있고,<br />
            3,4,5교시(19:30~ 21:55)에는 전공과목을 듣습니다.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="py-4 px-6 text-left font-bold text-lg">요일</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">교시</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">시간</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">대상 과목</th>
                  <th className="py-4 px-6 text-left font-bold text-lg">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-semibold text-gray-800">화·목</td>
                  <td className="py-4 px-6 text-gray-700">1·2교시</td>
                  <td className="py-4 px-6 text-gray-700">17:50 - 19:25</td>
                  <td className="py-4 px-6 text-gray-700">선별·교선·선수과목</td>
                  <td className="py-4 px-6 text-gray-700">
                    실당교육전공은 2학점<br />
                    (2·3교시 또는 4·5교시) 수업 운영
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-semibold text-gray-800">화·목</td>
                  <td className="py-4 px-6 text-gray-700">3·4·5교시</td>
                  <td className="py-4 px-6 text-gray-700">19:30 - 21:55</td>
                  <td className="py-4 px-6 text-gray-700">전공과목</td>
                  <td className="py-4 px-6 text-gray-700">
                    2·3교시: 18:40-20:15<br />
                    4·5교시: 20:20-21:55
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold">
                  화·목
                </span>
                <span className="font-semibold text-gray-800">1·2교시</span>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">시간:</span> 17:50 - 19:25</p>
                <p><span className="font-semibold text-gray-700">대상:</span> 선별·교선·선수과목</p>
                <p><span className="font-semibold text-gray-700">비고:</span> 실당교육전공은 2학점 (2·3교시 또는 4·5교시) 수업 운영</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold">
                  화·목
                </span>
                <span className="font-semibold text-gray-800">3·4·5교시</span>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">시간:</span> 19:30 - 21:55</p>
                <p><span className="font-semibold text-gray-700">대상:</span> 전공과목</p>
                <p><span className="font-semibold text-gray-700">비고:</span> 2·3교시: 18:40-20:15 / 4·5교시: 20:20-21:55</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border-t border-blue-100 p-4">
            <p className="text-sm md:text-base text-blue-800 text-center">
              ※ 개인별 수강신청에 따라, 일부 교과목은 수·금요일에 수업 진행
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule
