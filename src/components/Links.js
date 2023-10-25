import React from 'react';

function Links(props){
    return(
        <div>
            <h3>Links</h3>
            <a href={props.githubLink}>https://github.com/liza</a>
            <a href={props.linkedIn}>https://www.linkedin.com/in/liza/</a>
        </div>
    );
}

export default Links;