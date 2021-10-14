import React, { Component } from 'react'

export default class Cart extends Component {
    renderCart = () => {
        let { cart, deleteItem, tangGiamSL } = this.props;
        return cart.map((item, index) => {
            return (
                <tr key={index}>
                    <td style={{ width: "100px" }}>
                        <img className="img-fluid" src={item.image} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                        <button className="btn" onClick={() => {
                            tangGiamSL(item.id,-1)
                        }}><i class="bi bi-dash-lg mx-2"></i></button>
                        <span>{item.soLuong}</span>
                        <button className="btn" onClick={() => {
                            tangGiamSL(item.id,1)
                        }}><i class="bi bi-plus-lg mx-2"></i></button>
                    </td>
                    <td>${item.soLuong * item.price}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => {
                            deleteItem(item)   
                        }}>
                            <i className="bi bi-x-lg" />
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="modal fade" id="Cart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Your Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">
                                            <span><i className="bi bi-trash" /></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
