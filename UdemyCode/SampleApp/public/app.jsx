var Greeter = React.createClass({
    render : function(){
        return (
            // Everything needs to be included in the root element which is the div 
            <div>
                <h1> Hello React</h1>
                <p> This is from component </p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>, 
    document.getElementById('app')
);