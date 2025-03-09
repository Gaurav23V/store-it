# Store It 🗄️

A modern storage management platform built with Next.js 15 and Appwrite, designed to help users organize and share their digital assets efficiently.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://store-it.gaurav23v.live/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Latest-orange)](https://appwrite.io/)

## 📸 Screenshots

### Login Page
![Login Page](https://i.ibb.co/j3nXcSx/Login-Default.png)
*Secure authentication with email OTP verification*

### Dashboard
![Dashboard](https://i.ibb.co/f13mtR7/Screenshot-From-2024-11-25-09-32-16.png)
*Comprehensive overview of your storage usage and recent files*

### Images Gallery
![Images Tab](https://i.ibb.co/b2Rbtwt/Screenshot-From-2024-11-25-09-32-40.png)
*Organized view of all your images with sharing capabilities*

## ✨ Features

- **Secure Authentication**
  - Email-based registration
  - OTP verification for enhanced security
  - Persistent login sessions

- **Intuitive Dashboard**
  - Total storage usage overview
  - Category-wise storage distribution
  - Recent files quick access
  - Real-time storage statistics

- **File Management**
  - Multi-file upload support
  - Category-based organization
    - Documents
    - Images
    - Media
    - Others
  - Advanced file search functionality
  - File sharing with other users

- **User Interface**
  - Clean and modern design
  - Responsive layout for all devices
  - Easy-to-use sidebar navigation

## 🚀 Tech Stack

- **Frontend**
  - Next.js 15
  - React
  - Tailwind CSS
  - TypeScript

- **Backend & Services**
  - Appwrite
    - Authentication
    - Database
    - Storage
    - Realtime updates

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/gaurav23v/store-it
cd store-it
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` with your Appwrite credentials:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_user_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_storage_bucket_id
NEXT_APPWRITE_KEY=your_secret_key
```

5. Run the development server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application running.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🔒 Environment Variables

Make sure to set up the following environment variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Your Appwrite API endpoint |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Your Appwrite project ID |
| `NEXT_PUBLIC_APPWRITE_DATABASE` | Your Appwrite database ID |
| `NEXT_PUBLIC_APPWRITE_USERS_COLLECTION` | Your Appwrite Users Collection ID |
| `NEXT_PUBLIC_APPWRITE_FILES_COLLECTION` | Your Appwrite Files Collection Id |
| `NEXT_PUBLIC_APPWRITE_BUCKET` | Your Appwrite Storage Bucket Id |
| `NEXT_APPWRITE_KEY` | Your Appwrite Secret Key |

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

For any queries or support, please reach out to:
- Email: gaurav2301v@gmail.com
- Twitter: [@StoreItApp](https://twitter.com/gaurav23v)
- GitHub Issues: [Create an issue](https://github.com/gaurav23v/store-it/issues)

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/)
- [Appwrite](https://appwrite.io/)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
