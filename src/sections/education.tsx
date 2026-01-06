'use client';

export default function Education() {
  const educationData = [
    {
      year: '2023 - 2025',
      course: 'Bachelor of Science in Information Technology (Graduated)',
      school: 'Cor Jesu College',
    },
    {
        year: '2020 - 2022',
        course: 'Bachelor of Science in Information Technology',
        school: 'Davao del Sur State College',
      },
    {
      year: '2018 - 2020',
      course: 'Senior High School - ICT',
      school: 'Cor Jesu College',
    },
    // Add more education entries here
  ];

  return (
    <section id="education" className="py-20 px-6 bg-[#0a192f] relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Education</h2>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#0f2547] border border-blue-900/30 p-6 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-700/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Year */}
                <div className="text-blue-400 font-semibold text-lg">
                  {edu.year}
                </div>
                
                {/* Course and School */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {edu.course}
                  </h3>
                  <p className="text-gray-400">
                    {edu.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
