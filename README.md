# RebootLondonHackathon


This is the repository for the Reboot London Hackathon.

## Team Grogu - Reboot Challenge 2025 Submission

Welcome to **Team Grogu's** submission for the **Reboot Challenge 2025** in London! 🎉

Our concept is a **personalized, Tinder-like swipable application** designed to help colleagues discover and engage with products tailored to their preferences. The app provides a fun and intuitive way to explore options, save favorites, and make decisions effortlessly.

---

## 🌟 Concept

The application allows users to:
- **Swipe left** to discard products they are not interested in.
- **Swipe right** to save products they like.
- View a **stack of personalized product cards** with descriptions and images.
- Enjoy a seamless and engaging user experience.

This app is built with a focus on **personalization** and **ease of use**, making it a perfect tool for colleagues to explore products in an interactive way.

---

## 🛠️ Tech Stack

We used modern web technologies to build this application:
- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Styled Components**: For styling the app with dynamic and reusable components.
- **React Swipeable**: For implementing swipe gestures.
- **Vite**: For fast development and build tooling.
- **Azure Container Apps**: For deployment and hosting.

---

## 🚀 How to Run the Application

Follow these steps to run the application locally:

### 1. Clone the Repository
```bash
git clone
cd Repo
```

### 2. Install Dependencies
Make sure you have **Node.js** installed, then run:
```bash
npm install
```

### 3. Start the Development Server
Run the following command to start the app in development mode:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production
To create a production-ready build, run:
```bash
npm run build
```

### 5. Preview the Production Build
To preview the production build locally, run:
```bash
npm run preview
```

---

## 📦 Deployment

The app is deployed using **Azure Container Apps**. The deployment process includes:
1. Building a Docker image of the app.
2. Pushing the image to **Azure Container Registry (ACR)**.
3. Deploying the image to **Azure Container Apps**.

The deployment workflow is automated using GitHub Actions. See the `.github/workflows/deploy.yml` file for details.

---

## 💡 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Dynamic Swiping**: Cards tilt and become slightly transparent as you swipe.
- **Personalized Experience**: Products are tailored to the user's preferences.
- **Interactive Buttons**: Use "X" and "✔️" buttons to discard or save products.

---

## 🏆 About the Reboot Challenge

The **Reboot Challenge 2025** is an exciting event in London where teams compete to create innovative solutions for real-world problems. Team Grogu is proud to present this app as our submission, showcasing creativity, technical expertise, and a user-first approach.

---

## 👥 Team Grogu

- **Chris Wong** - Engineer
- **David Topping** - Engineer
- **Gemma Riddell** - Engineer
- **Hannah Mowbray** - Team Lead/Engineer
- **Luan Nguyen** - Engineer
- **Matthew Wasylko** - Team Mascot/ Skiver

---

Thank you for exploring our app! We hope you enjoy using it as much as we enjoyed building it. 💚