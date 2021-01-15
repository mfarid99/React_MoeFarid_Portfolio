import { Typography } from "@material-ui/core"
import React from "react"
import "./Profile.css"
import CustomTimeline from "../Timeline/Timeline"

const Profile = () => {
    return (

        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">
                    Moe
                </Typography>
                <Typography className="title">
                    Title
                </Typography>
            </div>
            <figure className="profile_image">
                <img src = "https://i.imgur.com/eqe0lEs.jpg" alt=""/>
            </figure>

            <div className="profile_information">
            <CustomTimeline />
                <br/>
                <button>my button</button>
            </div>
        </div>


    )
}
export default Profile