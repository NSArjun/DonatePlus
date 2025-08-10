import React, { useState } from 'react';
import { MapPin, Clock, Users, Calendar, Phone, Mail, Upload, CheckCircle } from 'lucide-react';

const DonateFood: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'request'>('donate');
  const [donationForm, setDonationForm] = useState({
    foodType: '',
    quantity: '',
    servings: '',
    location: '',
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    specialNotes: '',
  });
  const [requestForm, setRequestForm] = useState({
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    phone: '',
    email: '',
    location: '',
    requiredQuantity: '',
    urgency: 'normal',
    description: '',
  });

  const ngos = [
    {
      id: 1,
      name: 'Hope Foundation',
      type: 'NGO',
      location: 'Downtown Area',
      currentRequests: '200 meals needed',
      verified: true,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Senior Care Center',
      type: 'Old Age Home',
      location: 'Riverside District',
      currentRequests: '50 meals daily',
      verified: true,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/5645739/pexels-photo-5645739.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Community Kitchen',
      type: 'Community Center',
      location: 'East Side',
      currentRequests: '150 meals needed',
      verified: true,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const successStories = [
    {
      donor: 'Sarah\'s Restaurant',
      recipient: 'City Shelter',
      impact: '500 meals provided',
      story: 'Weekly surplus food from our restaurant now feeds families in need.',
    },
    {
      donor: 'Local Bakery',
      recipient: 'Elder Care Home',
      impact: '200 bread loaves',
      story: 'Fresh bread delivered daily, bringing smiles to elderly residents.',
    },
  ];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation form submitted:', donationForm);
    alert('Thank you! Your donation request has been submitted. An NGO will contact you soon.');
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Request form submitted:', requestForm);
    alert('Your food request has been registered. Donors in your area will be notified.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, form: 'donation' | 'request') => {
    if (form === 'donation') {
      setDonationForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setRequestForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Food Donation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect surplus food with those who need it most. Every meal matters in building a hunger-free community.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'donate'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              I Want to Donate Food
            </button>
            <button
              onClick={() => setActiveTab('request')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'request'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              I Need Food Donations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="space-y-8">
            {activeTab === 'donate' ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Donate Food</h2>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Food Type</label>
                      <select
                        name="foodType"
                        required
                        value={donationForm.foodType}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select food type</option>
                        <option value="cooked-meals">Cooked Meals</option>
                        <option value="raw-vegetables">Raw Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains & Cereals</option>
                        <option value="dairy">Dairy Products</option>
                        <option value="packaged-food">Packaged Food</option>
                        <option value="beverages">Beverages</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Servings</label>
                      <input
                        type="number"
                        name="servings"
                        required
                        value={donationForm.servings}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Number of people it can feed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={donationForm.location}
                      onChange={(e) => handleInputChange(e, 'donation')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={donationForm.date}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Time</label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={donationForm.time}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={donationForm.contactPerson}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={donationForm.phone}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                    <textarea
                      name="specialNotes"
                      value={donationForm.specialNotes}
                      onChange={(e) => handleInputChange(e, 'donation')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Any special instructions, dietary restrictions, or additional info..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Submit Food Donation</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Food Donations</h2>
                <form onSubmit={handleRequestSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                    <input
                      type="text"
                      name="organizationName"
                      required
                      value={requestForm.organizationName}
                      onChange={(e) => handleInputChange(e, 'request')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Name of your organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
                    <select
                      name="organizationType"
                      required
                      value={requestForm.organizationType}
                      onChange={(e) => handleInputChange(e, 'request')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select type</option>
                      <option value="ngo">NGO</option>
                      <option value="old-age-home">Old Age Home</option>
                      <option value="orphanage">Orphanage</option>
                      <option value="shelter">Homeless Shelter</option>
                      <option value="community-center">Community Center</option>
                      <option value="school">School</option>
                      <option value="individual">Individual in Need</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={requestForm.contactPerson}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Contact person name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={requestForm.phone}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={requestForm.email}
                      onChange={(e) => handleInputChange(e, 'request')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Organization email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={requestForm.location}
                      onChange={(e) => handleInputChange(e, 'request')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Organization address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Required Quantity</label>
                      <input
                        type="text"
                        name="requiredQuantity"
                        required
                        value={requestForm.requiredQuantity}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="e.g., 100 meals daily"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                      <select
                        name="urgency"
                        value={requestForm.urgency}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description of Need</label>
                    <textarea
                      name="description"
                      required
                      value={requestForm.description}
                      onChange={(e) => handleInputChange(e, 'request')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Describe your food needs, number of people you serve, preferred food types, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Submit Food Request</span>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Side - Directory & Stories */}
          <div className="space-y-8">
            {/* NGO Directory */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Organizations</h3>
              <div className="space-y-4">
                {ngos.map((ngo) => (
                  <div key={ngo.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={ngo.image}
                          alt={ngo.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{ngo.name}</h4>
                          <p className="text-sm text-gray-600">{ngo.type}</p>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{ngo.location}</span>
                          </div>
                        </div>
                      </div>
                      {ngo.verified && (
                        <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                          ✓ Verified
                        </div>
                      )}
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-orange-600 mr-2" />
                          <span className="text-sm font-medium text-orange-700">
                            {ngo.currentRequests}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Rating: {ngo.rating}/5
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-emerald-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-emerald-700">
                        {story.donor} → {story.recipient}
                      </div>
                      <div className="text-sm text-emerald-600 font-semibold">
                        {story.impact}
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{story.story}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Food Safety Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-emerald-200" />
                  <span className="text-sm">Ensure food is fresh and prepared within 2 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-emerald-200" />
                  <span className="text-sm">Package food in clean, sealed containers</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-emerald-200" />
                  <span className="text-sm">Coordinate pickup timing with receiving organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;