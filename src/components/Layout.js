import { connect } from 'react-redux';
import Header from './Header'

const Layout = (props) => {
    return(
        <div>
            {/* TODO:headはdivタグ内に入れるとだめらしい */}
            <head>
                <title>{props.title}</title>
                <meta charSet='utf-8'/>
            </head>
            <Header/>
            {props.children}
        </div>
    )
}

export default connect((state)=>state)(Layout);