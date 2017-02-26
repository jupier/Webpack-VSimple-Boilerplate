/**
 * Created by julienpieropan on 26/02/2017.
 */

require('../css/style.css');

const React = require('react');
const ReactDom = require('react-dom');

class FooterComponent extends React.Component {
    render() {
        return
                <div>Made By JPIE</div>;
    }
}

ReactDom.render(
    <FooterComponent/>,
    document.getElementById('footer')
);