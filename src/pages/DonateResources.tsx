import React, { useState } from 'react';
import { Upload, Package, Shirt, Book, Monitor, Home, Baby, Camera, CheckCircle, MapPin, Calendar, Phone } from 'lucide-react';

const DonateResources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donate' | 'request'>('donate');
  const [donationForm, setDonationForm] = useState({
    itemCategory: '',
    itemName: '',
    condition: '',
    quantity: '',
    description: '',
    location: '',
    availableDate: '',
    contactPerson: '',
    phone: '',
    preferredPickupTime: '',
  });

  const [requestForm, setRequestForm] = useState({
    organizationName: '',
    organizationType: '',
    itemCategory: '',
    itemsNeeded: '',
    quantity: '',
    urgency: 'normal',
    purpose: '',
    location: '',
    contactPerson: '',
    phone: '',
    email: '',
  });

  const categories = [
    { id: 'clothing', name: 'Clothing & Accessories', icon: Shirt, color: 'bg-blue-500' },
    { id: 'electronics', name: 'Electronics', icon: Monitor, color: 'bg-purple-500' },
    { id: 'books', name: 'Books & Educational', icon: Book, color: 'bg-green-500' },
    { id: 'furniture', name: 'Furniture & Home', icon: Home, color: 'bg-orange-500' },
    { id: 'toys', name: 'Toys & Baby Items', icon: Baby, color: 'bg-pink-500' },
    { id: 'sports', name: 'Sports & Recreation', icon: Package, color: 'bg-red-500' },
  ];

  const recentDonations = [
    {
      id: 1,
      donor: 'Tech Solutions Inc.',
      items: '25 Laptops',
      recipient: 'Education for All NGO',
      status: 'delivered',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      donor: 'Fashion Store',
      items: '200 Winter Jackets',
      recipient: 'Homeless Shelter',
      status: 'in-transit',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      donor: 'City Library',
      items: '500 Books',
      recipient: 'Rural School Program',
      status: 'delivered',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation form submitted:', donationForm);
    alert('Thank you! Your resource donation has been listed. NGOs in your area will be notified.');
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Request form submitted:', requestForm);
    alert('Your resource request has been registered. Potential donors will be notified.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, form: 'donation' | 'request') => {
    if (form === 'donation') {
      setDonationForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setRequestForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resource Donation Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give your unused items a second life. From clothes to electronics, your donations can transform lives and support communities in need.
          </p>
        </div>

        {/* Category Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'donate'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Donate Resources
            </button>
            <button
              onClick={() => setActiveTab('request')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'request'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Request Resources
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="space-y-8">
            {activeTab === 'donate' ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Donate Your Resources</h2>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Item Category</label>
                      <select
                        name="itemCategory"
                        required
                        value={donationForm.itemCategory}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select category</option>
                        <option value="clothing">Clothing & Accessories</option>
                        <option value="electronics">Electronics</option>
                        <option value="books">Books & Educational Materials</option>
                        <option value="furniture">Furniture & Home Items</option>
                        <option value="toys">Toys & Baby Items</option>
                        <option value="sports">Sports & Recreation</option>
                        <option value="medical">Medical Equipment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                      <input
                        type="text"
                        name="itemName"
                        required
                        value={donationForm.itemName}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Winter Jackets, Laptops, Textbooks"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                      <select
                        name="condition"
                        required
                        value={donationForm.condition}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select condition</option>
                        <option value="new">New</option>
                        <option value="like-new">Like New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="needs-repair">Needs Minor Repair</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        required
                        value={donationForm.quantity}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Number of items"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      required
                      value={donationForm.description}
                      onChange={(e) => handleInputChange(e, 'donation')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the items in detail - size, color, brand, specifications, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={donationForm.location}
                      onChange={(e) => handleInputChange(e, 'donation')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your address for pickup"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available From</label>
                      <input
                        type="date"
                        name="availableDate"
                        required
                        value={donationForm.availableDate}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Pickup Time</label>
                      <select
                        name="preferredPickupTime"
                        required
                        value={donationForm.preferredPickupTime}
                        onChange={(e) => handleInputChange(e, 'donation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select time preference</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Upload Photos (Optional)</h4>
                    <p className="text-sm text-blue-700 mb-3">Adding photos helps NGOs better understand your donation</p>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                      <Camera className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <p className="text-blue-600">Click to upload photos or drag and drop</p>
                      <p className="text-xs text-blue-500 mt-2">PNG, JPG up to 5MB each</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>List Your Donation</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Resources</h2>
                <form onSubmit={handleRequestSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                    <input
                      type="text"
                      name="organizationName"
                      required
                      value={requestForm.organizationName}
                      onChange={(e) => handleInputChange(e, 'request')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="ngo">NGO</option>
                      <option value="school">School</option>
                      <option value="old-age-home">Old Age Home</option>
                      <option value="orphanage">Orphanage</option>
                      <option value="community-center">Community Center</option>
                      <option value="religious-organization">Religious Organization</option>
                      <option value="individual">Individual in Need</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Resource Category</label>
                      <select
                        name="itemCategory"
                        required
                        value={requestForm.itemCategory}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select category</option>
                        <option value="clothing">Clothing & Accessories</option>
                        <option value="electronics">Electronics</option>
                        <option value="books">Books & Educational Materials</option>
                        <option value="furniture">Furniture & Home Items</option>
                        <option value="toys">Toys & Baby Items</option>
                        <option value="sports">Sports & Recreation</option>
                        <option value="medical">Medical Equipment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Needed</label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={requestForm.quantity}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 50 laptops, 200 books"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specific Items Needed</label>
                    <textarea
                      name="itemsNeeded"
                      required
                      value={requestForm.itemsNeeded}
                      onChange={(e) => handleInputChange(e, 'request')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="List specific items, sizes, specifications, or any requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purpose/Use Case</label>
                    <textarea
                      name="purpose"
                      required
                      value={requestForm.purpose}
                      onChange={(e) => handleInputChange(e, 'request')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Explain how these resources will be used and who will benefit..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                      <select
                        name="urgency"
                        value={requestForm.urgency}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={requestForm.location}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Organization address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={requestForm.contactPerson}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Contact person name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={requestForm.phone}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Contact number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={requestForm.email}
                        onChange={(e) => handleInputChange(e, 'request')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Organization email"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Submit Resource Request</span>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Side - Recent Activity */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Success Stories</h3>
              <div className="space-y-6">
                {recentDonations.map((donation) => (
                  <div key={donation.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={donation.image}
                        alt={donation.items}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{donation.items}</h4>
                            <p className="text-sm text-gray-600">{donation.donor}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            donation.status === 'delivered'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {donation.status === 'delivered' ? '✓ Delivered' : '🚚 In Transit'}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>To: {donation.recipient}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Resource Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">12,500+</div>
                  <div className="text-blue-100">Items Donated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">850+</div>
                  <div className="text-blue-100">Families Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-100">Successful Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24hr</div>
                  <div className="text-blue-100">Avg Response Time</div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donation Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  Clean and organize items before pickup
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  Include original packaging/manuals if available
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  Test electronics before donating
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  Group similar items together
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateResources;