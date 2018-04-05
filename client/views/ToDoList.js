import React, { Component } from 'react'
// import axios from 'axios'
// import moment from 'moment'
// import { ToDoAdd } from '../components/ToDoAdd'
// import { ToDoTable } from '../components/ToDoTable'
import PropTypes from 'prop-types'
import { addToToDoList, updateList, updateAListValue, removeToDo } from '../actions/listActionCreator'
import { updateToDo } from '../actions/toDoActionCreator'
import { connect } from 'react-redux'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  componentWillMount () {
    // axios.get('/todo/').then(response => {
    //   this.props.updateList(response.data)
    //   this.setState({list: response.data})
    // }).catch(err => {
    //   console.log(err)
    // })
  }

  renderLoader () {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
  }
  render () {
    return (
      <div style={{ display: 'flex', flex: 1, height: '100%', width: '100%', alignItems: 'center', flexDirection: 'column', background: 'dodgerblue' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
          <h1 style={{ fontWeight: 200, color: 'white' }}>To-Do list</h1>
        </div>

      </div>
    )
  }
}

ToDoList.propTypes = {
  ToDoState: PropTypes.object,
  ListState: PropTypes.object,
  updateToDo: PropTypes.func,
  addToToDoList: PropTypes.func,
  updateList: PropTypes.func,
  updateAListValue: PropTypes.func,
  removeToDo: PropTypes.func
}

const mapStateToProps = (state, rrProps) => ({
  ToDoState: state.ToDoState,
  ListState: state.ListState
})

const mapDispatchToProps = dispatch => ({
  updateToDo: toDo => {
    dispatch(updateToDo(toDo))
  },
  addToToDoList: toDo => {
    dispatch(addToToDoList(toDo))
  },
  updateList: list => {
    dispatch(updateList(list))
  },
  updateAListValue: toDo => {
    dispatch(updateAListValue(toDo))
  },
  removeToDo: toDo => {
    dispatch(removeToDo(toDo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
