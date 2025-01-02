import React from "react";
import styles from "./Track.module.css"

function Track (props) {
    function renderAction () {
        return <button className={styles.TrackAction}>{props.isRemoval ? "-" : "+"}</button>
        /*if (props.isRemoval) {
            return <button className={styles.TrackAction}>-</button>
        } else {
            return <button className={styles.TrackAction}>+</button>
        }*/
    }
    return (
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          {/* <h3><!-- track name will go here --></h3> */}
          <h3>{props.track.name}</h3>
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
          <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {/* <button class="TrackAction"><!-- + or - will go here --></button> */}
      </div>
    );
}

export default Track;