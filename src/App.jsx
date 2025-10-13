import React, { useState } from "react";
import { AlertCircle, Zap, RotateCcw, Loader2 } from "lucide-react";
import ImageUpload from "./components/ImageUpload";
import ResultDisplay from "./components/ResultDisplay";
import { processOCR } from "./utils/api";

function App() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const onRemoveImage = (img) => {
    if (img === "frontImage") {
      setFrontImage(null);
    } else if (img === "backImage") {
      setBackImage(null);
    }
  };

  const handleImageUpload = (type, file) => {
    if (type === "front") {
      setFrontImage(file);
    } else {
      setBackImage(file);
    }
    setError("");
    setResult(null);
  };

  const handleProcessOCR = async () => {
    if (!frontImage || !backImage) {
      setError("Please upload both front and back images");
      return;
    }
    setIsProcessing(true);
    setError("");
    try {
      const response = await processOCR(frontImage, backImage);
      setResult(response.data.data);
      console.log(response.data.data);
      
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error || "Error processing images");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFrontImage(null);
    setBackImage(null);
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl text-indigo-500 font-bold bg-gradient-to-r bg-clip-text text-center">
            Aadhaar Card OCR
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {!result ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-indigo-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Upload Aadhaar Card Images
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <ImageUpload
              setError={setError}
                type="front"
                label="Front Side"
                image={frontImage}
                onImageUpload={handleImageUpload}
                onRemoveImage={onRemoveImage}
              />
              <ImageUpload
              setError={setError}
                type="back"
                label="Back Side"
                image={backImage}
                onImageUpload={handleImageUpload}
                onRemoveImage={onRemoveImage}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={handleProcessOCR}
                disabled={!frontImage || !backImage || isProcessing}
                className={`px-8 py-4 rounded-2xl font-bold text-lg flex items-center mx-auto ${
                  !frontImage || !backImage || isProcessing
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-amber-500 text-black"
                }`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5 mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Extract Information
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-indigo-100">
              <ResultDisplay result={result} />
            </div>

            <div className="text-center">
              <button
                onClick={handleReset}
                className="px-8 py-4 bg-green-700 text-white font-bold text-lg rounded-2xl flex items-center mx-auto"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Process Another Card
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
