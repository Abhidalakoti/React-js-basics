iimport React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default App;

   App.defaultProps = {
      headerProp: "This is header Prop....",
      contentProp: "This is content prop..."
   }




   export default App;



