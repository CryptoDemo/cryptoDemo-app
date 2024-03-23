// fetchWorker.js
self.addEventListener('message', async (event) => {
  
    const { symbol } = event.data;

    console.log(symbol)
    
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${symbol}`, {
        headers: { 'Accept': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch symbol price');
      }
      
      const data = await response.json();
      self.postMessage(data);
      
    } catch (error) {
      console.error('Error fetching symbol price:', error);
      self.postMessage({ error: error.message });
    }

  });
  
