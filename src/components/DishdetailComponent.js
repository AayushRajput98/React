import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    printDate(date) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var split_date = date.split("-");
        var printDate = months[parseInt(split_date[1]) - 1] + ' ' + split_date[2].substring(0, 2) + ', ' + split_date[0];
        return printDate;
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle> {dish.name} </CardTitle>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
            );

    }

    renderComment(comments) {
        if (comments != null) {
            const comment = comments.map((comment) => {
                return (
                    <li>
                        <div className='row'>
                            <div className='col'>
                                <p> {comment.comment} </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p> -- {comment.author} , {this.printDate(comment.date)}</p>
                            </div>
                        </div>
                    </li>
                );
            }
            );
            return (
                <div>
                    <h4> Comments </h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
                );
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className='container'>
                    <div className="row">
                        <div className='col-12 col-md-5 mt-1'>
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className='col-12 col-md-5 mt-1'>
                            {this.renderComment(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }
}

export default DishDetail;