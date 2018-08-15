/*
import React, { Component } from 'react';
import { Dimensions, Image, Platform, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { AppStyles } from '../styles/styles';

class TabSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('props--', this.props);
    }


    render() {
        return (
            <View style={[styles.containers]}>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUnit: state.projectsStore.selectedUnit
    };
}

export default connect(mapStateToProps)(TabSwiper);

const styles = StyleSheet.create({
    containers: {
        flex: 1
    },
    toolbarImage: {
        resizeMode: 'cover',
        width: 100,
        height: 30,
        marginRight: 70
    }
});
*/