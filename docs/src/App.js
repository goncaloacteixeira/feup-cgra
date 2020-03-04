import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExercisesPage from "./component/ExercisesPage";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./component/main";
import { Link } from "react-router-dom"


function App() {
    return (
        <div className="App">
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title=" " scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/exercises">Exercises</Link>
                            {/*<Link to="/exercises">Exercises</Link>
                            <Link to="/exercises">Exercises</Link>*/}
                        </Navigation>
                    </Header>
                    <Drawer title="CGRA">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/exercises">Exercises</Link>
                            {/*<Link to="/exercises">Exercises</Link>
                            <Link to="/exercises">Exercises</Link>*/}
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content">
                            <Main/>
                        </div>
                    </Content>
                </Layout>
            </div>
        </div>

    );
}

export default App;
