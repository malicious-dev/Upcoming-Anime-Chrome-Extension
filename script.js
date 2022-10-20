async function fetchData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '82d99102dbmsh4168da5803cb342p12dfc7jsn872f0c992c10',
      'X-RapidAPI-Host': 'anime-release.p.rapidapi.com'
    }
  };
  
  const check = await fetch('https://anime-release.p.rapidapi.com/anime', options)
    const checkdetails = await check.json()
    const details = checkdetails.map(item => `<li>${item.title}</li>`).join(' ')
    const result = document.getElementById('loading');
    result.innerHTML = details;
  }

fetchData()