import { reduxForm, Field } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import React from 'react';

import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker';

class AddChoreForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    open: false,
    date: null,
    time: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
  };

  handleTime(event, time){
    this.setState({time: time})
  }
  handleDate(event, date){
    this.setState({date: date})
  }
  handleSubmit(){
    const newChore = {
      name: this.refs.name.value,
      end_time: this.state.date,
      category: "chore",
    }

    this.refs.name.getRenderedComponent().props.input.onChange("");
    this.handleClose()
    this.props.actions.addEvent(newChore)
  }


  handleOpen = () => {
    this.setState({open: true});
  };


  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        type='submit'
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
      <IconButton tooltip="Add Chore" onTouchTap={this.handleOpen}>
        <Add color={"#FFF"}/>
      </IconButton>
      <Dialog
        title="Add a Chore"
        actions={actions}
        modal={true}
        open={this.state.open}>
        <form>
          <Field withRef={true} ref="name" name="name" component={TextField} hintText="What chore needs to be completed?" />
         <Field withRef={true} ref="date" name="date" component={DatePicker} onChange={this.handleDate} hintText="Date deadline" />
          <Field withRef={true} ref="time" name="time" component={        TimePicker} onChange={this.handleDate} hintText="Time deadline" />
        </form>
      </Dialog>
      </div>
    )
  }
}

AddChoreForm = reduxForm({
  form: 'AddChoreForm'
})(AddChoreForm)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(AddChoreForm);




// import React from 'react';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import IconButton from 'material-ui/IconButton';
// import Add from 'material-ui/svg-icons/content/add'
// import ChoresForm from './chores_form'
// import { connect } from 'react-redux'
// import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form'
// import TextField from 'material-ui/TextField';
//
// export const fields = [
//   'name'
// ]
//
// class AddChoreForm extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//     open: false,
//     value: ""
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this)
//
//     this.inputHandler = this.inputHandler.bind(this)
//   };
//
//   handleOpen = () => {
//     this.setState({open: true});
//   };
//
//   handleClose = () => {
//     this.setState({open: false});
//   };
//
//   handleSubmit(event) {
//     debugger;
//     this.handleClose()
//   }
//
//   inputHandler(event){
//     this.setState({value: event.target.value});
//   }
//
//   render() {
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onTouchTap={this.handleClose}
//       />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         type='submit'
//         onTouchTap={this.handleSubmit}
//       />,
//     ];
//
//     const {handleSubmit} = this.props;
//
//     return (
//       <div>
//         <IconButton tooltip="Add Chore" onTouchTap={this.handleOpen}>
//           <Add color={"#FFF"}/>
//         </IconButton>
//         <Dialog
//           title="Add a Chore"
//           actions={actions}
//           modal={true}
//           open={this.state.open}>
//           <form>
//             <Field name="name" ref="name" withRef={true} component={name => <TextField {...name} hintText = "Chore" />}/>
//           </form>
//         </Dialog>
//       </div>
//     );
//   }
// }
//
//
// AddChoreForm = reduxForm({
//   form: 'newChore',
//   fields: ''
// })(AddChoreForm)
//
// const selector = formValueSelector('new-chore')
// AddChoreForm = connect(
//   state => {
//     // can select values individually
//     // const nameValue = selector(state, 'name')
//     return {
//
//     }
//   }
// )(AddChoreForm)
//
//
// export default AddChoreForm;
