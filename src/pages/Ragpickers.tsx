import React, { useState } from 'react';
import { Recycle, MapPin, Clock, Truck, Phone, CheckCircle, AlertCircle, Star, Calendar } from 'lucide-react';

const Ragpickers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'request' | 'become'>('request');
  const [pickupForm, setPickupForm] = useState({
    name: '',
    phone: '',
    address: '',
    itemTypes: [],
    quantity: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
  });

  const [ragpickerForm, setRagpickerForm] = useState({
    name: '',
    phone: '',
    email: '',
    workArea: '',
    experience: '',
    vehicleType: '',
    workingHours: '',
    identification: '',
  });

  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const wasteTypes = [
    { id: 'paper', name: 'Paper & Cardboard', icon: '📄', value: '₹5-8/kg' },
    { id: 'plastic', name: 'Plastic Bottles', icon: '🍼', value: '₹8-12/kg' },
    { id: 'metal', name: 'Metal Items', icon: '🔧', value: '₹15-25/kg' },
    { id: 'electronics', name: 'E-waste', icon: '📱', value: '₹20-100/kg' },
    { id: 'glass', name: 'Glass', icon: '🍶', value: '₹3-5/kg' },
    { id: 'clothes', name: 'Old Clothes', icon: '👕', value: '₹2-5/kg' },
  ];

  const registeredRagpickers = [
    {
      id: 1,
      name: 'Ravi Kumar',
      area: 'Central District',
      experience: '8 years',
      rating: 4.8,
      completedPickups: 1250,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: ['Electronics', 'Metal'],
    },
    {
      id: 2,
      name: 'Meena Devi',
      area: 'North Zone',
      experience: '5 years',
      rating: 4.9,
      completedPickups: 890,
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: ['Paper', 'Plastic'],
    },
    {
      id: 3,
      name: 'Suresh Patel',
      area: 'East Side',
      experience: '12 years',
      rating: 4.7,
      completedPickups: 2100,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: ['All Types'],
    },
  ];

  const impactStats = [
    { number: '50,000kg', label: 'Waste Recycled', icon: Recycle },
    { number: '2,500+', label: 'Pickups Completed', icon: Truck },
    { number: '150+', label: 'Registered Ragpickers', icon: CheckCircle },
    { number: '₹8,50,000', label: 'Earnings Generated', icon: Star },
  ];

  const handlePickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrackingId = 'RG' + Math.random().toString(36).substr(2, 9).toUpperCase();
    console.log('Pickup request submitted:', pickupForm);
    alert(`Pickup scheduled successfully! Your tracking ID is: ${newTrackingId}`);
    // Reset form
    setPickupForm({
      name: '', phone: '', address: '', itemTypes: [], quantity: '',
      preferredDate: '', preferredTime: '', specialInstructions: ''
    });
  };

  const handleRagpickerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ragpicker application submitted:', ragpickerForm);
    alert('Application submitted successfully! We will contact you within 2-3 business days.');
  };

  const handleItemTypeChange = (itemType: string) => {
    setPickupForm(prev => ({
      ...prev,
      itemTypes: prev.itemTypes.includes(itemType)
        ? prev.itemTypes.filter(type => type !== itemType)
        : [...prev.itemTypes, itemType]
    }));
  };

  const trackPickup = () => {
    // Mock tracking functionality
    if (trackingId.trim()) {
      setTrackingResult({
        id: trackingId,
        status: 'In Progress',
        assignedRagpicker: 'Ravi Kumar',
        scheduledTime: '2:00 PM - 4:00 PM',
        estimatedValue: '₹450',
        items: 'Electronics, Paper',
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, form: 'pickup' | 'ragpicker') => {
    if (form === 'pickup') {
      setPickupForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setRagpickerForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ragpickers Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering waste collectors while creating a cleaner environment. Connect with local ragpickers for responsible waste disposal and recycling.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Waste Types & Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recyclable Items & Market Rates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {wasteTypes.map((type) => (
              <div key={type.id} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{type.name}</h3>
                <div className="text-green-600 font-bold text-sm">{type.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab('request')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'request'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Request Pickup
            </button>
            <button
              onClick={() => setActiveTab('become')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'become'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Join as Ragpicker
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Forms */}
          <div className="space-y-8">
            {activeTab === 'request' ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Pickup</h2>
                <form onSubmit={handlePickupSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={pickupForm.name}
                        onChange={(e) => handleInputChange(e, 'pickup')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={pickupForm.phone}
                        onChange={(e) => handleInputChange(e, 'pickup')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address</label>
                    <textarea
                      name="address"
                      required
                      value={pickupForm.address}
                      onChange={(e) => handleInputChange(e, 'pickup')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter complete address with landmarks"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Waste Types</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {wasteTypes.map((type) => (
                        <label key={type.id} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-green-50">
                          <input
                            type="checkbox"
                            checked={pickupForm.itemTypes.includes(type.id)}
                            onChange={() => handleItemTypeChange(type.id)}
                            className="rounded text-green-600"
                          />
                          <span className="text-lg">{type.icon}</span>
                          <span className="text-sm font-medium">{type.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      value={pickupForm.quantity}
                      onChange={(e) => handleInputChange(e, 'pickup')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="e.g., 5kg paper, 2kg plastic bottles"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={pickupForm.preferredDate}
                        onChange={(e) => handleInputChange(e, 'pickup')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        name="preferredTime"
                        required
                        value={pickupForm.preferredTime}
                        onChange={(e) => handleInputChange(e, 'pickup')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (8 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      value={pickupForm.specialInstructions}
                      onChange={(e) => handleInputChange(e, 'pickup')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Any additional details, access instructions, or specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Truck className="h-5 w-5" />
                    <span>Schedule Pickup</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Join as a Ragpicker</h2>
                <form onSubmit={handleRagpickerSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={ragpickerForm.name}
                      onChange={(e) => handleInputChange(e, 'ragpicker')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Your complete name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={ragpickerForm.phone}
                        onChange={(e) => handleInputChange(e, 'ragpicker')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Contact number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={ragpickerForm.email}
                        onChange={(e) => handleInputChange(e, 'ragpicker')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Email (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Work Area</label>
                    <input
                      type="text"
                      name="workArea"
                      required
                      value={ragpickerForm.workArea}
                      onChange={(e) => handleInputChange(e, 'ragpicker')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Area or district where you want to work"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <select
                        name="experience"
                        required
                        value={ragpickerForm.experience}
                        onChange={(e) => handleInputChange(e, 'ragpicker')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select experience</option>
                        <option value="new">New to waste collection</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                      <select
                        name="vehicleType"
                        required
                        value={ragpickerForm.vehicleType}
                        onChange={(e) => handleInputChange(e, 'ragpicker')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select vehicle</option>
                        <option value="cycle">Bicycle/Tricycle</option>
                        <option value="cart">Hand Cart</option>
                        <option value="auto">Auto Rickshaw</option>
                        <option value="van">Small Van/Tempo</option>
                        <option value="none">No Vehicle</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Working Hours</label>
                    <select
                      name="workingHours"
                      required
                      value={ragpickerForm.workingHours}
                      onChange={(e) => handleInputChange(e, 'ragpicker')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select working hours</option>
                      <option value="morning">Morning (6 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                      <option value="evening">Evening (6 PM - 10 PM)</option>
                      <option value="flexible">Flexible hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Government ID</label>
                    <input
                      type="text"
                      name="identification"
                      required
                      value={ragpickerForm.identification}
                      onChange={(e) => handleInputChange(e, 'ragpicker')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Aadhar, PAN, or other government ID number"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            )}

            {/* Track Pickup */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Track Your Pickup</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter tracking ID (e.g., RG123456789)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button
                  onClick={trackPickup}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Track
                </button>
              </div>

              {trackingResult && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3">Pickup Status: {trackingResult.status}</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Assigned to:</strong> {trackingResult.assignedRagpicker}</p>
                    <p><strong>Scheduled Time:</strong> {trackingResult.scheduledTime}</p>
                    <p><strong>Items:</strong> {trackingResult.items}</p>
                    <p><strong>Estimated Value:</strong> {trackingResult.estimatedValue}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Ragpicker Directory */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registered Ragpickers</h3>
              <div className="space-y-6">
                {registeredRagpickers.map((ragpicker) => (
                  <div key={ragpicker.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={ragpicker.image}
                        alt={ragpicker.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{ragpicker.name}</h4>
                            <p className="text-sm text-gray-600 flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {ragpicker.area}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-yellow-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm ml-1">{ragpicker.rating}</span>
                            </div>
                            <p className="text-xs text-gray-500">{ragpicker.completedPickups} pickups</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            Experience: {ragpicker.experience}
                          </div>
                          <div className="flex gap-1">
                            {ragpicker.specialization.map((spec) => (
                              <span key={spec} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Info */}
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">1. Schedule Pickup</h4>
                    <p className="text-green-100 text-sm">Book a convenient time slot</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">2. Pickup & Sorting</h4>
                    <p className="text-green-100 text-sm">Ragpicker collects and sorts items</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <Recycle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">3. Recycling</h4>
                    <p className="text-green-100 text-sm">Items are recycled responsibly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">4. Fair Payment</h4>
                    <p className="text-green-100 text-sm">Ragpickers earn fair wages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragpickers;