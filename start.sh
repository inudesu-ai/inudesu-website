#!/bin/bash

# inudesu Website - Quick Start Script

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  inudesu Website - Development Server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install --legacy-peer-deps
  echo ""
fi

# Check which command was passed
if [ "$1" == "prod" ]; then
  echo "🔨 Building for production..."
  npm run build
  echo ""
  echo "✅ Production build complete!"
  echo "📂 Output directory: .next/"
  echo ""
  echo "To run production server:"
  echo "  npm start"
else
  echo "🚀 Starting development server..."
  echo "   Open: http://localhost:3000"
  echo ""
  echo "Press Ctrl+C to stop the server"
  echo ""
  npm run dev
fi
