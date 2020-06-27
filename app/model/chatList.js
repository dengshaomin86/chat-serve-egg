'use strict';

// 聊天列表
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ChatListSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    userId: {
      type: String,
      required: true,
    },
    // 即 chatId 的集合
    list: {
      type: Array,
      default: () => []
    }
  });
  return mongoose.model('ChatList', ChatListSchema);
};
