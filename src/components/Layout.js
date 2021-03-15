import Header from './Header'

const Layout = (props) => {
    return(
        <div>
            <head>
                <title>{props.title}</title>
                <meta charSet='utf-8'/>
            </head>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;