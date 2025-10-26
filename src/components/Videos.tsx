import { motion } from 'framer-motion'

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: '박중희 교수 소개영상',
      url: 'https://www.youtube.com/embed/LxEMxzbzKbs',
    },
    {
      id: 2,
      title: '교육산업전공 1기 리뷰',
      url: 'https://www.youtube.com/embed/_bQadnB59nI',
    },
  ]

  return (
    <section id="videos" className="min-h-screen py-20 px-4 bg-white flex items-center">
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
            소개영상
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Videos Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Video Title */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                  {video.title}
                </h3>
              </div>

              {/* Video Container */}
              <div className="p-4 md:p-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos
