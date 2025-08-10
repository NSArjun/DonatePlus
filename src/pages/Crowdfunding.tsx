import React, { useState } from 'react';
import { Heart, Target, Calendar, Users, Share2, ChevronRight, MapPin, Clock, CheckCircle, Plus, Upload, DollarSign } from 'lucide-react';

const Crowdfunding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'browse' | 'create'>('browse');
  const [campaignForm, setCampaignForm] = useState({
    title: '',
    category: '',
    targetAmount: '',
    description: '',
    organizationName: '',
    contactEmail: '',
    phone: '',
    location: '',
    duration: '',
    beneficiaries: '',
    usageDetails: '',
  });

  const campaigns = [
    {
      id: 1,
      title: 'Emergency Food Relief for Flood Victims',
      organization: 'Relief Foundation',
      category: 'Emergency Relief',
      location: 'Kerala, India',
      targetAmount: 500000,
      raisedAmount: 342000,
      daysLeft: 12,
      backers: 1234,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Providing immediate food assistance to families displaced by recent floods.',
      verified: true,
    },
    {
      id: 2,
      title: 'Digital Learning Center for Rural Children',
      organization: 'Education First NGO',
      category: 'Education',
      location: 'Rajasthan, India',
      targetAmount: 750000,
      raisedAmount: 435000,
      daysLeft: 25,
      backers: 892,
      image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Setting up computer labs and internet connectivity for underprivileged students.',
      verified: true,
    },
    {
      id: 3,
      title: 'Medical Equipment for Rural Hospital',
      organization: 'HealthCare Initiative',
      category: 'Healthcare',
      location: 'Bihar, India',
      targetAmount: 1200000,
      raisedAmount: 680000,
      daysLeft: 18,
      backers: 2156,
      image: 'https://images.pexels.com/photos/7108337/pexels-photo-7108337.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Purchasing essential medical equipment for a rural hospital serving 50,000+ people.',
      verified: true,
    },
    {
      id: 4,
      title: 'Clean Water Project for Remote Villages',
      organization: 'Water for All',
      category: 'Water & Sanitation',
      location: 'Odisha, India',
      targetAmount: 900000,
      raisedAmount: 234000,
      daysLeft: 45,
      backers: 567,
      image: 'https://images.pexels.com/photos/2405766/pexels-photo-2405766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Installing water purification systems and bore wells in 5 remote villages.',
      verified: true,
    },
    {
      id: 5,
      title: 'Skill Development for Women Empowerment',
      organization: 'Women Rise Foundation',
      category: 'Empowerment',
      location: 'Uttar Pradesh, India',
      targetAmount: 300000,
      raisedAmount: 178000,
      daysLeft: 30,
      backers: 445,
      image: 'https://images.pexels.com/photos/8197531/pexels-photo-8197531.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Training programs for women in tailoring, handicrafts, and digital literacy.',
      verified: true,
    },
    {
      id: 6,
      title: 'Shelter for Stray Animals',
      organization: 'Animal Welfare Society',
      category: 'Animal Welfare',
      location: 'Tamil Nadu, India',
      targetAmount: 400000,
      raisedAmount: 145000,
      daysLeft: 22,
      backers: 623,
      image: 'https://images.pexels.com/photos/6977965/pexels-photo-6977965.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Building a shelter and medical facility for rescued stray dogs and cats.',
      verified: false,
    },
  ];

  const categories = [
    'All Categories', 'Emergency Relief', 'Education', 'Healthcare', 
    'Water & Sanitation', 'Empowerment', 'Animal Welfare', 'Environment'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredCampaigns = selectedCategory === 'All Categories' 
    ? campaigns 
    : campaigns.filter(campaign => campaign.category === selectedCategory);

  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign form submitted:', campaignForm);
    alert('Campaign submitted successfully! It will be reviewed and published within 24-48 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCampaignForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calculateProgress = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Crowdfunding Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support meaningful causes and help create positive change. Every contribution, big or small, makes a difference in someone's life.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'browse'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Browse Campaigns
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'create'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Start a Campaign
            </button>
          </div>
        </div>

        {activeTab === 'browse' ? (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Campaign Image */}
                  <div className="relative">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {campaign.category}
                      </span>
                    </div>
                    {campaign.verified && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-500 text-white p-1.5 rounded-full">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Campaign Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {campaign.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="mr-4">{campaign.location}</span>
                      <span className="text-purple-600 font-medium">{campaign.organization}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{formatAmount(campaign.raisedAmount)} raised</span>
                        <span>{formatAmount(campaign.targetAmount)} goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${calculateProgress(campaign.raisedAmount, campaign.targetAmount)}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-purple-600 font-medium mt-2">
                        {Math.round(calculateProgress(campaign.raisedAmount, campaign.targetAmount))}% funded
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign.backers} backers</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                        <Heart className="h-4 w-4 mr-2" />
                        Support
                      </button>
                      <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-white text-purple-600 border-2 border-purple-600 py-3 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Load More Campaigns
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Campaign</h2>
              
              <form onSubmit={handleCampaignSubmit} className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Title</label>
                      <input
                        type="text"
                        name="title"
                        required
                        value={campaignForm.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter a compelling title for your campaign"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        name="category"
                        required
                        value={campaignForm.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select category</option>
                        <option value="Emergency Relief">Emergency Relief</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Water & Sanitation">Water & Sanitation</option>
                        <option value="Empowerment">Empowerment</option>
                        <option value="Animal Welfare">Animal Welfare</option>
                        <option value="Environment">Environment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Target Amount (₹)</label>
                      <input
                        type="number"
                        name="targetAmount"
                        required
                        value={campaignForm.targetAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter target amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Duration</label>
                      <select
                        name="duration"
                        required
                        value={campaignForm.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select duration</option>
                        <option value="30">30 days</option>
                        <option value="45">45 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Beneficiaries</label>
                      <input
                        type="text"
                        name="beneficiaries"
                        required
                        value={campaignForm.beneficiaries}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="e.g., 500 children, 100 families"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Description</label>
                      <textarea
                        name="description"
                        required
                        value={campaignForm.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Describe your cause, the problem you're solving, and how the funds will be used..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fund Usage Details</label>
                      <textarea
                        name="usageDetails"
                        required
                        value={campaignForm.usageDetails}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Provide a detailed breakdown of how the funds will be utilized..."
                      />
                    </div>
                  </div>
                </div>

                {/* Organization Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                      <input
                        type="text"
                        name="organizationName"
                        required
                        value={campaignForm.organizationName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Name of your organization/NGO"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={campaignForm.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        name="contactEmail"
                        required
                        value={campaignForm.contactEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Organization email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={campaignForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Contact phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Media Upload */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Media</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload photos and videos that tell your story</p>
                    <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB each</p>
                    <button
                      type="button"
                      className="mt-4 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      Choose Files
                    </button>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3 mb-6">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 rounded text-purple-600"
                    />
                    <div className="text-sm text-gray-600">
                      <p>
                        I agree to the{' '}
                        <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
                        I confirm that all information provided is accurate and the campaign is for a legitimate cause.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Submit Campaign</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Campaign Guidelines */}
            <div className="mt-8 bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Campaign Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-purple-700">
                <div>
                  <h4 className="font-semibold mb-2">✅ Do's</h4>
                  <ul className="space-y-1">
                    <li>• Be transparent about fund usage</li>
                    <li>• Provide regular updates to donors</li>
                    <li>• Use authentic photos and information</li>
                    <li>• Respond promptly to donor queries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">❌ Don'ts</h4>
                  <ul className="space-y-1">
                    <li>• Misrepresent facts or exaggerate needs</li>
                    <li>• Use copyrighted images without permission</li>
                    <li>• Create campaigns for personal gain</li>
                    <li>• Share funds with unauthorized parties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crowdfunding;