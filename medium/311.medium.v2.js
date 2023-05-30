class EarthRoute {
    static vault = [];
    transfer(parcel) {
        parcel.destination = "Earth";
        EarthRoute.vault.push(parcel);
    }
}

class MoonRoute {
    static warehouse = [];
    transfer(parcel) {
        parcel.destination = "Moon";
        MoonRoute.warehouse.push(parcel);
    }
}

function extendTransportSystem(classEarth, classMoon) {
    const motherRoute = [];

    classEarth.prototype.transfer = function (parcel) {
        parcel.destination = "Earth";
        EarthRoute.vault.push(parcel);

        newParcel = JSON.parse(JSON.stringify(parcel));
        newParcel.origin = parcel.destination;
        newParcel.destination = "Mothership";

        motherRoute.push(newParcel);
    };

    classMoon.prototype.transfer = function (parcel) {
        parcel.destination = "Moon";
        MoonRoute.warehouse.push(parcel);

        newParcel = JSON.parse(JSON.stringify(parcel));
        newParcel.origin = parcel.destination;
        newParcel.destination = "Mothership";

        motherRoute.push(newParcel);
    };

    return motherRoute;
}

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);

const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();

earthRoute1.transfer({ content: 1232 });
earthRoute1.transfer({ content: 1233 });
moonRoute2.transfer({ text: "abc" });

console.log(mothershipStorage);
/* [
 *   { content: 123, origin: 'Earth', destination: 'Mothership' },
 *   { text: 'abc', origin: 'Moon', destination: 'Mothership' }
 * ]
 */

console.log(EarthRoute.vault);
/* [
 *   { content: 123, destination: 'Earth' }
 * ]
 */

console.log(MoonRoute.warehouse);
/* [
 *   { text: 'abc', destination: 'Moon' }
 * ]
 */
