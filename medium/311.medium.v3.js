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

    if (classEarth.name === "MoonRoute") {
        const cl = classEarth;
        classEarth = classMoon;
        classMoon = cl;
    }
    classEarth.prototype.transfer = function (parcel) {
        parcel.destination = "Earth";
        classEarth.vault.push(parcel);

        newParcel = Object.assign({}, parcel);
        newParcel.origin = `${newParcel.destination}`;
        newParcel.destination = "Mothership";

        motherRoute.push(newParcel);
    };

    classMoon.prototype.transfer = function (parcel) {
        parcel.destination = "Moon";
        classMoon.warehouse.push(parcel);

        newParcel = Object.assign({}, parcel);
        newParcel.origin = `${newParcel.destination}`;
        newParcel.destination = "Mothership";

        motherRoute.push(newParcel);
    };

    return motherRoute;
}

const mothershipStorage = extendTransportSystem(MoonRoute, EarthRoute);

const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();

earthRoute1.transfer({ content: 1232 });
earthRoute1.transfer(() => {});
moonRoute2.transfer({ text: "abc" });

console.log(mothershipStorage);
console.log(typeof MoonRoute);
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
