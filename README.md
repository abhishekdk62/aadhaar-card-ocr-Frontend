# Aadhaar OCR Frontend

A React-based web application for extracting information from Aadhaar card images using OCR technology[web:67][web:70].

## Features

- Upload front and back Aadhaar images
- Real-time OCR processing
- Extract Aadhaar number, name, DOB, gender, and address
- Clean and responsive UI with Tailwind CSS
- Copy extracted text to clipboard
- Image preview before processing

## Tech Stack

- React
- Tailwind CSS
- Lucide React (icons)
- Axios (API calls)

## Installation

npm install


## Run Application

npm run dev


App runs on `http://localhost:5173` (or your configured port)

## Project Structure

src/
├── components/
│ ├── ImageUpload.jsx # Image upload component
│ └── ResultDisplay.jsx # Display extracted results
├── utils/
│ └── api.js # API call functions
└── App.jsx # Main application


## How It Works

1. User uploads front and back Aadhaar images
2. Images are sent to backend API for OCR processing
3. API extracts text and specific fields (name, DOB, etc.)
4. Results are displayed in a clean, organized format
5. Users can view raw text and copy to clipboard

## Backend Required

This frontend requires the backend API to be running. Make sure the backend server is running on `http://localhost:5000` (or update API URL in `utils/api.js`)

## Usage

1. Click on upload areas to select front and back images
2. Click "Extract Information" button
3. View extracted data in organized cards
4. Click "Process Another Card" to start over

## API Endpoint Used

**POST** `/api/ocr/process`
- Sends both images as multipart/form-data
- Receives extracted text and parsed information

## Dependencies

{
"react": "^18.x",
"axios": "^1.x",
"lucide-react": "^0.x",
"tailwindcss": "^3.x"
}

text

## Screenshots

Upload screen with drag-and-drop interface and extracted information display with organized data cards.

