import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../duck/actions';

type Props = {};
class Home extends Component<Props> {

    constructor(props) {
        super(props);
        console.log("store: ", this.props);
        console.log("Teams: ", this.props.teams);
        this.loadTeamsRender = this.loadTeamsRender.bind(this);
    }
/*
    componentDidMount() {
        Users.all().then((data) => {
         console.warn("chack api data", data);
         });
    }
*/
    loadTeamsRender() {
        this.props.fetchTeams();
    }

    render() {
        var listItems = this.props.teams.map((item, index) => {
            return (
                <Text key="{index}">
                   {item.name}
                </Text>
            );
        });

        return (
            <View style={styles.container}>
                { listItems }
                <Button
                    onPress={this.loadTeamsRender}
                    title="load teams"
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
    return bindActionCreators({ fetchTeams }, dispatch);
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