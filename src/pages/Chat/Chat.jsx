import React from 'react'
import Layout from '../../components/shared/Layout'

const Chat = () => {

  const chatData = [
    {
      id: 1,
      name: "John Doe",
      message: "Hey, are we still on for tomorrow?",
      time: "10:15 AM",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Got it, thank you!",
      time: "Yesterday",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 9,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 10,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 11,
      name: "Mike Johnson",
      message: "Looking forward to our meeting.",
      time: "2 days ago",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const headerContent = (
    <>
      Chat
    </>
  );

  const mainContent = (
    <div className='space-y-4'>
      {chatData.map((chat) => (
        <div key={chat.id} className="flex items-center space-x-3 border-b pb-3">
          <img src={chat.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="text-gray-900 font-semibold">{chat.name}</h3>
              <span className="text-gray-400 text-xs">{chat.time}</span>
            </div>
            <p className="text-gray-500 text-sm truncate">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );


  return (
    <Layout
      header={headerContent}
      main={mainContent}
    />
  )
}

export default Chat