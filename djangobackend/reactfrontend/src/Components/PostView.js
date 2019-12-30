import React, {Component} from 'react'

export default class PostView extends Component{
    render(){
        const {id,title,content}=this.props
        return(
            <div>
               {id}
                <h3>
                   
                    {title}

                </h3>
                <p>
                    {content}
                </p>
            </div>
            )
        
    }
}