import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ITransportNeed } from "../dto/ITransportNeed";
import { Helper } from "../helpers/Helper";

const TableRow = (props: { transportNeed: ITransportNeed }) => {
    const appState = useContext(AppContext);

    return (
        <tr>
            <td>{props.transportNeed.transportType}</td>
            <td>{props.transportNeed.personCount}</td>
            <td>{props.transportNeed.transportMeta.startLocation?.city} {" -> "} {props.transportNeed.transportMeta.destinationLocation?.city}</td>
            <td>{new Date(props.transportNeed.transportMeta.startTime).toLocaleDateString()}</td>
            <td>
                {appState.token && Helper.getUserIdFromToken(appState.token) === props.transportNeed.appUserId ?
                   (<><Link to={'/transportneeds/edit/' + props.transportNeed.id}>Edit</Link> | </>) : null }

                <Link to={'/transportneeds/' + props.transportNeed.id}>Details</Link>
                
                {appState.token && Helper.getUserIdFromToken(appState.token) === props.transportNeed.appUserId ?
                   (<> | <Link to={'/transportneeds/delete/' + props.transportNeed.id}>Delete</Link>  </>) : null }

            </td>
        </tr>
    );
}
const TransportNeedList = (props: { transportNeeds: ITransportNeed[] }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Transport type</th>
                    <th>Person count</th>
                    <th>Transport metainfo</th>
                    <th>Start time</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.transportNeeds.map(transportNeed => (<TableRow transportNeed={transportNeed} key={transportNeed.id} />))}
            </tbody>
        </table>
    );
}

export default TransportNeedList;