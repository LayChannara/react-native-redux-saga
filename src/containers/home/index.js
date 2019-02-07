import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../redux/actions'

class Home extends Component {

	componentDidMount() {
		this.props.fetchUser(1, 10);
	}

	render() {
		let styles = {
			container: {
				flex: 1,
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center"
			}
		}
		return (
			<View style={styles.container}>
				<Text> Count {this.props.users.list.length}</Text>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { users: state.users }
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)