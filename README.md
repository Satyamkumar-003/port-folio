# Satyam Kumar - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and achievements.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Sections**: Home, About, Skills, Projects, Education, Certifications, and Contact
- **Contact Form**: Functional contact form for easy communication
- **Smooth Scrolling**: Seamless navigation between sections
- **Social Links**: Direct links to GitHub, LinkedIn, and other profiles

## 📋 Sections

1. **Home**: Hero section with introduction and key statistics
2. **About**: Personal background, academic journey, and contact details
3. **Skills**: Technical competencies with progress bars and interpersonal skills
4. **Projects**: Showcase of projects with technologies used and features
5. **Education**: Academic timeline and achievements
6. **Certifications**: Professional certifications with descriptions
7. **Contact**: Contact form and contact information

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **React Router**: Navigation
- **React Icons**: Icon library
- **CSS3**: Styling with modern features
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd satyam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Customization Guide

### 1. Personal Information
Update your personal details in the following files:
- `src/components/Home.js` - Hero section content
- `src/components/About.js` - Personal information and background
- `src/components/Contact.js` - Contact details

### 2. Projects
Update your projects in `src/components/Projects.js`:
```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    duration: "2 weeks",
    teamSize: "Individual",
    environment: "Windows",
    features: [
      "Feature 1",
      "Feature 2"
    ],
    githubLink: "https://github.com/your-repo",
    liveLink: "https://your-demo-link.com"
  }
];
```

### 3. Skills
Update your skills in `src/components/Skills.js`:
```javascript
const technicalSkills = [
  { name: 'React.js', level: 85 },
  { name: 'JavaScript', level: 80 }
];
```

### 4. Education
Update your education details in `src/components/Education.js`:
```javascript
const education = [
  {
    degree: "Your Degree",
    institution: "Your Institution",
    session: "2022-2026",
    score: "8.5 CGPA",
    type: "current"
  }
];
```

### 5. Certifications
Update your certifications in `src/components/Certifications.js`:
```javascript
const certifications = [
  {
    title: "Certification Title",
    issuer: "Issuing Organization",
    year: "2024",
    description: "Certification description",
    image: "cert-image.jpg",
    link: "https://certificate-link.com"
  }
];
```

### 6. Certificate Images
To add certificate images:
1. Place your certificate images in the `public` folder
2. Update the `image` property in `src/components/Certifications.js`
3. Uncomment the image tag in the component

### 7. Project Images
To add project images:
1. Place your project images in the `public` folder
2. Update the `image` property in `src/components/Projects.js`
3. Replace the placeholder with actual images

### 8. Profile Image
To add your profile image:
1. Place your profile image in the `public` folder
2. Update the profile image in `src/components/Home.js`

### 9. Styling
Customize colors and styling in:
- `src/index.css` - Global styles
- Individual component CSS files for specific styling

## 🎨 Color Scheme

The portfolio uses a modern color scheme:
- **Primary**: #667eea (Blue gradient)
- **Secondary**: #764ba2 (Purple gradient)
- **Accent**: #ffd700 (Gold)
- **Text**: #2c3e50 (Dark gray)
- **Background**: #f8f9fa (Light gray)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure your domain

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your changes

## 📞 Contact Form

The contact form is currently set up to show an alert. To make it functional:

1. **EmailJS Integration**:
   ```bash
   npm install emailjs-com
   ```
   
2. **Update Contact.js**:
   ```javascript
   import emailjs from 'emailjs-com';
   
   const handleSubmit = (e) => {
     e.preventDefault();
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
       .then((result) => {
         alert('Message sent successfully!');
       }, (error) => {
         alert('Failed to send message.');
       });
   };
   ```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Note**: Remember to update all placeholder links and images with your actual content before deploying your portfolio. 