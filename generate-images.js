const fs = require('fs');
const { createCanvas } = require('canvas');

// Check if public/images directory exists, create if not
if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

function generateImage(filename, width, height, bgColor, text, textColor = 'white') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add some basic golf design elements
  ctx.fillStyle = '#ffffff33';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Text
  ctx.fillStyle = textColor;
  ctx.font = `bold ${Math.floor(width/15)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Club type in smaller text
  ctx.font = `${Math.floor(width/25)}px Arial`;
  ctx.fillText('Golf Club Rental', width / 2, height / 2 + 40);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/images/${filename}`, buffer);
  console.log(`Generated: public/images/${filename}`);
}

// Generate hero image
generateImage('golf-hero.jpg', 1200, 600, '#264653', 'Premium Golf Clubs');

// Generate club images
const clubs = [
  { name: 'TaylorMade Driver', color: '#2a9d8f' },
  { name: 'Callaway Irons', color: '#e9c46a' },
  { name: 'Scotty Cameron Putter', color: '#f4a261' },
  { name: 'Ping Hybrid', color: '#e76f51' },
  { name: 'Titleist Wedges', color: '#006d77' },
  { name: 'Complete Set', color: '#219ebc' },
];

clubs.forEach((club, index) => {
  const clubNum = index + 1;
  // Primary image
  generateImage(`club${clubNum}-1.jpg`, 600, 400, club.color, club.name);
  
  // Secondary image
  if (clubNum <= 3 || clubNum > 4) {
    generateImage(`club${clubNum}-2.jpg`, 600, 400, club.color, club.name, '#eeeeee');
  }
  
  // Tertiary image for first club
  if (clubNum === 1) {
    generateImage(`club${clubNum}-3.jpg`, 600, 400, club.color, club.name, '#333333');
  }
});

// Generate user image
generateImage('user.jpg', 400, 400, '#6d597a', 'JS', '#ffffff');

console.log('All images generated successfully!'); 