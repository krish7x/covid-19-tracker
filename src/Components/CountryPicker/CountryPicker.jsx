import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchContryData } from "../../api";

const CountryPicker = ({ onChangeHandler }) => {
	const [countryData, setCountryData] = useState([]);

	const fetchAPI = async () => {
		const fetchData = await fetchContryData();

		setCountryData(fetchData);
	};

	useEffect(() => {
		fetchAPI();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=''
				onChange={(event) => onChangeHandler(event.target.value)}>
				<option value='global'>Global</option>
				{countryData
					? countryData.map((country, index) => (
							<option key={index} value={country.country}>
								{country.country}
							</option>
					  ))
					: "null"}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
