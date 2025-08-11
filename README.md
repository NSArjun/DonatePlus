## DONATE – A Zero-Waste Social Donation and Logistics Platform for Food, Clothing, and Recyclables

DONATE – Bridging the Gap Between Excess and Need
is a web and mobile platform that bridges the gap between those who have excess (food, materials, resources) and those in need (NGOs, Old Age Homes, Ragpickers, and individuals in need of crowdfunding).  
The platform enables quick donations, transparent communication, and effective resource distribution.

---

## 🚀 Features
- **Donate Food** – Separate sections for NGOs/Old Age Homes and Donators.
- **Donate Resources/Materials** – Clothes, books, electronics, etc., with the same two-way division.
- **Ragpickers System** – Supports waste collectors by allowing pickups for recyclables.
- **Crowdfunding Portal** – Secure campaigns for community or personal needs.
- **Real-time Matching** – Matches donors with nearest recipients.
- **Pickup & Delivery Coordination** – Integrated request scheduling.
- **Responsive UI** – Works across web and mobile seamlessly.

---

## 📄 Pages & Structure
### 1️⃣ Donate Food
- NGO/Old Age Home Requests
- Donator Submission Form

### 2️⃣ Donate Resources & Materials
- NGO/Recipient Requests
- Donator Submission Form

### 3️⃣ Ragpickers System
- Waste pickup requests
- Recycling partner connections

### 4️⃣ Crowdfunding Portal
- Campaign creation
- Donation tracking

---

## 🛠 Tech Stack
**Frontend**
- HTML5, CSS3, JavaScript (React / Next.js)
- Tailwind CSS for styling
- Axios for API calls

**Backend**
- Node.js + Express.js
- REST APIs with JWT authentication

**Database and authentication**
- firebase
  

**Other Tools**
- Cloudinary / AWS S3 (for image uploads)
- Razorpay / Stripe (for crowdfunding payments)
- Mapbox API (for donor-recipient location matching)

---

## 🏗 Architecture & Workflow
**Workflow Overview:**
1. Donor/NGO registers → selects category (Food / Resource / Waste / Crowdfunding).
2. Details are submitted → backend validates & stores in MongoDB.
3. Location-based match is made → notification sent via email/SMS.
4. Pickup scheduled or direct drop-off arranged.
5. Completion updates reflected in dashboards.

**Architecture Diagram:**
```
[Frontend: React/Tailwind] → [API Gateway: Express] → [Database: MongoDB]
                  ↓                                ↑
       [Cloud Storage]                     [Payment Gateway]
                  ↓
         [Map & Location APIs]
```

---

## ⚙ Installation
```bash
# Clone repository
git clone https://github.com/yourusername/donate.git

# Navigate into project
cd donate

# Install dependencies
npm install

# Run frontend
cd frontend
npm start

# Run backend
cd backend
npm run dev
```

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.  
For major changes, open an issue first to discuss what you would like to change.

---

## 📄 License
MIT License
