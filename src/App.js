import React, { Component } from "react";
import Card from "./Components/Card/Card";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import styles from "./Styles/App.module.css";
import { fetchData } from "./api";
import image from "./images/covid-19.png";

export default class App extends Component {
	state = {
		data: {},
		country: "",
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data });
	}

	onChangeHandle = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.logo} src={image} alt='covid-19' />
				<Card
					confirmed={confirmed}
					recovered={recovered}
					deaths={deaths}
					lastUpdate={lastUpdate}
				/>
				<CountryPicker onChangeHandler={this.onChangeHandle} />
				<Chart data={this.state.data} country={this.state.country} />
			</div>
		);
	}
}
