import { IDimensions, IDimensionsAdd } from "../dto/IDimensions";
import { ILocation, ILocationAdd } from "../dto/ILocation";
import { IParcel } from "../dto/IParcel";
import { ITransportMeta, ITransportMetaAdd } from "../dto/ITransportMeta";
import { ITransportNeed, ITransportNeedAdd } from "../dto/ITransportNeed";

export class CreateInitialObjects {
    static initLocation(): ILocation {
        return {
            id: "",
            country: "",
            city: "",
            address: "",
            locationInfo: undefined
        }
    }

    static initLocationAdd(): ILocationAdd {
        return {
            country: "",
            city: "",
            address: "",
            locationInfo: undefined
        }
    }

    static initDimensions(): IDimensions {
        return {
            id: "",
            width: 0,
            height: 0,
            length: 0,
            unitId: null,
            unitCode: "",
            whl: ""
        }
    }

    static initDimensionsAdd(): IDimensionsAdd {
        return {
            width: 0,
            height: 0,
            length: 0,
            unitId: null
        }
    }

    static initTransportMetaAdd(): ITransportMetaAdd {
        return {
            startLocationId: null,
            destinationLocationId: null,
            startTime: undefined
        }
    }

    static initTransportMeta(): ITransportMeta {
        return {
            id: "",
            startLocation: this.initLocation(),
            destinationLocation: this.initLocation(),
            startTime: new Date(Date.now()).toLocaleString()
        }
    }

    static initParcel(): IParcel {
        return {
            id: "",
            weight: 0,
            parcelInfo: null,
            unitId: "",
            unitCode: "",
            dimensions: this.initDimensions(),
            transportNeedId: ""
        }
    }

    static initTransportNeedAdd(): ITransportNeedAdd {
        return {
            transportNeedInfo: "",
            transportType: undefined,
            personCount: 0,
            transportMetaId: "",
        }
    }

    static initTransportNeed(): ITransportNeed {
        return {
            id: "",
            transportNeedInfo: "",
            transportType: 1,
            personCount: 0,
            transportMeta: this.initTransportMeta(),
            appUserId: "",
            parcelIds: []
        }
    }
}