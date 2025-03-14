import React from 'react';
import './DownloadButton.css';

function DownloadButton() {
  // Simulação de download de arquivo
  const handleDownload = () => {
    // Em um cenário real, você teria um link para o arquivo real
    alert('O download do currículo começaria agora em um cenário real!');
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download resumo
    </button>
  );
}

export default DownloadButton;