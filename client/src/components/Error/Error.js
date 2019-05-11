import React from 'react';
import { Button } from "react-bootstrap";

export class Error extends React.Component {
    constructor(props){
        super(props);
        this.goHome.bind(this);
    }

    goHome = event => {
        window.location = "/";
    }

    render() {
        return(
            <div className="Dashboard">
               <h1>Cette page n'existe pas :(</h1>
               <p>#ERROR404</p>

                <Button
                onClick={this.goHome}
                block
                bsSize="large"
                type="submit"
                >
                Revenir à l'accueil
                </Button>

            </div>
        )
    }
}