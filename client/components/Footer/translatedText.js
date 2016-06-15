
import React, { Component } from 'react'

const translatedText = {
  showAll: {
    '中文': '所有',
    'English': 'All'
  },
  showActive: {
    '中文': '活性',
    'English': 'Active'
  },
  showCompleted: {
    '中文': '完成',
    'English': 'Completed'
  },
  clearCompleted: {
    '中文': '清除已完成',
    'English': 'Clear Completed'
  },
  todoCount: {
    '中文': function(count) {
      switch(count) {
        case 0:
          return [<strong>0</strong>, '物品离开'];
        case 1:
          return ['还剩', <strong>1</strong>, '个项目'];
        default:
          return [<strong>{count}</strong>, '项左'];
      }
    },
    'English': function(count) {
      switch(count) {
        case 0:
          return [<strong>No</strong>, ' items left'];
        case 1:
          return [<strong>1</strong>, ' item left'];
        default:
          return [<strong>{count}</strong>, ' items left'];
      }
    }
  }
};

export default translatedText;
