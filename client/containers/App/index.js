
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import * as LanguageActions from '../../actions/languages'
import style from './style.css'

class App extends Component {
  render() {
    const { todos, actions, language, children } = this.props
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} changeLanguage={actions.changeLanguage} language={language} />
        <MainSection todos={todos} actions={actions} language={language} />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    language: state.language
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...TodoActions, ...LanguageActions}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
