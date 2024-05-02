import React, { useState, useEffect } from 'react';

export function ExternalHtml() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sgrieve/mp-hack/dashboard/dashboard/dashboard.html')
      .then(response => response.text())
      .then(data => {
        setHtmlContent(data);
      })
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
