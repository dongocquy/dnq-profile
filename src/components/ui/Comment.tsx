'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMessageSquare, FiHeart, FiShare2, FiMoreVertical, FiEdit3, FiTrash2 } from 'react-icons/fi';

interface CommentData {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: CommentData[];
}

interface CommentProps {
  comment: CommentData;
  onLike?: (id: string) => void;
  onReply?: (id: string) => void;
  onEdit?: (id: string, content: string) => void;
  onDelete?: (id: string) => void;
  isReply?: boolean;
}

export default function Comment({ 
  comment, 
  onLike, 
  onReply, 
  onEdit, 
  onDelete, 
  isReply = false 
}: CommentProps) {
  const [showActions, setShowActions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const handleLike = () => {
    if (onLike) {
      onLike(comment.id);
    }
  };

  const handleReply = () => {
    if (onReply) {
      onReply(comment.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowActions(false);
  };

  const handleSaveEdit = () => {
    if (onEdit) {
      onEdit(comment.id, editContent);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditContent(comment.content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(comment.id);
    }
    setShowActions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative ${isReply ? 'ml-8 border-l-2 border-gray-700/50 pl-4' : ''}`}
    >
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60   rounded-xl p-4 mb-4 transition-all duration-300  hover:shadow-lg hover:shadow-yellow-400/10">
        {/* Comment Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
              {comment.avatar || comment.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="font-medium text-white">{comment.author}</h4>
              <p className="text-xs text-gray-400">{comment.timestamp}</p>
            </div>
          </div>
          
          {/* Actions Menu */}
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FiMoreVertical className="w-4 h-4" />
            </button>
            
            {showActions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-0 top-8 bg-white/20   rounded-lg shadow-xl z-10 min-w-[120px]"
              >
                <button
                  onClick={handleEdit}
                  className="w-full px-3 py-2 text-left text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/10 flex items-center space-x-2 transition-colors duration-200"
                >
                  <FiEdit3 className="w-3 h-3" />
                  <span>Chỉnh sửa</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full px-3 py-2 text-left text-sm text-gray-300 hover:text-red-400 hover:bg-white/10 flex items-center space-x-2 transition-colors duration-200"
                >
                  <FiTrash2 className="w-3 h-3" />
                  <span>Xóa</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Comment Content */}
        {isEditing ? (
          <div className="space-y-3">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full px-3 py-2  rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50  transition-all duration-300 resize-none"
              rows={3}
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSaveEdit}
                className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 text-sm font-medium rounded-lg hover:from-yellow-500 hover:to-purple-600 transition-all duration-300"
              >
                Lưu
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-3 py-1 bg-white/10 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-600/50 transition-all duration-300"
              >
                Hủy
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 leading-relaxed">{comment.content}</p>
        )}

        {/* Comment Actions */}
        {!isEditing && (
          <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-700/30">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 text-sm transition-all duration-200 ${
                comment.isLiked 
                  ? 'text-red-400 hover:text-red-300' 
                  : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <FiHeart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
              <span>{comment.likes}</span>
            </button>
            
            <button
              onClick={handleReply}
              className="flex items-center space-x-1 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <FiMessageSquare className="w-4 h-4" />
              <span>Trả lời</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <FiShare2 className="w-4 h-4" />
              <span>Chia sẻ</span>
            </button>
          </div>
        )}

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-2">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onLike={onLike}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              isReply={true}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Comment Section Component
interface CommentSectionProps {
  comments: CommentData[];
  onAddComment?: (content: string) => void;
  onLike?: (id: string) => void;
  onReply?: (id: string) => void;
  onEdit?: (id: string, content: string) => void;
  onDelete?: (id: string) => void;
}

export function CommentSection({ 
  comments, 
  onAddComment, 
  onLike, 
  onReply, 
  onEdit, 
  onDelete 
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !onAddComment) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    
    onAddComment(newComment);
    setNewComment('');
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      {/* Add Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60   rounded-xl p-6"
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
            <FiUser className="w-5 h-5 text-gray-900" />
          </div>
          <h3 className="text-lg font-semibold text-white">Thêm bình luận</h3>
        </div>
        
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận của bạn..."
            className="w-full px-4 py-3  rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50  transition-all duration-300 resize-none"
            rows={4}
            required
          />
          
          <div className="flex justify-end">
            <motion.button
              type="submit"
              disabled={isSubmitting || !newComment.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Đang gửi...</span>
                </>
              ) : (
                <>
                  <FiMessageSquare className="w-4 h-4" />
                  <span>Gửi bình luận</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-gray-400"
          >
            <FiMessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Chưa có bình luận nào. Hãy là người đầu tiên!</p>
          </motion.div>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onLike={onLike}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
