import React, {Component} from 'react';

class Page extends Component {
    render(){
        const {children} = this.props;
        return(
            <section className="page">
                {children}
            </section>
        )
    }
}

export default Page;