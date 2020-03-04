import React, { Component } from "react";
import { Grid, Cell, Button } from 'react-mdl'
import './LandingPage.css'
import StickyFooter from 'react-sticky-footer'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="avatar-img">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/web-design-and-development-1-2/512/3-512.png"
                                alt="avatar"
                            />
                        </div>
                        <div className="banner-text">
                            <h1>Computer Graphics</h1>
                            <hr/>
                            <p>2nd Year | 2nd Semester | 2019/2020 | MIEIC | FEUP</p>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default LandingPage;