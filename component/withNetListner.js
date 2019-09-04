// // hoc/withNetListeners.js
// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     TouchableHighlight,
//     Image,
// } from "react-native";
// export default function withNetListeners(SourceComponent) {
//     class HOC extends React.Component {
//       constructor(props) {
//         super(props);
//         props.dispatch(connectionActions.registerListeners());
//       }
  
//       componentWillUnmount() {
//         this.props.dispatch(connectionActions.unregisterListeners());
//       }
  
//       render() {
//         return <SourceComponent {...this.props} />;
//       }
//     }
//     return hoistStatics(HOC, SourceComponent); // Package hoist-non-react-statics
//   }