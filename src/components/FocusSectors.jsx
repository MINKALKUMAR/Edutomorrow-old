const FocusSectors = () => {
  const sectors = [
    {
      title: "Universities",
      image: "/university-students-in-graduation-ceremony.png",
      size: 'large'
    },
    {
      title: "Established Edtech",
      image: "/professionals-in-modern-office-discussing-educatio.png",
      size: 'small'
    },
    {
      title: "Corporate Catering",
      image: "/business-professionals-in-corporate-training-sessi.png",
      size: 'large'
    },
    {
      title: "Edutech",
      image: "/tech-professionals-working-on-educational-software.png",
      size: 'small'
    },
    {
      title: "Edtech Startup",
      image: "/young-entrepreneurs-in-startup-office-with-laptops.png",
      size: 'large'
    },
    {
      title: "Fashion & Design",
      image: "/fashion-design-students-working-on-creative-projec.png",
      size: 'small'
    },
    {
      title: "B-School",
      image: "/mba-students-in-business-school-classroom.png",
      size: 'large'
    },
    {
      title: "Established Edtech",
      image: "/professionals-in-modern-office-discussing-educatio.png",
      size: 'small'
    },
  ]

  // Duplicate sectors for infinite scroll effect
  const duplicatedSectors = [...sectors, ...sectors]

  return (
    <section
      // className="py-12 px-4 sm:py-16 min-h-0 md:min-h-[calc(100vh-4rem)]"
      className="py-12 px-4 sm:py-16 min-h-0"
      style={{
        background: `linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Focus Sector</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting leaders across diverse educational sectors
          </p>
        </div>

        <div className="relative overflow-x-auto py-6 sm:py-8 px-2 -mx-4 sm:mx-0">
          <div className="flex gap-3 sm:gap-4 md:gap-6 items-center w-max sm:w-auto animate-scroll">
            {duplicatedSectors.map((sector, index) => (
              <div
                key={`${sector.title}-${index}`}
                className={`
                  relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 flex-shrink-0
                  ${sector.size === 'large' 
                    ? 'w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px]' 
                    : 'w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] md:w-[280px] md:h-[300px]'}
                `}
                style={{
                  zIndex: 10,
                }}
              >
                <div className={`relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl`}>
                  {/* Background Image */}
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/100 via-blue-800/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                    <div className="text-white">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance mb-1 sm:mb-2">
                        {sector.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusSectors;
