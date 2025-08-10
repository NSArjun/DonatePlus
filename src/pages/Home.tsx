import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Truck, CheckCircle, Star, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { number: '250,000+', label: 'Meals Donated', icon: Heart },
    { number: '850+', label: 'NGO Partners', icon: Users },
    { number: '50,000+', label: 'People Helped', icon: CheckCircle },
  ];

  const steps = [
    {
      step: 1,
      title: 'Donor Posts',
      description: 'Share details about food, clothes, or resources you want to donate',
      icon: '📝',
    },
    {
      step: 2,
      title: 'NGO Accepts',
      description: 'Verified NGOs and organizations browse and accept donations',
      icon: '🤝',
    },
    {
      step: 3,
      title: 'Pickup Arranged',
      description: 'We coordinate pickup or delivery logistics for maximum convenience',
      icon: '🚚',
    },
    {
      step: 4,
      title: 'Resource Delivered',
      description: 'Your donation reaches those in need and makes a real impact',
      icon: '❤️',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Director, City Food Bank',
      content: 'DONATE has revolutionized how we connect with donors. The platform makes it so easy to coordinate food pickups and reach more families in need.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Regular Donor',
      content: 'I love how transparent the process is. Seeing the direct impact of my donations and knowing they reach the right people gives me so much joy.',
      rating: 5,
    },
    {
      name: 'Dr. Priya Patel',
      role: 'NGO Volunteer',
      content: 'The efficiency of this platform is incredible. We can now focus more on our mission rather than spending time searching for donors.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Your Excess into{' '}
                <span className="text-emerald-600">Someone's Necessity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with verified NGOs, old age homes, and individuals in need. 
                Your unused resources can create meaningful impact in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate-food"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-colors group"
                >
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Join as NGO
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-400 to-orange-400 rounded-2xl p-8 text-white transform rotate-3 shadow-2xl">
                <div className="text-6xl mb-4">   🍱🍎</div>
                <h3 className="text-2xl font-bold mb-2">--------------- Food Sharing</h3>
                <p className="text-emerald-100">------------------------ Turning surplus into sustenance</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-6 shadow-xl border-4 border-orange-200 transform -rotate-6">
                <div className="text-4xl mb-2">👕</div>
                <h4 className="font-semibold text-gray-900">Clothing Donations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Community Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together, we're making a difference in communities across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl">
                  <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process makes donating effortless and impactful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-6 text-center">{step.icon}</div>
                  <div className="text-emerald-600 font-bold text-sm mb-2 text-center">
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-emerald-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from donors, NGOs, and beneficiaries in our network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-orange-50 p-8 rounded-2xl relative">
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-emerald-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;