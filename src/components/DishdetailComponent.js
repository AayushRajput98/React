import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComment({ comments }) {
    
        if (comments != null) {
            const comment = comments.map((comment) => {
                var date = comment.date;
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var split_date = date.split("-");
                var Date = months[parseInt(split_date[1]) - 1] + ' ' + split_date[2].substring(0, 2) + ', ' + split_date[0];
                return (
                    <li>
                        <div className='row'>
                            <div className='col'>
                                <p> {comment.comment} </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p> -- {comment.author} , {Date} </p>
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

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/menu' style={{ color: 'black' }}> Menu </Link> </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> {props.dish.name} </h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-5 mt-1 mb-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 mt-1 mb-1'>
                        <RenderComment comments={props.comments} />
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

export default DishDetail;