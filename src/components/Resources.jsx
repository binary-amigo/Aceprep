import Navbar from "./Main/Navbar";
import animationData from "../assets/lotties/resourcesBackground.json";
import Lottie from "react-lottie";

const Resources = () => {
  const learningMaterials = [
    { id: 1, link: "#", label: "Strivers SDE Sheet", category: "DSA", difficulty: "Advanced" },
    { id: 2, link: "#", label: "Strivers A2Z DSA Course", category: "DSA", difficulty: "Beginner" },
    { id: 3, link: "#", label: "Modern Web Development", category: "Web Dev", difficulty: "Intermediate" },
    { id: 4, link: "#", label: "Complete Git and GitHub Tutorial", category: "Tools", difficulty: "Beginner" },
    { id: 5, link: "#", label: "Figma UI Design Tutorial", category: "Design", difficulty: "Beginner" },
    { id: 6, link: "#", label: "Android Development", category: "Mobile", difficulty: "Intermediate" },
    { id: 7, link: "#", label: "0 to 100 Machine Learning", category: "ML/AI", difficulty: "Advanced" },
    { id: 8, link: "#", label: "DSA Sheet by Love Babbar", category: "DSA", difficulty: "Intermediate" },
    { id: 9, link: "#", label: "10 DSA Cheat Sheet For Interview", category: "DSA", difficulty: "Beginner" },
    { id: 10, link: "#", label: "Apna College DSA Sheet", category: "DSA", difficulty: "Beginner" },
    { id: 11, link: "#", label: "Java with DSA", category: "Programming", difficulty: "Intermediate" },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'DSA':
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
      case 'Web Dev':
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
      case 'Mobile':
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" /></svg>;
      default:
        return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <div className="pt-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="container-max relative z-10 section-padding">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              <span className="text-gradient">Learning Materials</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Curated resources to accelerate your learning journey. From beginner tutorials to advanced concepts, 
              find everything you need to master your skills.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-secondary-500">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-secondary-500">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">Free</div>
                <div className="text-sm text-secondary-500">Access</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search learning materials..."
                  className="w-full px-6 py-4 pl-12 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 bg-white shadow-lg"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Learning Materials Grid */}
          <div className="grid gap-6 mb-16">
            {learningMaterials.map((material, index) => (
              <div
                key={material.id}
                className="card p-6 group hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Category Icon */}
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200">
                      {getCategoryIcon(material.category)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 truncate">
                        {material.label}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        Category: {material.category}
                      </p>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(material.difficulty)}`}>
                      {material.difficulty}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <a
                    href={material.link}
                    className="ml-4 btn-primary px-6 py-2 text-sm"
                  >
                    Access
                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Need More Resources?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Request specific learning materials 
              and we'll curate them for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Request Resource
              </button>
              <button className="btn-secondary px-8 py-3">
                Suggest Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;




