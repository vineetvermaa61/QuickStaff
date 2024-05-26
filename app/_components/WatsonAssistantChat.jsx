"use client"

import React, { useEffect } from 'react';

const WatsonAssistantChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "17a25020-acba-48ed-9d50-7ae04ce51c6a",
      region: "us-south",
      serviceInstanceID: "32bc50c5-e05a-4266-aff4-85032feac566",
      onLoad: async (instance) => { await instance.render(); }
    };

    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="WatsonAssistantChatContainer" />;
};

export default WatsonAssistantChat;