import React from 'react';

export const MadLib = props => {

    return <> 
    <p>Now, you may look at JavaScript and think "this is <span class="bold">{props.user.adjective1}</span>". However, you could not be more wrong! JavaScript is actually a <span class="bold">{props.user.adjective2}</span> programming language
    that can be useful when attempting to make a <span class="bold">{props.user.noun1}</span>. When coding for long periods of time, beware of <span class="bold">{props.user.pluralNoun}</span> as they can be problematic! Lastly, if you feel like slamming your
    computer against a <span class="bold">{props.user.noun2}</span>, it may be time for you to take a break...</p>
    </>

    
}