import React from "react";
import styles from "./Card.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames";

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
	if (!confirmed) {
		return (
			<div className={styles.loading}>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color='textPrimary' gutterBottom>
							Infected Patients
						</Typography>
						<Typography variant='h5'>
							<Countup
								start={0}
								end={confirmed.value}
								separator={","}
								duration={2}
							/>
						</Typography>
						<Typography color='textSecondary'>
							{(lastUpdate = new Date().toDateString())}
						</Typography>
						<Typography variant='body2'>
							No.Of Active Cases in COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color='textPrimary' gutterBottom>
							Recovered Patients
						</Typography>
						<Typography variant='h5'>
							<Countup
								start={0}
								end={recovered.value}
								separator={","}
								duration={2}
							/>
						</Typography>
						<Typography color='textSecondary'>
							{(lastUpdate = new Date().toDateString())}
						</Typography>
						<Typography variant='body2'>
							No.Of Recovered Cases from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color='textPrimary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5'>
							<Countup
								start={0}
								end={deaths.value}
								separator={","}
								duration={2}
							/>
						</Typography>
						<Typography color='textSecondary'>
							{(lastUpdate = new Date().toDateString())}
						</Typography>
						<Typography variant='body2'>No.Of Deaths by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
