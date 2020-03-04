import React, {Component} from 'react';
import { Grid, Cell } from "react-mdl";
import Exercise from "./Exercise";
import './ExercisesPage.css'


class ExercisesPage extends Component {
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="exercises-grid">
                    <Cell col={12}>
                        <Exercise id="1"
                                  text="Install, explore and learn to use the basic libraries and examples for the practical classes, as
                                        well as the steps for submitting results;
                                        Learning how to create and use an interface (GUI) to control aspects of the scene and its
                                        objects;
                                        Learning how to create simple objects."
                                  link="https://github.com/skdGT/feup-cgra/raw/master/ex1/ex1.pdf"
                                  img="https://revelwallpapers.net/media/wallpapers/abstract_computer_science_connecting_rods_dark_digital_art_1366x768_81569.jpg"
                        />
                    </Cell>
                    <Cell col={12}>
                        <Exercise id="2"
                                  text="Use matrices to manipulate / modify geometric shapes;
                                        Use WebCGF functionalities to facilitate the definition and application of geometric transformations;
                                        Create composite 3D objects."
                                  link="https://github.com/skdGT/feup-cgra/raw/master/ex2/ex2.pdf"
                                  img="https://c4.wallpaperflare.com/wallpaper/458/604/20/cube-render-cgi-dark-wallpaper-preview.jpg"
                        />
                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default ExercisesPage;