import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import style from './style.css'

const translatedText = {
  todos: {
    'zh': '待办事项',
    'en': 'Todos'
  },
  placeholder: {
    'zh': '需要做什么？',
    'en': 'What needs to be done?'
  }
};

class Header extends Component {
  static contextTypes = {
    language: React.PropTypes.string.isRequired
  };

  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  handleLanguage(event) {
    this.props.changeLanguage(event.target.value);
  }

  nextLanguage(text) {
    switch(text) {
      case 'zh':
        return {
          display: 'English',
          value:   'en'
        };

      case 'en':
      default:
        return {
          display: '中文',
          value:   'zh'
        };
    }
  }

  render() {
    const { language } = this.context;
    return (
      <header>
        <h1 className={style.todos}>{translatedText.todos[language]}</h1>
        <button className={style.language}
                onClick={::this.handleLanguage}
                value={this.nextLanguage(language).value}>
          {this.nextLanguage(language).display}
        </button>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder={translatedText.placeholder[language]} />
      </header>
    )
  }
}

export default Header
