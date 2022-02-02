import React, { Component } from 'react'; 
import Opis from '../components/Opis';
import Title from '../components/Title';
import Author from '../components/Author';

class OneBook extends Component {
     
    render() {
        return (
            <div>
              <Title classTitle="naglowek-1" title="W pustynii i puszczy"></Title>
              <Author classAuthor="author-class" authorValue="Juliusz Słowacki"></Author>
              <Opis classOpis="opis-class" opisValue="Ksiązka długa, fajna i nudna jedocześnie. "></Opis>

            </div>

        )
    }
}
export default OneBook;