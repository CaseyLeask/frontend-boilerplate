import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'
import languageText from './languageText.json'

const FILTER_TITLES = {
  [SHOW_ALL]: 'showAll',
  [SHOW_ACTIVE]: 'showActive',
  [SHOW_COMPLETED]: 'showCompleted'
};

class Footer extends Component {
  static contextTypes = {
    language: React.PropTypes.string.isRequired
  };

  getCountTextKey(count) {
    switch(count) {
      case 0:
        return "todoCount0";
      case 1:
        return "todoCount1";
      default:
        return "todoCounts";
    }
  }

  renderTodoCount() {
    const { activeCount } = this.props;
    const { language } = this.context;
    const countIndex = this.getCountTextKey(activeCount);
    let countText;

    if (languageText[language][countIndex].indexOf("{count}") > -1) {
      countText = languageText[language][countIndex].split("{count}");

      countText.splice(1, 0, <strong>{activeCount.toString()}</strong>);
    } else {
      countText = languageText[language][countIndex];
    }

    return (
      <span className={style.count}>
        {countText}
      </span>
    )
  }

  renderFilterLink(filter) {
    const { filter: selectedFilter, onShow } = this.props;
    const { language } = this.context;

    const titleKey = FILTER_TITLES[filter];

    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {languageText[language][titleKey]}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    const { language } = this.context;

    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted} >
          {languageText[language].clearCompleted}
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
