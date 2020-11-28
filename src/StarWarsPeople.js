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
                        <th>Peso</th>
                        <th>Color de Pelo</th>
                        <th>Color de piel</th>
                        <th>Color de ojos</th>
                        <th>Nacimiento</th>
                        <th>Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(character =>{
                        return (<tr>
                            <td>{character.name}</td>
                            <td>{character.height}</td>
                            <td>{character.mass}</td>
                            <td>{character.hair_color}</td>
                            <td>{character.skin_color}</td>
                            <td>{character.eye_color}</td>
                            <td>{character.birth_year}</td>
                            <td>{character.gender}</td>
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