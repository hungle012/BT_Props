import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {details,add} = this.props;
        return (
            <div className="modal fade" id="DetailsModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-5">
                                    <h3>{details.name}</h3>
                                    <img className="img-fluid" src={details.image} alt />
                                </div>
                                <div className="col-7">
                                    <h3>Products</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{details.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Alias</td>
                                                <td>{details.alias}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>${details.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{details.description}</td>
                                            </tr>
                                            <tr>
                                                <td>Short Description</td>
                                                <td>{details.shortDescription}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{details.quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#Cart" onClick={() => {
                                add(details)
                            }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
