import React from 'react';

export default class StarWarsPeople extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount(){
        this.loadData();
    }
    render(){
        return <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Altura</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(character =>{
                        return (<tr>
                            <td>{character.name}</td>
                            <td>{character.height}</td>
                        </tr>
                    )
                    })}
                </tbody>
        </table>;
    }
    async loadData(){
        let response = await fetch("https://swapi.dev/api/people/");
        let parsedResponse = await response.json();
        this.setState({
            data: parsedResponse.results
        });
    }
}