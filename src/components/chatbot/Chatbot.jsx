import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.src = 'https://app.engati.com/static/js/widget.js?config=' + encodeURIComponent(JSON.stringify({
      bot_key: '0ad524c296e84cc8',
      welcome_msg: true,
      branding_key: 'default',
      server: 'https://app.engati.com',
      e: 'p'
    }));

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chatbot container */}
      <div id="engatiChatbotContainer" />
    </div>
  );
};

export default Chatbot;