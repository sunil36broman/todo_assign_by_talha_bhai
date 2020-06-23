import React from "react";
import { connect } from "react-redux";
import {
  loadTransactions,
  removeTransaction,
} from "../store/actions/transactionActions";
import CreateTransaction from "../components/transaction/CrerateTransaction";
import UpdateTransaction from "../components/transaction/UpdateTransaction";

class Dashboard extends React.Component {
  state = {
    createModalOpen: false,
    updateModalOpen: false,
    id: "",
  };

  openCreateModal = () => {
    this.setState({
      createModalOpen: true,
    });
  };

  closeCreateModal = () => {
    this.setState({
      createModalOpen: false,
    });
  };

  openUpdateModal = (id) => {
    this.setState({
      updateModalOpen: true,
      id,
    });
  };

  closeUpdateModal = () => {
    this.setState({
      updateModalOpen: false,
      id: "",
    });
  };

  componentDidMount() {
    this.props.loadTransactions();
  }

  render() {
    let { auth, transactions } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">

         <div className="mainArea">

          <button className="btn btn-primary btn-sm createbutton" onClick={this.openCreateModal}>
            Create New Transaction
          </button>
          <CreateTransaction
            isOpen={this.state.createModalOpen}
            close={this.closeCreateModal}
          />
          <br />


          {transactions.length > 0 ? (
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, i) => (
                  <tr key={i}>
                    <th scope="row">{transaction.id}</th>
                    <td>{transaction.title}</td>
                    <td>{transaction.body}</td>
                    <td width="160px">
                      {this.state.id === transaction.id ? (
                        <UpdateTransaction
                          isOpen={this.state.updateModalOpen}
                          close={this.closeUpdateModal}
                          transaction={transaction}
                        />
                      ) : null}

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          this.props.removeTransaction(transaction.id)
                        }
                      >
                        remove
                      </button>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => this.openUpdateModal(transaction.id)}
                      >
                        update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>There is no transaction</p>
          )}

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  transactions: state.transactions,
});

export default connect(mapStateToProps, {
  loadTransactions,
  removeTransaction,
})(Dashboard);
