import React, {Component} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
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
    change(x) {
       // console.log("Duck: ", Duck);
        this.props.loadTeams();
        this.setState({data: x*10});
        console.log("Go change", this.state.data);
        return x*5;
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    testID={'username'}
                    onChangeText={(text) => this.change(text)}
                    style={{ backgroundColor: 'gray', marginBottom: 15}}
                    placeholder="Enter username" />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams
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