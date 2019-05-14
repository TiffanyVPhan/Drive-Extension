// Redirects personal google account to Colorado account for Google Drive
if (window.location.href.includes('drive.google.com/drive/u/0/'))
  window.location.href = 'https://drive.google.com/drive/u/1/my-drive'

// Redirects personal google account to Colorado account for Google Keep
if (window.location.href.includes('https://keep.google.com/u/0/'))
  window.location.href = 'https://keep.google.com/u/1/'

// Google
if (window.location.href === 'https://www.google.com/')
  window.location.href = 'https://www.google.com/webhp?authuser=1'


// Google Photos
if (window.location.href === 'https://photos.google.com/')
  window.location.href = ('https://photos.google.com/u/1/')

// // Google Calender
// if (window.location.href === 'https://calendar.google.com/calendar/r?pli=1&t=AKUaPmbCziQn7eIAI-DEVooX07GcwK7-g1_znKIgsiIcKPG70MlqHJx3iZzGxIEXsjP_ZQwtFrRlSKS96LQXVmkJ5lN6y6JMUw%3D%3D')
//   window.location.href = 'https://calendar.google.com/calendar/b/1/r?pli=1&t=AKUaPmbCziQn7eIAI-DEVooX07GcwK7-g1_znKIgsiIcKPG70MlqHJx3iZzGxIEXsjP_ZQwtFrRlSKS96LQXVmkJ5lN6y6JMUw%3D%3D'
