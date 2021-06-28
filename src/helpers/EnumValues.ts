import { ETransportType } from "../dto/enums/ETransportType";

export class EnumValues {

    static getTransportTypeValues(): number[] {
        var enumValues: number[] = [];
        for (var val in ETransportType) {
            if (!isNaN(Number(val))) {
                enumValues.push(parseInt(val));
            }
        }
        return enumValues;

    }
    static getEType(transportType: number): string {
        return ETransportType[transportType];
    }
}