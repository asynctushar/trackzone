# TrackZone ⏰🌍

A modern event management tool designed to solve the challenges of scheduling across multiple time zones. Create clocks, manage events, and coordinate activities globally with ease.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![MUI](https://img.shields.io/badge/MUI-5-007FFF?style=for-the-badge&logo=mui)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- 🕐 **Multiple Timezone Support** - Create and manage clocks across different time zones
- 📅 **Smart Event Scheduling** - Schedule events with timezone awareness
- 🎯 **Base Clock System** - Manage a primary clock with multiple regional clocks
- 📧 **Contact Integration** - Built-in contact page for user queries
- 🎨 **Clean Interface** - Modern, intuitive design with Material-UI
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🌐 **Informative Pages** - Landing page and supporting documentation

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **UI Library:** [Material-UI (MUI)](https://mui.com/)
- **Date Handling:** [Date-fns](https://date-fns.org/)
- **Language:** JavaScript

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- No environment variables required! 🎉

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asynctushar/trackzone.git
   cd trackzone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173) (Vite's default port)

## 📦 Build for Production

```bash
npm run build
npm run preview
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
trackzone/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── assets/         # Images, fonts, etc
│   ├── contexts/       # Context Api
│   ├── hooks/          # Custom hooks
│   ├── router/         # React router dom
│   ├── theme/          # Theming functionality
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎯 Key Features Explained

### Base Clock with Timezone Support
Create a primary base clock and add multiple timezone clocks to track time across different regions simultaneously.

### Event Management
Schedule events with full timezone awareness. Events automatically adjust based on the selected timezone, preventing scheduling conflicts.

### Clock Management
- Add unlimited clocks for different time zones
- Edit and delete clocks as needed
- Visual representation of time differences
- Real-time clock updates

### Contact Page
Integrated contact form for users to submit queries, feedback, or support requests directly from the application.

## 🎨 Design Philosophy

TrackZone focuses on:
- **Simplicity** - Clean, uncluttered interface
- **Accuracy** - Precise timezone calculations using Date-fns
- **Usability** - Intuitive navigation and clear visual hierarchy
- **Accessibility** - Material-UI components ensure WCAG compliance

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 📚 Usage Guide

### Creating a Clock

1. Navigate to the clocks section
2. Click "Add Clock" or similar button
3. Select a timezone from the dropdown
4. Give your clock a name
5. Save and view your new clock

### Scheduling an Event

1. Go to the events section
2. Click "Create Event"
3. Enter event details (title, description, time)
4. Select the timezone for the event
5. Save - the event will appear in the correct timezone context

### Managing Timezones

The application uses Date-fns for accurate timezone calculations, ensuring events and clocks remain synchronized regardless of the user's local timezone.

## 🌟 Use Cases

- **Remote Teams** - Coordinate meetings across global teams
- **Event Planners** - Schedule international events with precision
- **Digital Nomads** - Track time in multiple locations
- **Global Businesses** - Manage operations across time zones
- **Travel Planning** - Plan activities considering timezone changes

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly before submitting
- Update documentation if adding new features
- Ensure the build passes (`npm run build`)

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/environment details

## 💡 Feature Requests

Have an idea? Open an issue with:
- Detailed description of the feature
- Use case and benefits
- Any relevant examples or mockups

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@asynctushar](https://github.com/asynctushar)
- LinkedIn: [Tushar Biswas](https://linkedin.com/in/asynctushar)
- Portfolio: [asynctushar.vercel.app](https://asynctushar.vercel.app)

## 🙏 Acknowledgments

- Material-UI for the excellent component library
- Date-fns for robust date/time handling
- Vite for blazing fast development experience
- The open-source community for inspiration

## 🔗 Links

- 🌐 **Live Demo:** [View Live Site](https://trackzone-app.vercel.app)
- 🐛 **Issues:** [Report a Bug](https://github.com/asynctushar/trackzone/issues)

---

⭐ **Star this repo if you find it useful!**

📧 **Questions?** Feel free to open an issue or reach out!

🌍 **Manage time zones effortlessly with TrackZone!**

---

Made with ⏰ and ❤️ using React, MUI, and Date-fns