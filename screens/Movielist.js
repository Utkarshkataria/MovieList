import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Image
} from "react-native";
import {fetchMovieClicked} from '../actions/appAction'
import { connect } from 'react-redux'
import { bold } from "ansi-colors";


class MovieList extends Component {

  constructor(props){
      super(props)
     this.state = {
         btnColor:'white',
         textColor:'black'
     }
  }
   
  componentDidMount(){
    this.props.fetchMovieClicked();
  }
    render() {
        console.log('reducer')
        console.log(this.props.appReducer.data)
        return (
            <View style={styles.container}>
                 <FlatList
        data={this.props.appReducer.data}
        // extraData={this.state}
        // keyExtractor={this._keyExtractor}
        renderItem={this._renderItem.bind()}
        style={{width:'100%'}}
      />
            </View>
        );
    }

    _renderItem =(data,index)=>{
        console.log('testt')
        console.log(data)
        const item = data.cleanData ? data.cleanData : data
        console.log('itemm')
        console.log(item.item.title)
             return(<View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
                {/* <Text style={{fontSize:20,fontWeight:'400',margin:5}}>Title</Text> */}
                <Text style={{fontSize:20,fontWeight:'400',margin:5}}>{item.item.title}</Text>
                <Image
                source={{
                    uri:"https://image.tmdb.org/t/p/original"+item.item.poster_path
                }}
                style={{width:'95%',height:300}}
                ></Image>

                     <Text style={{margin:5}}>{item.item.overview}</Text>
                  
                  <View style={{flexDirection:'row',flex:1}}>

                  <TouchableHighlight 
                   style={{flex:1,width:70,height:40,backgroundColor:this.state.btnColor,alignItems:'center',justifyContent:'center',borderRadius:10,margin:5,borderColor:'blue',borderWidth:2}}
                   onPress={()=>{
                     if(this.state.btnColor == 'white'){
                         this.setState({btnColor:'blue',textColor:'white'})

                     }
                     else {
                         this.setState({
                             btnColor:'white',textColor:'black'
                         })
                     }
                 }}
               
                   >
                 <Text style={{fontSize:20,fontFamily:'bold',color:this.state.textColor}}
                 >Like</Text>
                   
                  </TouchableHighlight>  

                  <TouchableHighlight 
                   style={{flex:1,width:70,height:40,backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:10,margin:5}}
                   >
                 <Text style={{fontSize:20,fontFamily:'bold',color:'white'}}>Load more</Text>
                   
                  </TouchableHighlight>  
                  </View>               
              

             </View>)
    }
}

function mapStateToProps(state) {

    return {
        appReducer: state.app,
    }
  }
export default connect(mapStateToProps, {fetchMovieClicked})(MovieList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
       
    }
});