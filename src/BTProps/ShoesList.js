import React, { Component } from 'react'
import ShoesItem from './ShoesItem';

export default class ShoesList extends Component {
    renderShoesList() {
        let { data,view,add } = this.props;
        return data.map((item, index) => {
            return (
                <ShoesItem data={item} key={index} view={view} add={add}/>
            )
        })


    }
    render() {
        return (
             <div className="row" >
                 {this.renderShoesList()}
             </div>
        )
    }
}
