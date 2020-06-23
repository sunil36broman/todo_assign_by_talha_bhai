import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { updateTransaction } from '../../store/actions/transactionActions'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
        transform: 'translate(-50%, -50%)',
      width: '500px'
    }
  };


class UpdateTransaction extends React.Component {

    state = {
        userId: 0,
        title: '',
        body: ''
    }

    componentDidMount() {
        this.setState({
            id: this.props.transaction.id,
            userId: this.props.transaction.userId,
            title: this.props.transaction.title,
            body: this.props.transaction.body
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        console.log("upddd")
        console.log(this.state)
        event.preventDefault()
        this.props.updateTransaction(this.props.transaction.id, this.state)
        this.props.close()
    }

    render() {
        let { userId, title, body } = this.state
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
                style={customStyles}
                contentLabel='Create A New Transaction'
            >
                <h2>update Transaction</h2>
                <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <label htmlFor='userId'> userId: </label>
                            <input
                                type="number"
                                className='form-control'
                                placeholder="Enter userId"
                                name='userId'
                                id='userId'
                                value={userId}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='title'> title: </label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder="Enter title"
                                name='title'
                                id='title'
                                value={title}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='body'> body: </label>
                            <textarea
                                className='form-control'
                                placeholder="Enter a body"
                                name='body'
                                id='body'
                                value={body}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Modal>
        )
    }
}

export default connect(null, { updateTransaction })(UpdateTransaction)

// amount
// Type
// Note