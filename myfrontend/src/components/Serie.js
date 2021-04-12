import React, { useState} from "react";
import axios from "axios";

export default function Serie() {
    const [chapters, setChapters] = useState([]);
    const [thisChapter, setThisChapter] = useState([]);
    const [thisCharacter, setThisCharacter] = useState([]);
    const seasonNumbersBCS = [1, 2, 3, 4, 5, 6];
    const seasonNumbersBB = [1, 2, 3, 4, 5];

    const handleButtonClick1 = (seasonBB) => {

        axios.get(`/BreakingBad/temporada${seasonBB}`).then(response =>
            setChapters(response.data));
    }

    const handleButtonClick2 = (seasonBCS) => {

        axios.get(`/BetterCallSaul/temporada${seasonBCS}`).then(response =>
            setChapters(response.data));
    }

    const handleButtonClick3 = (chapterNumber) => {

        axios.get(`/chapter/${chapterNumber}`).then(response =>
            setThisChapter(response.data));
    }

    const handleButtonClick4 = (characterName) => {

        axios.get(`/character/${characterName}`).then(response =>
            setThisCharacter(response.data));
    }
    
    return (
        <div>
            <h1> API Tarea 0</h1>
            <br></br>
            <h3> Breaking Bad </h3>
            {seasonNumbersBB.map((seasonBB) => {
                console.log('We are currently in season ', seasonBB);
                return (
                    <div key={seasonBB}>
                        <button onClick={() => handleButtonClick1(seasonBB)}>{`Temporada ${seasonBB}`}</button>
                    </div>
                );
            })}

            <h3> Better Call Saul</h3>
            {seasonNumbersBCS.map((seasonBCS) => {
                console.log('We are currently in season ', seasonBCS);
                return (
                    <div key={seasonBCS}>
                        <button onClick={() => handleButtonClick2(seasonBCS)}>{`Temporada ${seasonBCS}`}</button>
                    </div>
                );
            })}

            <h4>Los capítulos de la temporada elegida son:</h4>
            {chapters.map((chap) => {
                var chapter = chap.split(":");
                return (
                    <div key={chap}>
                        <button onClick={() => handleButtonClick3(chapter[1])}> <p>{chapter[0]}</p> </button>
                    </div>
                );
            })}

            <h4>Información capítulo:</h4>

            
            {thisChapter.map((info) => {
                var dato = info.split(':');
                if (dato[0] === "characters")
                {
                    var lista_personajes = dato[1].split(',')
                    var botones = []
                    for (let step = 0; step < lista_personajes.length; step++)
                    {
                        var personaje = <div key={lista_personajes[step]}> <button onClick={() => handleButtonClick4(lista_personajes[step])}> <p> {lista_personajes[step]} </p> </button> </div>;
                        botones.push(personaje);
                    }
                    dato[1] = botones;
                }
                return (
                    <div key={info}>
                        <p><b> {dato[0]} </b></p>
                        {dato[1]}
                        
                    </div>
                );
            })}
            
            <h4>Información del personaje:</h4>
            {thisCharacter.map((character_info) => {
                return (
                    <div key={character_info}>
                        <p> {character_info}</p>
                    </div>
                );
            })}

        </div>
    );

}
