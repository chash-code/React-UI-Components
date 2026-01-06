# Masai Assessment - React UI Components

This project demonstrates the integration of external UI components (Shadcn/UI) in a React application.

## Features

### 1. Feedback Form App
- Collects Name, Email, and Feedback using Card, Input, Textarea, and Button components
- Displays submitted data below the form

### 2. Image Slideshow App
- Shows 3 images with placeholder support
- Uses Card, Button, and Tabs/Carousel components
- Next and Previous navigation buttons change the displayed image

### 3. Todo List App
- Add todos using Input, Button, Card, and Checkbox components
- Mark todos as complete
- Displays todos in a list below the input

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd masai-assessment

# Install dependencies
npm install

# Run development server
npm run dev
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Shadcn/UI Components
- Radix UI Primitives

## Project Structure

```
src/
├── App.jsx              # Main application with all 3 apps
├── main.jsx             # React entry point
├── index.css            # Tailwind CSS imports
├── components/ui/       # Shadcn/UI components
│   ├── card.jsx
│   ├── input.jsx
│   ├── textarea.jsx
│   ├── button.jsx
│   ├── checkbox.jsx
│   └── tabs.jsx
└── lib/
    └── utils.js         # Utility functions
```

## Submission

Submit the root directory GitHub repo link.
```
