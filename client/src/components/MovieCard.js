import React, { useState } from "react";
import defaultPoster from "../Stylesheets/default.png";
import {
    Card,
    CardContent,
    CardMedia,
    useTheme,
} from "@material-ui/core";

const MovieCard = (props) => {
    const [hover, setHover] = useState(false);

    const styles = {
        display: "flex",
        width: "270px",
        margin: "10px",
        backgroundColor: "transparent",  
        height: "auto",
        marginTop: "10px",    
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "15px",
    };

    return (
        <Card style={styles} raised={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <CardMedia
                    component="img"
                    alt={`${props.title} poster`}
                    width="100%"
                    image={props.poster ? `https://image.tmdb.org/t/p/w300${props.poster}` : defaultPoster}
                    title={`${props.title}`}
                />
                <CardContent>
                    <h2 style={{ margin: "0px" }}>{props.title}</h2>
                    <h3 style={{ margin: "0px 0px 5px 0px" }}>{props.year}</h3>

                </CardContent>
        </Card>
    );
};

export default MovieCard;
