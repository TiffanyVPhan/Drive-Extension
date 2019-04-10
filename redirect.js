// Redirects person google account to Colorado account for Google Drive
if (window.location.href.includes('drive.google.com/drive/u/0/'))
  window.location.href = 'https://drive.google.com/drive/u/1/my-drive'

// Redirects person google account to Colorado account for Google Keep
if (window.location.href.includes('https://keep.google.com/u/0/'))
  window.location.href = 'https://keep.google.com/u/1/'

if (window.location.href.includes('https://www.google.com/'))
  window.location.href = 'https://www.google.com/webhp?authuser=1'

if (window.location.href.includes('https://calendar.google.com/calendar/'))
  window.location.href = 'https://calendar.google.com/calendar/b/1/r?tab=wc&pli=1&t=AKUaPma0YJ4lOXffVhPRRaEwh0OmSx-BDtlfYZ66AM_M_-avNs6ElY-ZN7ILBG_P3uLSCUe2WGgWJrzDzEno8lFrQB-Z-Hc-Mw%3D%3D'
