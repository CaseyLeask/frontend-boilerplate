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

  translateText(key) {
    return languageText[this.context.language][key];
  }

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
    const countIndex = this.getCountTextKey(activeCount);
    let countText = this.translateText(countIndex);

    if (countText.indexOf("{count}") > -1) {
      countText = countText.split("{count}");

      countText.splice(1, 0, <strong>{activeCount.toString()}</strong>);
    }

    return (
      <span className={style.count}>
        {countText}
      </span>
    )
  }

  renderFilterLink(filter) {
    const { filter: selectedFilter, onShow } = this.props;
    const titleKey = FILTER_TITLES[filter];

    return (
      <a className={classnames({ [style.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {this.translateText(titleKey)}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;

    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted} >
          {this.translateText('clearCompleted')}
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

export default Footer;
