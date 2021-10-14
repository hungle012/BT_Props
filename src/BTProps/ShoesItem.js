import React, { Component } from 'react'

export default class ShoesItem extends Component {
    render() {
        let { data, view, add } = this.props;
        return (
            <div className="col-3 my-4">
                <div className="card">
                    <img src={data.image} className="card-img-top" alt="..." data-toggle="modal" data-target="#DetailsModal" />
                    <div className="card-body p-1">
                        <h6 className="card-title text-danger font-weight-bold">{data.name}</h6>
                        <p className="card-text font-weight-bold">${data.price}</p>
                        <a href="" className="btn btn-success mb-3 mx-1" data-toggle="modal" data-target="#DetailsModal" onClick={() => {
                            view(data)
                        }}>Details</a>
                        <a href="" className="btn btn-success mb-3 mx-1" data-toggle="modal" data-target="#Cart" onClick={() => {
                            add(data)
                        }}>Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
}