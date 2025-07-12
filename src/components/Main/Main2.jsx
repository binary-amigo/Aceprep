// import image1 from "../../assets/images/mainimg"
import image1 from "../../assets/images/mainimg1.jpg"
import image2 from "../../assets/images/mainimg2.jpg"
import image3 from "../../assets/images/mainimg3.jpg"
import image4 from "../../assets/images/mainimg4.jpg"
import image5 from "../../assets/images/mainimg5.jpg"
import image6 from "../../assets/images/mainimg6.jpeg"
import image7 from "../../assets/images/mainimg7.png"
import image8 from "../../assets/images/mainimg8.webp"
import image9 from "../../assets/images/mainimg9.jpg"

function Main2() {
  const features = [
    { image: image1, title: "AI Prep", description: "Personalized AI-powered interview preparation" },
    { image: image2, title: "Built-In ATS", description: "Resume optimization for Applicant Tracking Systems" },
    { image: image3, title: "Trending Contents", description: "Stay updated with latest interview trends" },
    { image: image4, title: "Fingertip Guidance", description: "Expert guidance at your fingertips" }
  ];

  const testimonials = [
    "If you're not networking, you're not working.",
    "Growth takes place outside of your comfort zone.",
    "A good laugh makes any interview, or any conversation, so much better."
  ];

  const galleryImages = [image5, image6, image7, image8, image9];

  return (
    <section className="bg-gradient-primary section-padding">
      <div className="container-max">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 mb-4">
            Ready to conquer interviews?
          </p>
          <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed">
            Whether you're a newbie or a ninja, we've got your back! From baby steps to boss moves, 
            we've got all the tools you need to rock those interviews and make 'em beg for more!
          </p>
          
          <div className="mt-8">
            <button className="btn-primary text-lg px-8 py-4">
              Learn More
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-glow transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-4 left-4 text-white/30">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-lg font-medium leading-relaxed pt-6">
                "{testimonial}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Success <span className="text-gradient">Gallery</span>
          </h3>
          <p className="text-lg text-secondary-600 mb-8">
            See the faces of success and get inspired
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="card p-3 group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Success story ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-sm font-medium pb-3">View Story</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-white shadow-soft">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Start Your Success Journey?
          </h3>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful candidates who have transformed their careers with AcePrep. 
            Your dream job is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              Get Started Free
            </button>
            <button className="btn-secondary px-8 py-3">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main2