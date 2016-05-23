import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import style from './style.css'

const translatedText = {
  todos: {
    '中文': '待办事项',
    'English': 'Todos'
  },
  placeholder: {
    '中文': '需要做什么？',
    'English': 'What needs to be done?'
  }
};

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  handleLanguage(event) {
    this.props.changeLanguage(event.target.textContent);
  }

  nextLanguage(text) {
    switch(text) {
      case '中文':
        return 'English';

      case 'English':
      default:
        return '中文';
    }
  }

  render() {
    const { language } = this.props;
    return (
      <header>
        <h1 className={style.todos}>{translatedText.todos[language]}</h1>
        <button className={style.language} onClick={::this.handleLanguage}>{this.nextLanguage(language)}</button>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder={translatedText.placeholder[language]} />
      </header>
    )
  }
}

export default Header
