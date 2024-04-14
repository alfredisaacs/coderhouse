import { useState, useEffect } from 'react';
import MD5 from 'js-md5';

const Heroes = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchMarvelCharacters = async () => {
          const publicKey = '99cc55ceee9b9f14d02f79cc40943291';
          const privateKey = '243a9e3bf0fd7465f157ce5fcb513f0bd7298962';
          const ts = new Date().getTime().toString();
          const hash = MD5(ts + privateKey + publicKey).toString();
    
          const response = await fetch(
            `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
          );
          const data = await response.json();
          setCharacters(data.data.results);
        };
        fetchMarvelCharacters();
      }, []);
    return (
        <div>
            <h2>Marvel Characters:</h2>
            <ul>
                {characters.map((character) => (
                <li key={character.id}>
                    <strong>{character.name}</strong>
                </li>
                ))}
            </ul>
        </div>
    )
};

export default Heroes;