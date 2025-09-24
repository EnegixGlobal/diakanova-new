# DSkinova - Premium Skincare Website

A modern, responsive skincare website built w3. **Access the Application**

- Backend API will be available at `http://localhost:5000`
- Frontend will be available at `http://localhost:5173` (or check terminal for exact port)

### Additional Setup

1. **Seed Initial Data (Optional)**

   ```bash
   cd Server
   npm run seed
   ```

2. **Create Admin User**
   ```bash
   cd Server
   node createAdmin.js
   ```

## 🔧 Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dskinova
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📝 Available Scripts

### Backend

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run seed` - Seed initial data
- `npm run build` - Build for production

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run prebuild` - Run SEO preparation scripts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Requestth React, featuring an admin dashboard for content management and a beautiful user interface for showcasing skincare services and news.

## 🌟 Features

### Frontend Features

- **Modern UI/UX**: Clean, professional design with Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Multi-page Navigation**: Home, About, Services, Contact, News
- **News Management**: Dynamic news articles with image support
- **Admin Dashboard**: Complete content management system
- **Image Upload**: Support for news article images
- **SEO Optimized**: Built-in SEO preparation scripts

### Admin Features

- **Secure Login**: Protected admin authentication
- **News Management**: Add, edit, delete news articles
- **Image Upload**: Thumbnail and content image support
- **Pagination**: Efficient news article pagination
- **Rich Content**: Support for paragraphs, tags, and metadata

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern JavaScript library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **FontAwesome & Lucide React** - Icon libraries

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Cloudinary** - Image upload and management

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running
- npm or yarn package manager
- Cloudinary account for image uploads

### Installation and Setup

1. **Backend Setup**

   ```bash
   # Navigate to Server directory
   cd Server

   # Install dependencies
   npm install

   # Create .env file with your configuration
   # Add the following variables to your .env:
   PORT=5000
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

   # Start the server
   npm run dev
   ```

2. **Frontend Setup**

   ```bash
   # Navigate to frontend directory
   cd skinera-main

   # Install dependencies
   npm install

   # Start the development server
   npm run dev
   ```

   ```bash
   cd skinera-main
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../Server
   npm install
   ```

### Development

1. **Start the Backend Server**

   ```bash
   cd Server
   node index.js
   ```

   Server will run on `http://localhost:3002`

2. **Start the Frontend Development Server**
   ```bash
   cd skinera-main
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### Build for Production

1. **Build the Frontend**

   ```bash
   cd skinera-main
   npm run build
   ```

2. **Preview the Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
Dskinova/
├── skinera-main/          # Frontend React Application
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── data/        # Mock data files
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── Server/               # Backend Express Server
│   ├── src/             # Server source files
│   ├── index.js         # Server entry point
│   └── package.json
└── README.md
```

## 🎨 Available Scripts

### Frontend Scripts (skinera-main)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run prebuild` - Run SEO preparation

### Backend Scripts (Server)

- `node index.js` - Start the server

## 🔐 Admin Access

- **Admin Login**: Navigate to `/admin-login`
- **Default Credentials**: Check the AdminLogin component for authentication logic
- **Dashboard**: Access content management at `/admin-dashboard`

## 📱 Pages & Routes

- `/` - Homepage with hero section and services
- `/about` - About Us page
- `/service` - Service details page
- `/contact` - Contact information
- `/news` - News archive page
- `/news/:slug` - Individual news article
- `/admin-login` - Admin authentication
- `/admin-dashboard` - Admin content management

## 🎯 Key Components

- **HomePage**: Landing page with hero and services
- **NewsArchive**: News listing with pagination
- **NewsTemplate**: Individual news article display
- **Dashboard**: Admin panel for content management
- **AdminLogin**: Secure admin authentication
- **ServiceDetail**: Service information pages

## 🚀 Deployment

### Frontend Deployment (Vercel)

The frontend is configured for Vercel deployment with:

- Automatic builds on push
- SEO optimization scripts
- Static asset handling

### Backend Deployment

The Express server can be deployed to:

- Heroku
- DigitalOcean
- AWS EC2
- Vercel (serverless functions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

**Vikky Kumar**

- GitHub: [@Vikky-Kumar-Nv](https://github.com/Vikky-Kumar-Nv)
- Project: [DSkinova](https://github.com/Vikky-Kumar-Nv/Dskinova)

---

⭐ **Star this repository** if you found it helpful!</content>
<parameter name="filePath">e:\ProgramingByVikky\skinova\README.md
