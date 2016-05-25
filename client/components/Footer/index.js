
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'

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

const FILTER_TITLES = {
  [SHOW_ALL]: translatedText.showAll,
  [SHOW_ACTIVE]: translatedText.showActive,
  [SHOW_COMPLETED]: translatedText.showCompleted
};

class Footer extends Component {
  static contextTypes = {
    language: React.PropTypes.string.isRequired
  };

  renderTodoCount() {
    const { activeCount } = this.props;
    const { language } = this.context;

    return (
      <span className={style.count}>
        {translatedText.todoCount[language](activeCount)}
      </span>
    )
  }

  renderFilterLink(filter) {
    const { filter: selectedFilter, onShow } = this.props;
    const { language } = this.context;

    const title = FILTER_TITLES[filter][language];

    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

export default Footer
