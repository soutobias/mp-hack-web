import Papa from 'papaparse'

export async function loadAllCsvData(fileNames, setData) {
  // Create an array of promises for each CSV parsing operation
  const promises = fileNames.map(fileName => {
    return new Promise((resolve, reject) => {
      Papa.parse(fileName, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          // Resolve the promise with an object containing the fileName and data
          resolve({ fileName: fileName.slice(0, -4), data: results.data });
        },
        error: (error) => {
          reject(error);  // Reject the promise on error
        }
      });
    });
  });

  try {
    const results = await Promise.all(promises);

    const data = {};
    results.forEach(result => {
      data[result.fileName] = result.data;
    });

    setData(data);
  } catch (error) {
    console.error('Error loading CSV data:', error);
  }
}


export async function loadCsvData(fileName, setData) {
  Papa.parse(fileName, {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (results) => {
      setData(...results.data)
    },
  })
}
