import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Image,
} from "react-native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {fetchMovieClicked, movieAction} from '../actions/appAction'
import { connect } from 'react-redux'
import Snackbar from 'react-native-snackbar';
import {showSnackbar} from '../component/utils'
export const NetworkContext = React.createContext({ isConnected: true });
var conn;

class NetworkProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            conn:''
        }
        
    }
    componentDidMount(){
        //  this.props.fetchMovieClicked();
      //  NetInfo.addEventListener('connectionChange', this._handleConnectionChange);
      this.netinfoUnsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);
        // NetInfo.isConnected.addEventListener('connectionChange',   );
    
        // }
    }
        handleConnectivityChange = (state) =>{
       
                // this.setState({conn:state.isConnected})

                this.setState((prevState)=> {
                    return { conn:state.isConnected}
                },()=> {
                    if(this.state.conn == true)
                    {
                        showSnackbar('Internet is back')
                    }
                    else
                    {
                        showSnackbar('No Internet')
                    }
                })

               console.log("Connection type", state.isConnected);
             //  console.log("Is connected?", state.isConnected);
    
           //   this.delayTimeOut(state.isConnected)
    }
    delayTimeOut = (state) =>{
        // if (state === true)
        // { 
        //     console.log('connected true')
           
        //     setTimeout(() => {
        //        showSnackbar('Internet is back')
        //      }, 2000);
        // }
        // else if (state === false){
        //     console.log('connected false')
        //     setTimeout(() => {
        //        showSnackbar('No Internet')
        //      }, 2000);
        // }
                if(this.state.conn == state){
                    setTimeout(() => {
                               showSnackbar('No Internet')
                             }, 2000);
                }
     }
componentWillUnmount() {
  //  NetInfo.removeEventListener('connectionChange', this._handleConnectionChange);
    if (this.netinfoUnsubscribe) {
        this.netinfoUnsubscribe();
        this.netinfoUnsubscribe = null;
      }
  }
  
  _handleConnectionChange = (connectionInfo) =>{
      console.log('connectionInfo') 
      console.log(connectionInfo) 
      this.props.movieAction(connectionInfo);
  }
     

     
    render() {
        console.log('reducer')
         console.log(this.state.conn)
         

        //console.log(this.props.appReducer.connectionInfo)
        return (
            <View>
                {/* <Text>{JSON.stringify(this.props.appReducer.connectionInfo)}</Text> */}
                <Text>{`${this.state.conn}`}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {

    return {
        appReducer: state.app,
    }
  }
export default connect ((mapStateToProps), {movieAction}) (NetworkProvider);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});