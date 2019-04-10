// Redirects person google account to Colorado account for Google Drive
if (window.location.href.includes('drive.google.com/drive/u/0/'))
  window.location.href = 'https://drive.google.com/drive/u/1/my-drive'

// Redirects person google account to Colorado account for Google Keep
if (window.location.href.includes('https://keep.google.com/u/0/'))
  window.location.href = 'https://keep.google.com/u/1/'
