import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTeams } from '../duck/actions';

type Props = {};
class Home extends Component<Props> {

    constructor(props) {
        super(props);
        console.log("store: ", this.props);
        //console.log("Store: ", this.props.getState());
        this.state = {
            data: "test"
        }
    }
/*
    componentDidMount() {
        Users.all().then((data) => {
         console.warn("chack api data", data);
         });
    }
*/
    onButtonPreset() {
       // console.log("Duck: ", Duck);
        this.props.loadTeams();
        console.log("Teams: ", this.props.teams);
        console.log("Go change", this.state.data);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onButtonPreset}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log("Se modifico el state: ", state);
    return {
        teams: state.teamsReducer.teams
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadTeams }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});