# Counter & Theme Switcher

A simple React.js application that demonstrates React fundamentals by building a **Counter** and **Theme Switcher** using reusable components.

## 📌 Features

- ➕ Increment Counter
- ➖ Decrement Counter
- 🔄 Reset Counter
- 🌙 Toggle between Light & Dark Theme
- 🧩 Reusable React Components
- 📱 Responsive User Interface


## 📂 Project Structure

counter-theme-switcher/
│── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Counter.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│── public/
│── package.json
│── vite.config.js
│── README.md


## 🛠 Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- HTML5


## 📋 Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or later)
- npm

Check versions:

bash
node -v
npm -v

## 🚀 Installation

### 1. Clone the repository
`bash
git clone https://github.com/your-username/counter-theme-switcher.git


Or download the ZIP and extract it.

### 2. Open the project

bash
cd counter-theme-switcher

### 3. Install dependencies

bash
npm install


### 4. Start the development server

bash
npm run dev


### 5. Open in browser

Vite will display a URL like:


http://localhost:5173/


Open it in your browser.


## 🎯 How to Use

### Counter

- Click **Increment** to increase the count.
- Click **Decrement** to decrease the count.
- Click **Reset** to set the counter back to **0**.

### Theme Switcher

- Click the **Toggle Theme** button.
- Switch between:
  - ☀️ Light Mode
  - 🌙 Dark Mode

## 📖 Components

### App.jsx

- Main application component.
- Stores theme state.
- Renders Counter and ThemeToggle.

### Counter.jsx

- Displays the counter value.
- Handles Increment, Decrement, and Reset actions.

### Button.jsx

- Reusable button component.
- Used throughout the application.

### ThemeToggle.jsx

- Changes the application's theme.
- Updates the UI dynamically.


## 📸 Output

### Light Theme

- White background
- Dark text

### Dark Theme

- Dark background
- White text

---

## 📚 React Concepts Used

- Functional Components
- JSX
- Props
- State (`useState`)
- Event Handling
- Conditional Rendering
- Component Reusability


## 🖥 Available Scripts

Install dependencies:

bash
npm install

Run development server:

bash
npm run dev

Create production build:

bash
npm run build

Preview production build:

bash
npm run preview

## 🔮 Future Improvements

- Save theme preference using Local Storage.
- Keyboard shortcuts.
- Animated counter.
- Multiple color themes.
- Custom increment value.
- Counter history.
- Responsive animations.

## 👨‍💻 Author

**Nayan Dethe**

React.js Practice Project

## 📄 License

This project is created for learning and educational purposes.