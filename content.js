document.addEventListener('mouseup', function (event) {
    let selectedText = window.getSelection().toString().trim();
  
    if (selectedText.length > 0) {
      let existingPopup = document.getElementById('text-counter-popup');
      if (existingPopup) {
        existingPopup.remove();
      }
  
      let popup = document.createElement('div');
      popup.id = 'text-counter-popup';
      popup.style.position = 'absolute';
      popup.style.backgroundColor = '#ffeb3b';
      popup.style.borderRadius = '12px';
      popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      popup.style.padding = '10px 20px';
      popup.style.fontFamily = 'Arial, sans-serif';
      popup.style.fontSize = '16px';
      popup.style.color = '#333';
      popup.style.zIndex = '10000';
      popup.style.transition = 'opacity 0.3s';
      popup.textContent = `選択文字数: ${selectedText.length}`;
      popup.style.left = `${event.pageX + 15}px`;
      popup.style.top = `${event.pageY + 15}px`;
      popup.style.opacity = '0';
  
      document.body.appendChild(popup);
  
      setTimeout(() => {
        popup.style.opacity = '1';
      }, 100);
  
      setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
          popup.remove();
        }, 300);
      }, 3000);
    }
  });
  