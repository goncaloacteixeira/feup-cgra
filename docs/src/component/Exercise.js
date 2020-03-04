import React, { Component } from "react";
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, IconButton} from "react-mdl";
import './Exercise.css'

class Exercise extends Component {
    render() {
        return (
            <div>
                <Card shadow={0} style={{width: '1024px', margin: 'auto'}} className="exercise-card">
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url( ' + this.props.img + ') center / cover'}}>
                        {"Exercise " + this.props.id}
                    </CardTitle>
                    <CardText>
                        <p>{this.props.text}</p>
                    </CardText>
                    <CardActions border className="buttons">
                        <a href={"https://skdgt.github.io/feup-cgra/ex" + this.props.id} rel="noopener noreferrer" target="_blank">
                            <Button ripple>Get Started</Button>
                        </a>
                        <a href={"https://github.com/skdGT/feup-cgra/tree/master/ex" + this.props.id} rel="noopener noreferrer" target="_blank">
                            <Button ripple>GitHub</Button>
                        </a>
                        <a href={this.props.link}>
                            <Button ripple>PDF</Button>
                        </a>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        );
    }
}

export default Exercise;