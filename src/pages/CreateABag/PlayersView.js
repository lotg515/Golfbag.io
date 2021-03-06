import React from "react";
import PlayerCard from "../../components/cards/playerCard"

import { Circle } from 'react-spinners-css';



class PlayersView extends React.Component {
    constructor(props) {
        super(props)
        this.searchByFilter = this.searchByFilter.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            API_CALL: "/api/golfers/all/",
            country: false,
            tour: false,
            sponsorship: false,
            loading: true
        }
    }



    searchByFilter() {
        this.setState({
            loading: true
        })
        this.setState({

        API_CALL: `/api/golfers/filters/${this.state.tour}/${this.state.sponsorship}/${this.state.country}`, 
    },  console.log(this.state.sponsorship))

   this.setState({
       loading: false
   })
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }


    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }




    render() {
        if (this.state.loading) {
            return (
                <Circle/>
            )
        }
        return (

            <div>
                <PlayerCard
                API_CALL = {this.state.API_CALL}
                tourOnChange = {(e) => {this.handleChange(e)}}
                countryOnChange = {(e) => {this.handleChange(e)}}
                sponsorOnChange = {(e) => {this.handleChange(e)}}
                onClick = {this.searchByFilter}
                />
            </div>
        )
    
    }

}

export default PlayersView