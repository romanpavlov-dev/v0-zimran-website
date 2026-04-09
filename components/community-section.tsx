"use client";

import { useState } from "react";
import { MessageSquare, Send, User, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Reply {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  isStaff?: boolean;
}

interface Post {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  type: "question" | "feature" | "complaint";
  replies: Reply[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    username: "TradingNewbie",
    message: "Is there a way to set up recurring investments? I want to automatically buy ETFs every month but can't find the option anywhere.",
    timestamp: "2 hours ago",
    type: "question",
    replies: [
      {
        id: 101,
        username: "Finelo Support",
        message: "Great question! You can set up recurring investments by going to Portfolio > Automation > Create Schedule. Let us know if you need more help!",
        timestamp: "1 hour ago",
        isStaff: true,
      },
    ],
  },
  {
    id: 2,
    username: "ProTrader99",
    message: "Feature request: It would be amazing to have dark mode for the mobile app. Trading late at night with the bright screen is tough on the eyes.",
    timestamp: "5 hours ago",
    type: "feature",
    replies: [],
  },
  {
    id: 3,
    username: "FrustratedUser",
    message: "My withdrawal has been pending for 3 days now. This is unacceptable! I've submitted two tickets already with no response.",
    timestamp: "1 day ago",
    type: "complaint",
    replies: [
      {
        id: 301,
        username: "Finelo Support",
        message: "We sincerely apologize for the delay. We've escalated your case and a senior team member will reach out within 24 hours. Your patience is greatly appreciated.",
        timestamp: "20 hours ago",
        isStaff: true,
      },
      {
        id: 302,
        username: "FrustratedUser",
        message: "Thank you for the quick response here. I received an email and it's being processed now.",
        timestamp: "18 hours ago",
      },
    ],
  },
  {
    id: 4,
    username: "CryptoKing",
    message: "Love the new portfolio analytics feature! The breakdown by sector is exactly what I needed. Any plans to add more detailed crypto analytics?",
    timestamp: "2 days ago",
    type: "question",
    replies: [],
  },
];

const typeColors = {
  question: { bg: "bg-blue-100", text: "text-blue-700", label: "Question" },
  feature: { bg: "bg-green-100", text: "text-green-700", label: "Feature Request" },
  complaint: { bg: "bg-red-100", text: "text-red-700", label: "Complaint" },
};

export function CommunitySection() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostName, setNewPostName] = useState("");
  const [newPostMessage, setNewPostMessage] = useState("");
  const [expandedPosts, setExpandedPosts] = useState<number[]>([1, 3]); // Default expanded
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyName, setReplyName] = useState("");
  const [replyMessage, setReplyMessage] = useState("");

  const handleSubmitPost = () => {
    if (!newPostName.trim() || !newPostMessage.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      username: newPostName,
      message: newPostMessage,
      timestamp: "Just now",
      type: "question",
      replies: [],
    };

    setPosts([newPost, ...posts]);
    setNewPostName("");
    setNewPostMessage("");
  };

  const handleSubmitReply = (postId: number) => {
    if (!replyName.trim() || !replyMessage.trim()) return;

    const newReply: Reply = {
      id: Date.now(),
      username: replyName,
      message: replyMessage,
      timestamp: "Just now",
    };

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, newReply] }
        : post
    ));

    setReplyingTo(null);
    setReplyName("");
    setReplyMessage("");
    
    // Expand the post to show the new reply
    if (!expandedPosts.includes(postId)) {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  const toggleExpanded = (postId: number) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E6FFF]/10 text-[#1E6FFF] text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4" />
              Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Join the Conversation
            </h2>
            <p className="text-muted-foreground text-lg">
              Ask questions, share feedback, and connect with other Finelo users
            </p>
          </div>

          {/* Post Form */}
          <div className="bg-[#F4F6FA] rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Start a Discussion</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newPostName}
                  onChange={(e) => setNewPostName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-[#1E6FFF]/30 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  value={newPostMessage}
                  onChange={(e) => setNewPostMessage(e.target.value)}
                  placeholder="Ask a question, share feedback, or report an issue..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-[#1E6FFF]/30 text-sm resize-none"
                />
              </div>
              <Button
                onClick={handleSubmitPost}
                disabled={!newPostName.trim() || !newPostMessage.trim()}
                className="rounded-full px-6 py-5 bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Post
              </Button>
            </div>
          </div>

          {/* Discussion Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
              >
                {/* Post Header */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1E6FFF]/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-[#1E6FFF]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{post.username}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.timestamp}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[post.type].bg} ${typeColors[post.type].text}`}>
                      {typeColors[post.type].label}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">{post.message}</p>
                </div>

                {/* Replies Section */}
                {post.replies.length > 0 && (
                  <div className="border-t border-border">
                    <button
                      onClick={() => toggleExpanded(post.id)}
                      className="w-full px-5 py-3 flex items-center justify-between text-sm text-muted-foreground hover:bg-[#F4F6FA] transition-colors"
                    >
                      <span>{post.replies.length} {post.replies.length === 1 ? 'reply' : 'replies'}</span>
                      {expandedPosts.includes(post.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedPosts.includes(post.id) && (
                      <div className="px-5 pb-4 space-y-3">
                        {post.replies.map((reply) => (
                          <div 
                            key={reply.id} 
                            className={`p-4 rounded-xl ${reply.isStaff ? 'bg-[#1E6FFF]/5 border border-[#1E6FFF]/20' : 'bg-[#F4F6FA]'}`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${reply.isStaff ? 'bg-[#1E6FFF]' : 'bg-muted'}`}>
                                <User className={`w-3.5 h-3.5 ${reply.isStaff ? 'text-white' : 'text-muted-foreground'}`} />
                              </div>
                              <span className={`font-semibold text-sm ${reply.isStaff ? 'text-[#1E6FFF]' : 'text-foreground'}`}>
                                {reply.username}
                                {reply.isStaff && (
                                  <span className="ml-2 px-2 py-0.5 rounded-full bg-[#1E6FFF] text-white text-xs">Staff</span>
                                )}
                              </span>
                              <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed">{reply.message}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Reply Form */}
                {replyingTo === post.id ? (
                  <div className="border-t border-border p-4 bg-[#F4F6FA]">
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={replyName}
                        onChange={(e) => setReplyName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-[#1E6FFF]/30 text-sm"
                      />
                      <textarea
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        placeholder="Write a reply..."
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-xl bg-white text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-[#1E6FFF]/30 text-sm resize-none"
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleSubmitReply(post.id)}
                          disabled={!replyName.trim() || !replyMessage.trim()}
                          size="sm"
                          className="rounded-full bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white"
                        >
                          Submit Reply
                        </Button>
                        <Button
                          onClick={() => setReplyingTo(null)}
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-border px-5 py-3">
                    <button
                      onClick={() => setReplyingTo(post.id)}
                      className="text-sm text-[#1E6FFF] font-medium hover:underline flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
